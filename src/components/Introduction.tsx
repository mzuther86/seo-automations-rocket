
export const Introduction = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">
            Einführung in SEO Automations
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            SEO Automations ist der führende Anbieter für automatisierte SEO-Lösungen. Wir kombinieren KI-basierte Algorithmen mit bewährten SEO-Strategien, um dir zu helfen, deine Website auf den ersten Seiten der Suchergebnisse zu platzieren. Spare Zeit und Ressourcen mit unseren innovativen Automatisierungstools.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">KI-gesteuerte Automatisierung</h3>
                <p className="text-slate-600">Intelligente Algorithmen optimieren deine SEO-Strategien kontinuierlich und automatisch.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Datenbasierte Ergebnisse</h3>
                <p className="text-slate-600">Verfolge deinen Fortschritt mit detaillierten Analytics und messbaren Ergebnissen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
