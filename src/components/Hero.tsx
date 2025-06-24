
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-100 via-white to-cyan-50 flex items-center justify-center text-slate-800 overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.2),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Optimierung für{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            SEO-Agenturen
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-slate-700">
          Automatisiere Deine Workflows und spare bis zu{" "}
          <span className="text-cyan-600 font-bold">70%</span> deiner Zeit!
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-12 text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Mit den leistungsstarken Automatisierungs-Tools von SEO Automations steigern SEO-Agenturen ihre Effizienz, reduzieren manuelle Arbeit und liefern schneller bessere Ergebnisse für ihre Kunden.
        </p>
        
        {/* CTA Button */}
        <Button 
          asChild
          size="lg" 
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <a href="https://calendly.com/michael-jnh5/erstgesprach" target="_blank" rel="noopener noreferrer">
            Kostenlose Demo vereinbaren
          </a>
        </Button>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};
