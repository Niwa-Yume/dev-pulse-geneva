"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Fond shader inspiré des paramètres shadergradient.co (waterPlane)
 * URL de référence donnée par l'utilisateur.
 */
export default function ShaderHeroBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#020409", 0.22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const fov = 45;
    const camera = new THREE.PerspectiveCamera(
      fov,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    // Conversion angles (deg) -> radians (polar 70°, azimuth 170°)
    const polar = (70 * Math.PI) / 180;
    const azimuth = (170 * Math.PI) / 180;
    const dist = 4.4;
    camera.position.set(
      dist * Math.sin(polar) * Math.cos(azimuth),
      dist * Math.cos(polar),
      dist * Math.sin(polar) * Math.sin(azimuth)
    );
    camera.lookAt(0, 0, 0);

    // Plane + shader
    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.2 },
      uDensity: { value: 1.2 },
      uStrength: { value: 3.4 },
      uColor1: { value: new THREE.Color("#94ffd1") },
      uColor2: { value: new THREE.Color("#6bf5ff") },
      uColor3: { value: new THREE.Color("#ffffff") },
      uBrightness: { value: 1.2 },
    };

    const vertex = /* glsl */ `
      uniform float uTime; uniform float uSpeed; uniform float uDensity; uniform float uStrength;
      varying float vH; varying vec2 vUv;
      float wave(vec2 p){
        return sin(p.x * uDensity + uTime * uSpeed) * cos(p.y * uDensity + uTime * uSpeed);
      }
      void main(){
        vUv = uv;
        float w = wave(position.xz) * uStrength * 0.015; // amplitude visuelle
        vec3 pos = position + normal * w;
        vH = w;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }
    `;
    const fragment = /* glsl */ `
      precision highp float; varying float vH; varying vec2 vUv;
      uniform vec3 uColor1; uniform vec3 uColor2; uniform vec3 uColor3; uniform float uBrightness;
      void main(){
        float h = (vH + 0.05) * 9.0; // normalisation approx
        float m1 = smoothstep(0.0,0.5,h);
        float m2 = smoothstep(0.3,1.0,h);
        vec3 col = mix(uColor1, uColor2, m1);
        col = mix(col, uColor3, m2 * 0.55);
        // vignette légère
        float vig = smoothstep(1.0,0.2,length(vUv-0.5));
        col *= vig * uBrightness;
        gl_FragColor = vec4(col, 0.55); // alpha partiel pour superposer contenu
      }
    `;

    const geo = new THREE.PlaneGeometry(8, 6, 256, 256);
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = THREE.MathUtils.degToRad(45); // rotationX param
    scene.add(mesh);

    const onResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const animate = (t: number) => {
      uniforms.uTime.value = t * 0.001; // ms -> s
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current!);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />;
}

