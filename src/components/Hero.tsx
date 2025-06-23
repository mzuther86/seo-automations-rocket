
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 flex items-center justify-center text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/85b43d6c-f63f-460b-a037-47f2680cbcd4.png" 
            alt="SEO Automations Logo" 
            className="h-24 w-auto"
          />
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Automatisiere Dein SEO mit{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            KI
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Steigere Deine Sichtbarkeit und Effizienz mit SEO Automations
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-3xl mx-auto">
          Nutze die Kraft der künstlichen Intelligenz und Automatisierung, um deine SEO-Strategien schneller und smarter umzusetzen. Wir bieten maßgeschneiderte Lösungen für dein Business.
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
        >
          Kostenlose Demo anfordern
        </Button>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};
