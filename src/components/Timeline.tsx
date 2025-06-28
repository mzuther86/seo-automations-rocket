
import { MessageCircle, Zap, Settings, Play } from "lucide-react";
import { useEffect, useState } from "react";

export const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('timeline-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on element visibility
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: "Kennenlern-Gespräch & Analyse der IST-Situation",
      description: "Wir lernen uns kennen, besprechen deine aktuellen SEO-Prozesse und analysieren gemeinsam die bestehende Arbeitsweise, Tools und Herausforderungen."
    },
    {
      icon: Zap,
      title: "Ableitung von konkreten Automatisierungspotentialen",
      description: "Auf Basis der Analyse identifizieren wir konkrete Bereiche mit hohem Automatisierungspotenzial und entwickeln eine individuell angepasste Strategie."
    },
    {
      icon: Settings,
      title: "Implementierung individuell angepasster Prozesse & Testing",
      description: "Wir setzen die definierten Automatisierungen technisch um, integrieren sie in deine Prozesse und testen sie gründlich auf Funktion und Effizienz."
    },
    {
      icon: Play,
      title: "Live-Schaltung",
      description: "Nach erfolgreichem Testing gehen die automatisierten Prozesse live und stehen deinem Team im Tagesgeschäft sofort zur Verfügung."
    }
  ];

  return (
    <section id="timeline-section" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Unser 4-Punkte-Ablauf für die Zusammenarbeit
            </h2>
            <p className="text-xl text-slate-600">
              Von der ersten Analyse bis zur erfolgreichen Implementierung - so läuft unsere Zusammenarbeit ab
            </p>
          </div>
          
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-slate-200 rounded-full">
              <div 
                className="w-full bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full transition-all duration-300 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              ></div>
            </div>
            
            {/* Timeline Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Icon Circle - Fixed positioning for mobile */}
                  <div className="relative z-10 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg mr-4 md:mr-8 flex-shrink-0">
                    <step.icon className="w-4 h-4 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border border-slate-200 flex-1 relative min-w-0">
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full">
                        Schritt {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-slate-800 leading-tight">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
