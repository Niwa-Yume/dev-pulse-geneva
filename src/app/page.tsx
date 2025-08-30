import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import PrismaticBurst from "@/components/PrismaticBurst";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-dvh" id="hero">
      {/* PrismaticBurst en arrière-plan global */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={3}
          speed={0.8}
          distort={2.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={32}
          mixBlendMode="screen"
          colors={['#84cc16', '#06b6d4', '#f97316']}
        />
      </div>

      {/* Overlay léger pour contraste */}
      <div className="fixed inset-0 z-10 bg-black/30 pointer-events-none"></div>

      {/* Header */}
      <header className="section-max w-full flex items-center justify-between py-5 z-20 relative">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold hero-gradient-text">
            DevPulse Geneva
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="nav-link">
            Accueil
          </a>
          <a href="#why" className="nav-link">
            Pourquoi
          </a>
          <a href="#values" className="nav-link">
            Valeurs
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col relative z-20">
        <HeroSection />

        {/* Pourquoi nous rejoindre */}
        <section id="why" className="section-max pb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Geneva Tech Community : L&apos;innovation par l&apos;événementiel
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Nous créons LA communauté tech genevoise qui rassemble par l&apos;événementiel.
              Hackathons, conférences, café AI, networking... Un lieu d&apos;entraide où solopreneurs
              et experts des grandes entreprises partagent leurs savoirs entre lac Léman et Mont-Blanc.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mb-12">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></span>
                <span>En construction - Lancement automne 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></span>
                <span>Premiers événements dès octobre</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></span>
                <span>Vision 2030 : Hub événementiel tech alpin</span>
              </div>
            </div>
          </div>

          {/* Design en hexagones connectés */}
          <div className="relative max-w-6xl mx-auto">

            {/* Hexagone central - Café AI */}
            <div className="relative flex justify-center mb-16">
              <div className="group">
                {/* Hexagone principal */}
                <div className="relative w-80 h-80 bg-gradient-to-br from-teal-500/20 to-teal-600/10 backdrop-blur-sm border-2 border-teal-400/30 transform rotate-45 rounded-3xl hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-4 bg-black/30 rounded-2xl transform -rotate-45 flex flex-col items-center justify-center p-6">
                    <div className="text-6xl mb-4">☕</div>
                    <h3 className="text-2xl font-bold text-teal-100 mb-3 text-center">1 IA + 1 Café = 1 Networking</h3>
                    <p className="text-sm text-white/80 text-center leading-relaxed mb-4">
                      Notre format signature ! Rencontres mensuelles décontractées où l&apos;innovation IA
                      rencontre l&apos;esprit Swiss Tech autour d&apos;un café.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                      <span className="bg-teal-500/20 text-teal-200 px-2 py-1 rounded-full">AI</span>
                      <span className="bg-teal-500/20 text-teal-200 px-2 py-1 rounded-full">Veille technique</span>
                      <span className="bg-teal-500/20 text-teal-200 px-2 py-1 rounded-full">Partage</span>
                    </div>
                  </div>
                </div>

                {/* Lignes de connexion vers les autres hexagones */}
                <div className="absolute top-1/2 left-full w-24 h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-full w-24 h-0.5 bg-gradient-to-l from-teal-400/50 to-transparent transform -translate-y-1/2"></div>
                <div className="absolute bottom-full left-1/2 w-0.5 h-24 bg-gradient-to-t from-teal-400/50 to-transparent transform -translate-x-1/2"></div>
                <div className="absolute top-full left-1/2 w-0.5 h-24 bg-gradient-to-b from-teal-400/50 to-transparent transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Hexagones satellites */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

              {/* Hexagone 1 - Événements Premium */}
              <div className="group flex justify-center">
                <div className="relative w-72 h-72 bg-gradient-to-br from-lime-500/20 to-lime-600/10 backdrop-blur-sm border-2 border-lime-400/30 transform rotate-45 rounded-3xl hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-4 bg-black/30 rounded-2xl transform -rotate-45 flex flex-col items-center justify-center p-6">
                    <div className="text-5xl mb-4">🎪</div>
                    <h3 className="text-xl font-bold text-lime-100 mb-3 text-center">Hackathons & Conférences d&apos;excellence</h3>
                    <p className="text-xs text-white/80 text-center leading-relaxed mb-4">
                      Événements tech de qualité suisse avec speakers internationaux.
                      L&apos;innovation se vit par l&apos;expérience collective !
                    </p>
                    <div className="space-y-2 text-xs text-center">
                      <div className="text-lime-200">• FinTech Geneva Hackathon</div>
                      <div className="text-lime-200">• Green IT Workshop</div>
                      <div className="text-lime-200">• Entreprise Tech Talks</div>
                      <div className="text-lime-200">• Astuce de solopreneur</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Espace central pour connexions visuelles */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative">
                  {/* Cercle central de connexion */}
                  <div className="w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400/30 to-purple-400/30 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">🤝</span>
                    </div>
                  </div>

                  {/* Lignes de connexion animées */}
                  <div className="absolute top-1/2 left-full w-20 h-0.5 bg-gradient-to-r from-white/30 to-transparent transform -translate-y-1/2 animate-pulse"></div>
                  <div className="absolute top-1/2 right-full w-20 h-0.5 bg-gradient-to-l from-white/30 to-transparent transform -translate-y-1/2 animate-pulse"></div>
                  <div className="absolute bottom-full left-1/2 w-0.5 h-20 bg-gradient-to-t from-white/30 to-transparent transform -translate-x-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Hexagone 3 - Communauté d'Entraide */}
              <div className="group flex justify-center">
                <div className="relative w-72 h-72 bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border-2 border-orange-400/30 transform rotate-45 rounded-3xl hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-4 bg-black/30 rounded-2xl transform -rotate-45 flex flex-col items-center justify-center p-6">
                    <div className="text-5xl mb-4">🤝</div>
                    <h3 className="text-xl font-bold text-orange-100 mb-3 text-center">Partage de savoir & Entraide collective</h3>
                    <p className="text-xs text-white/80 text-center leading-relaxed mb-4">
                      Lien authentique entre solopreneurs et experts.
                      L&apos;esprit Swiss Tech au service de tous !
                    </p>
                    <div className="space-y-2 text-xs text-center">
                      <div className="text-orange-200">• Solo Founder Therapy</div>
                      <div className="text-orange-200">• Experience de solopreneur</div>
                      <div className="text-orange-200">• Green IT & durabilité</div>
                      <div className="text-orange-200">• 0% vente, 100% partage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section d'impact en bas avec design en vagues */}
          <div className="mt-20 relative">
            {/* Vagues décoratives */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-5 right-20 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-5 left-1/3 w-36 h-36 bg-orange-400/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-lime-300 via-teal-300 to-orange-300 bg-clip-text text-transparent">
                  Geneva Tech Community 2030 : Notre vision événementielle
                </h3>
                <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
                  En cours de création avec l&apos;écosystème tech genevois,
                  nous posons les bases d&apos;une communauté qui transformera la scène tech romande.
                </p>
              </div>

              {/* Métriques en cercles */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 to-lime-600/20 rounded-full"></div>
                    <div className="absolute inset-2 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-lime-300">50+</span>
                    </div>
                  </div>
                  <div className="text-sm text-white/70 text-center">Événements tech par an visés 2027</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-teal-600/20 rounded-full"></div>
                    <div className="absolute inset-2 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-teal-300">2000+</span>
                    </div>
                  </div>
                  <div className="text-sm text-white/70 text-center">Participants actifs communauté objectif 2028</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-orange-600/20 rounded-full"></div>
                    <div className="absolute inset-2 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-300">500+</span>
                    </div>
                  </div>
                  <div className="text-sm text-white/70 text-center">Connexions professionnelles créées par an</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-purple-600/20 rounded-full"></div>
                    <div className="absolute inset-2 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-300">#1</span>
                    </div>
                  </div>
                  <div className="text-sm text-white/70 text-center">Communauté événementielle tech Suisse romande</div>
                </div>
              </div>

              {/* Partenaires en badges flottants */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <span className="text-sm text-white/80">🏛️ EPFL Innovation Park</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <span className="text-sm text-white/80">⚗️ CERN IdeaSquare</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <span className="text-sm text-white/80">🏢 Spaces Coworking</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <span className="text-sm text-white/80">🇨🇭 digitalswitzerland</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <span className="text-sm text-white/80">🌟 Greater Geneva</span>
                </div>
              </div>

              {/* Status badges */}
              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-6 text-xs text-white/50">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Projet en construction - Phase 1
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                    Premier événement octobre 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                    100% gratuit - 0% commercial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Valeurs */}
        <section id="values" className="section-max pb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Notre ADN d&apos;innovation
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Les valeurs qui nous guident dans la création d&apos;une communauté tech genevoise
              authentique, durable et tournée vers l&apos;excellence collective.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <span className="w-2 h-2 bg-gradient-to-r from-lime-400 to-teal-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/80">Valeurs 100% open source • Esprit Swiss Tech</span>
            </div>
          </div>

          {/* Design en timeline verticale */}
          <div className="relative max-w-4xl mx-auto">
            {/* Ligne verticale centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lime-400 via-teal-400 to-orange-400 opacity-30 rounded-full"></div>

            {/* Valeur 1 - Alignée à gauche */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-gradient-to-l from-lime-500/20 to-transparent rounded-2xl p-8 border-r-2 border-lime-400/30">
                  <div className="flex items-center justify-end gap-3 mb-4">
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-lime-100 mb-1">Excellence Collaborative</h3>
                      <p className="text-sm text-lime-300">Valeur #1</p>
                    </div>
                    <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center border-2 border-lime-400/40">
                      <span className="text-lime-300 text-2xl">⚡</span>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Nous croyons que l&apos;excellence technique naît de la collaboration.
                    Pas de compétition toxique, mais un partage authentique des connaissances
                    où chacun élève le niveau de la communauté.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-lime-200">Partage de code & bonnes pratiques</span>
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-lime-200">Code reviews bienveillants</span>
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-lime-200">Standards élevés sans élitisme</span>
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lime-400 rounded-full border-4 border-black/30 z-10"></div>

              <div className="w-1/2 pl-8">
                <div className="bg-gradient-to-r from-lime-500/10 to-transparent rounded-2xl p-6 border-l-2 border-lime-400/20">
                  <blockquote className="text-lime-200 italic">
                    &ldquo;La véritable innovation naît quand les meilleurs esprits
                    partagent sans réserve leurs découvertes.&rdquo;
                  </blockquote>
                  <div className="mt-3 text-xs text-lime-300">
                    — Principe fondateur DevPulse
                  </div>
                </div>
              </div>
            </div>

            {/* Valeur 2 - Alignée à droite */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8">
                <div className="bg-gradient-to-l from-teal-500/10 to-transparent rounded-2xl p-6 border-r-2 border-teal-400/20">
                  <blockquote className="text-teal-200 italic text-right">
                    &ldquo;L&apos;innovation ouverte transforme les défis individuels
                    en opportunités collectives.&rdquo;
                  </blockquote>
                  <div className="mt-3 text-xs text-teal-300 text-right">
                    — Philosophy Open Innovation
                  </div>
                </div>
              </div>

              {/* Point central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full border-4 border-black/30 z-10"></div>

              <div className="w-1/2 pl-8">
                <div className="bg-gradient-to-r from-teal-500/20 to-transparent rounded-2xl p-8 border-l-2 border-teal-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center border-2 border-teal-400/40">
                      <span className="text-teal-300 text-2xl">🔬</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-teal-100 mb-1">Innovation Ouverte</h3>
                      <p className="text-sm text-teal-300">Valeur #2</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Expérimentation libre, prototypage rapide et échec célébré comme apprentissage.
                    Nos événements sont des labs grandeur nature où l&apos;innovation émergera naturellement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-teal-200">Hackathons expérimentaux</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-teal-200">Prototypage libre & open source</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-teal-200">Échec = Learning opportunity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Valeur 3 - Alignée à gauche */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-gradient-to-l from-orange-500/20 to-transparent rounded-2xl p-8 border-r-2 border-orange-400/30">
                  <div className="flex items-center justify-end gap-3 mb-4">
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-orange-100 mb-1">Impact Durable</h3>
                      <p className="text-sm text-orange-300">Valeur #3</p>
                    </div>
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center border-2 border-orange-400/40">
                      <span className="text-orange-300 text-2xl">🌱</span>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Tech for Good au coeur de nos actions. Chaque événement, chaque projet
                    doit contribuer positivement à l&apos;écosystème genevois et au bien commun.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-orange-200">Green IT & computing responsable</span>
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-orange-200">Projets sociaux prioritaires</span>
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-orange-200">Inclusivité & diversité tech</span>
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-400 rounded-full border-4 border-black/30 z-10"></div>

              <div className="w-1/2 pl-8">
                <div className="bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl p-6 border-l-2 border-orange-400/20">
                  <blockquote className="text-orange-200 italic">
                    &ldquo;Une communauté tech responsable mesure son succès
                    à son impact positif sur la société.&rdquo;
                  </blockquote>
                  <div className="mt-3 text-xs text-orange-300">
                    — Mission Tech for Good
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section manifeste en bas */}
          <div className="mt-20 bg-gradient-to-r from-purple-500/10 via-white/5 to-blue-500/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent">
                Notre Manifeste Geneva Tech
              </h3>
              <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
                Ces valeurs ne sont pas des slogans marketing mais des engagements concrets
                qui guideront chaque décision, chaque événement, chaque interaction au sein de notre communauté.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-full flex items-center justify-center">
                  <span className="text-purple-300 text-3xl">🤝</span>
                </div>
                <h4 className="font-bold text-purple-200 mb-2">Authenticité</h4>
                <p className="text-sm text-white/70">
                  Zéro bullshit, 100% genuine. Nous privilégions les vraies connexions
                  aux networking superficiels.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-white/20 to-gray-300/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h4 className="font-bold text-white mb-2">Action</h4>
                <p className="text-sm text-white/70">
                  Moins de PowerPoint, plus de prototypes. Nous créons, nous testons,
                  nous itérons ensemble.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full flex items-center justify-center">
                  <span className="text-blue-300 text-3xl">🌍</span>
                </div>
                <h4 className="font-bold text-blue-200 mb-2">Accessibilité</h4>
                <p className="text-sm text-white/70">
                  Du étudiant UNIGE au CTO multinational, tout le monde a sa place
                  dans notre communauté.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 text-sm text-white/50">
                <span>🇨🇭 Swiss Quality</span>
                <span>•</span>
                <span>🔓 Open Source Spirit</span>
                <span>•</span>
                <span>🌱 Sustainable Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="mt-auto border-t border-white/10 bg-black/20 backdrop-blur-sm py-10"
        >
          <div className="section-max flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-between text-sm">
            <div className="flex flex-col gap-3 max-w-sm">
              <p className="text-white/60 text-xs">
                © {new Date().getFullYear()} DevPulse Geneva. Tous droits réservés.
              </p>
              <div className="flex gap-4 text-xs text-white/40">
                <a
                  href="https://devpulsegeneva.substack.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white/80"
                >
                  Substack
                </a>
                <a
                  href="mailto:contact@devpulse.ch"
                  className="hover:text-white/80"
                >
                  Email
                </a>
                <a href="#hero" className="hover:text-white/80">
                  Haut de page
                </a>
              </div>
            </div>
            <div className="max-w-md w-full">
              <h3 className="text-sm font-semibold mb-3 text-white/80">
                Rejoindre la waitlist
              </h3>
              {/* Formulaire déjà dans hero, duplication optionnelle ici si voulu */}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
