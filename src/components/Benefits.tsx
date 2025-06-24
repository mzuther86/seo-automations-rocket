
import { Zap, TrendingUp, Gauge } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Schneller arbeiten",
      description: "Reduziere den Zeitaufwand für manuelle SEO-Aufgaben um bis zu 70%. Automatisiere Keyword-Recherche, Content-Optimierung und Linkbuilding, damit du deinen Fokus auf die wesentlichen Strategien richten kannst.",
      stat: "70% Zeitersparnis"
    },
    {
      icon: TrendingUp,
      title: "Skalierbarkeit",
      description: "Skaliere deine Agentur und bearbeite mehr Projekte, ohne zusätzliche Ressourcen hinzuzufügen. Wachse mit deinen Erfolgen, nicht mit deinem Aufwand.",
      stat: "3x mehr Projekte"
    },
    {
      icon: Gauge,
      title: "Erhöhte Effizienz",
      description: "Nutze die fortschrittlichste Technologie für schnelle, präzise und skalierbare SEO-Optimierungen – dein Team wird nie wieder unnötig viel Zeit mit Standardaufgaben verschwenden.",
      stat: "50% höhere Effizienz"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Wie SEO Automations Deine Agentur unterstützt
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transformiere deine Agentur mit intelligenter Automatisierung und fokussiere dich auf strategische Arbeit
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg border border-slate-200 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mb-6 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent text-2xl font-bold">
                    {benefit.stat}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-slate-100 to-cyan-50 rounded-2xl p-8 text-center border border-slate-200">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">Vorher vs. Nachher</h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold mb-3 text-red-700">Ohne Automatisierung</h4>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>• 8 Stunden für Keyword-Recherche</li>
                <li>• 6 Stunden für Content-Audit</li>
                <li>• 10 Stunden für Backlink-Aufbau</li>
                <li>• 4 Stunden für Reporting</li>
              </ul>
              <div className="mt-4 text-red-600 font-bold">= 28 Stunden/Projekt</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold mb-3 text-green-700">Mit SEO Automations</h4>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>• 2 Stunden für Keyword-Recherche</li>
                <li>• 2 Stunden für Content-Audit</li>
                <li>• 3 Stunden für Backlink-Aufbau</li>
                <li>• 1 Stunde für Reporting</li>
              </ul>
              <div className="mt-4 text-green-600 font-bold">= 8 Stunden/Projekt</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
