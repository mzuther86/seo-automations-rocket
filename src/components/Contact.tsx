
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    agencySize: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Calendly instead of showing toast
    window.open('https://calendly.com/michael-jnh5/erstgesprach', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 inline-block text-white">
              <div className="text-2xl font-bold">Kostenlose 30-Minuten Beratung</div>
              <div className="text-sm opacity-90">Analyse deiner aktuellen Prozesse + maßgeschneiderte Lösung</div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-800">Sprich direkt mit einem Experten</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-lg border border-slate-200">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-cyan-600">E-Mail</h4>
                    <p className="text-slate-700">agentur@seo-automations.de</p>
                    <p className="text-sm text-slate-500">Antwort innerhalb von 4 Stunden</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-lg border border-slate-200">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-green-600">Telefon</h4>
                    <p className="text-slate-700">089-12014173</p>
                    <p className="text-sm text-slate-500">Mo-Fr 9:00-18:00 Uhr</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                  <h4 className="font-semibold mb-2 text-slate-800">Adresse</h4>
                  <p className="text-slate-700">Schleißheimer Strasse 219</p>
                  <p className="text-slate-700">80809 München</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl p-6 border border-cyan-200">
                <h4 className="font-semibold mb-3 text-cyan-700">Warum mit uns sprechen?</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Kostenlose Analyse deiner aktuellen SEO-Prozesse</li>
                  <li>✓ Personalisierte Automatisierungsstrategie</li>
                  <li>✓ ROI-Berechnung für deine Agentur</li>
                  <li>✓ Keine Verkaufsdrucktaktiken</li>
                </ul>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold mb-6 text-center text-slate-800">Kontaktformular</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Input
                    name="name"
                    placeholder="Dein Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-500"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Deine E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Input
                    name="company"
                    placeholder="Deine Agentur"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-500"
                  />
                  <select
                    name="agencySize"
                    value={formData.agencySize}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-500 rounded-md px-3 py-2"
                  >
                    <option value="">Agentur-Größe</option>
                    <option value="1-5">1-5 Mitarbeiter</option>
                    <option value="6-15">6-15 Mitarbeiter</option>
                    <option value="16-50">16-50 Mitarbeiter</option>
                    <option value="50+">50+ Mitarbeiter</option>
                  </select>
                </div>
                
                <Textarea
                  name="message"
                  placeholder="Beschreibe deine aktuellen SEO-Herausforderungen..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-500 min-h-[120px] mb-6"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-6 text-lg font-semibold rounded-xl"
                >
                  Kostenlose Beratung anfragen
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-300 text-center text-slate-600">
          <div className="flex justify-center space-x-6 text-sm">
            <a href="/impressum" className="hover:text-cyan-600 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-cyan-600 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </section>
  );
};
