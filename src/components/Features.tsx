
import { Search, FileText, Link, BarChart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Automatisierte Keyword-Recherche",
      description: "Unsere KI-gestützte Technologie analysiert Suchtrends und hilft dabei, relevante Keywords schnell und einfach zu identifizieren.",
      timeSaving: "30% Zeitersparnis"
    },
    {
      icon: FileText,
      title: "Automatisierte Content-Optimierung",
      description: "Optimiere Inhalte basierend auf Echtzeit-Daten und behalte die besten Praktiken für SEO im Blick.",
      timeSaving: "45% Zeitersparnis"
    },
    {
      icon: Link,
      title: "Backlink-Management",
      description: "Automatisiere den gesamten Backlink-Prozess – von der Recherche bis zur Erstellung von Backlink-Profilen.",
      timeSaving: "40% Zeitersparnis"
    },
    {
      icon: BarChart,
      title: "Echtzeit-SEO-Analyse",
      description: "Verfolge den Erfolg deiner Kampagnen mit Live-Daten und verbessere kontinuierlich deine Strategien.",
      timeSaving: "50% Zeitersparnis"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Hauptfunktionen von SEO Automations für Agenturen
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Alle Tools, die du für eine effektive SEO-Strategie brauchst, vollautomatisiert und intelligent vernetzt
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {feature.timeSaving}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Automatisierter Workflow-Prozess</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="w-8 h-8 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-cyan-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Keyword-Analyse</h4>
              <p className="text-sm opacity-90">KI analysiert Suchtrends</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="w-8 h-8 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-cyan-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Content-Optimierung</h4>
              <p className="text-sm opacity-90">Automatische Anpassungen</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="w-8 h-8 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-cyan-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Backlink-Aufbau</h4>
              <p className="text-sm opacity-90">Intelligente Verlinkung</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="w-8 h-8 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-cyan-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Live-Analyse</h4>
              <p className="text-sm opacity-90">Kontinuierliche Optimierung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
