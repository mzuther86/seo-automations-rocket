
import { Search, FileText, Link, BarChart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Automatisierte Keyword-Recherche",
      description: "KI-gesteuerte Keyword-Analyse findet die profitabelsten Suchbegriffe für deine Branche"
    },
    {
      icon: FileText,
      title: "Content-Optimierung",
      description: "Automatische Optimierung deiner Inhalte für bessere Suchmaschinen-Rankings"
    },
    {
      icon: Link,
      title: "Backlink-Generierung",
      description: "Intelligente Identifikation und Aufbau hochwertiger Backlinks für deine Website"
    },
    {
      icon: BarChart,
      title: "Performance-Tracking",
      description: "Umfassendes Monitoring und Reporting deiner SEO-Performance in Echtzeit"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Funktionsübersicht der Automatisierungstools
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Mit unseren Tools hast du alles, was du für eine effektive SEO-Strategie brauchst, automatisiert und auf einem Dashboard zusammengefasst.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
