
import { Clock, Users, Target } from "lucide-react";

export const Introduction = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">
            Das Problem kennen wir alle
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            SEO-Agenturen verbringen viel zu viel Zeit mit wiederkehrenden Aufgaben – Keyword-Recherche, Content-Optimierung, Backlink-Aufbau und Performance-Tracking. SEO Automations hilft dir, diese Prozesse zu automatisieren, damit du wertvolle Zeit sparst und dich auf die strategische Arbeit konzentrieren kannst.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="w-16 h-16 bg-red-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Zeitaufwendige Recherche</h3>
              <p className="text-slate-600">Stunden für manuelle Keyword-Analyse und Wettbewerbsforschung</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Begrenzte Skalierung</h3>
              <p className="text-slate-600">Neue Kunden bedeuten mehr Arbeitslast ohne proportional höhere Effizienz</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="w-16 h-16 bg-orange-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Manuelle Prozesse</h3>
              <p className="text-slate-600">Repetitive Aufgaben binden Ressourcen, die strategisch besser eingesetzt wären</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Die Lösung: Automatisierung</h3>
            <p className="text-lg opacity-90">
              SEO Automations wandelt zeitaufwendige manuelle Prozesse in effiziente, automatisierte Workflows um – damit dein Team sich auf das konzentrieren kann, was wirklich zählt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
