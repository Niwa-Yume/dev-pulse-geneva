import React from "react";

interface GradientShaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const GradientShader: React.FC<GradientShaderProps> = ({ className = "", style }) => (
  <div
    className={`w-full h-full ${className}`}
    aria-hidden="true"
    style={{
      background: `
        radial-gradient(circle at 20% 30%, #94ffd166, transparent 60%),
        radial-gradient(circle at 80% 50%, #6bf5ff55, transparent 65%),
        linear-gradient(130deg, #021012, #031b21 50%, #031218)
      `,
      animation: 'gradientShift 18s ease-in-out infinite alternate',
      ...style,
    }}
  />
);

export default GradientShader;
