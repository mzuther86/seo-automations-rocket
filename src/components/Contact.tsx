
import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Bereit, deine Agentur zu transformieren?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Hast du Fragen oder möchtest du mehr erfahren? Unser Team steht bereit, dir zu helfen und deine SEO-Prozesse zu automatisieren!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-4 shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-cyan-600">E-Mail</h4>
                <p className="text-slate-700 font-medium">mail@seo-automations.de</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-4 shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-green-600">Telefon</h4>
                <p className="text-slate-700 font-medium">089-12014173</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-4 shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-purple-600">Adresse</h4>
                <p className="text-slate-700 font-medium">Schleißheimer Strasse 219<br />80809 München</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl p-8 border border-cyan-200 text-center mb-12">
            <h4 className="font-semibold mb-4 text-cyan-700">Warum mit uns sprechen?</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600">
              <div>✓ Kostenlose Analyse deiner aktuellen SEO-Prozesse</div>
              <div>✓ Personalisierte Automatisierungsstrategie</div>
              <div>✓ ROI-Berechnung für deine Agentur</div>
              <div>✓ Keine Verkaufsdrucktaktiken</div>
            </div>
          </div>
          
          {/* Calendly Inline Widget */}
          <div className="max-w-4xl mx-auto mb-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/michael-jnh5/erstgesprach" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-slate-300 text-center text-slate-600">
          <div className="flex justify-center space-x-6 text-sm">
            <a href="/impressum" className="hover:text-cyan-600 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-cyan-600 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </section>
  );
};
