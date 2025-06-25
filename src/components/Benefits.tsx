
import { CheckCircle, Clock, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Bis zu 70% Zeitersparnis",
      description: "Automatisiere wiederkehrende SEO-Aufgaben und konzentriere dich auf strategische Beratung."
    },
    {
      icon: TrendingUp,
      title: "Bessere Ergebnisse",
      description: "Konsistente und fehlerfreie Prozesse führen zu nachweislich besseren SEO-Resultaten."
    },
    {
      icon: Users,
      title: "Skalierbare Kapazitäten",
      description: "Betreue mehr Kunden ohne proportional mehr Personal einzustellen."
    },
    {
      icon: CheckCircle,
      title: "Höhere Profitabilität",
      description: "Reduzierte Kosten und gesteigerte Effizienz führen zu deutlich höheren Margen."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Das Ergebnis für deine Agentur
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unsere Automatisierungslösungen transformieren SEO-Agenturen und schaffen echten Mehrwert
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://calendly.com/michael-jnh5/erstgesprach" target="_blank" rel="noopener noreferrer">
                Kostenlose Demo vereinbaren
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
