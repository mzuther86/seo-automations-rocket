
import { Clock, TrendingUp, Target } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Zeit sparen",
      description: "Automatisiere deine SEO-Aufgaben und konzentriere dich auf die Wachstumsstrategien deines Unternehmens."
    },
    {
      icon: TrendingUp,
      title: "Skalierbarkeit",
      description: "Egal, ob du ein kleines Unternehmen oder ein großes Unternehmen bist – wir bieten Lösungen, die mit dir wachsen."
    },
    {
      icon: Target,
      title: "Messbare Ergebnisse",
      description: "Durch kontinuierliche Datenanalyse und intelligente Automatisierung liefern wir dir präzise, skalierbare Ergebnisse."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Vorteile von SEO Automations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entdecke, wie unsere automatisierten SEO-Lösungen dein Business transformieren können
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-cyan-500/25 transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
