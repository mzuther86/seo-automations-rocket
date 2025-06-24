export const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Vorher vs. Nachher: Die Transformation deiner SEO-Agentur
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Sieh, wie SEO Automations das Tagesgeschäft von Agenturen revolutioniert
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-center mb-6">
              <span className="bg-red-100 text-red-800 text-sm font-semibold px-4 py-2 rounded-full">
                VORHER: Manuelle Prozesse
              </span>
            </div>
            <div className="space-y-4">
              {[
                "8 Stunden pro Woche für Keyword-Recherche",
                "5 Stunden täglich für Content-Optimierung",
                "6 Stunden pro Projekt für Backlink-Aufbau",
                "Fehleranfällige manuelle Analysen",
                "Verzögerte Kundenberichte",
                "Hohe Personalkosten durch Routineaufgaben"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✕</span>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-center mb-6">
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                NACHHER: Mit SEO Automations
              </span>
            </div>
            <div className="space-y-4">
              {[
                "Automatisierte Keyword-Recherche in 15 Minuten",
                "KI-gestützte Content-Optimierung in Echtzeit",
                "Intelligenter Backlink-Aufbau ohne manuellen Aufwand",
                "Präzise, datenbasierte Analysen auf Knopfdruck",
                "Live-Dashboards für sofortige Kundenberichte",
                "70% Zeitersparnis bei gleichbleibender Qualität"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Das Ergebnis für deine Agentur</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">70%</div>
              <div className="text-sm opacity-90">Weniger Zeitaufwand</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-sm opacity-90">Mehr Kunden pro Monat</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150%</div>
              <div className="text-sm opacity-90">Umsatzsteigerung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
