
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle } from "lucide-react";

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
    toast({
      title: "Nachricht gesendet!",
      description: "Unser Expertenteam wird sich innerhalb von 24 Stunden bei dir melden.",
    });
    setFormData({ name: "", email: "", company: "", message: "", agencySize: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, deine Agentur zu transformieren?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Hast du Fragen oder möchtest du mehr erfahren? Unser Team steht bereit, dir zu helfen und deine SEO-Prozesse zu automatisieren!
            </p>
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 inline-block">
              <div className="text-2xl font-bold">Kostenlose 30-Minuten Beratung</div>
              <div className="text-sm opacity-90">Analyse deiner aktuellen Prozesse + maßgeschneiderte Lösung</div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Sprich direkt mit einem Experten</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-slate-800 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-cyan-400">E-Mail</h4>
                    <p className="text-slate-300">agentur@seo-automations.de</p>
                    <p className="text-sm text-slate-400">Antwort innerhalb von 4 Stunden</p>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-green-400">Telefon</h4>
                    <p className="text-slate-300">+49 (0) 123 456 789</p>
                    <p className="text-sm text-slate-400">Mo-Fr 9:00-18:00 Uhr</p>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-purple-400">Live-Chat</h4>
                    <p className="text-slate-300">Chatte jetzt mit uns für sofortige Hilfe!</p>
                    <p className="text-sm text-slate-400">Online: Mo-Fr 9:00-18:00 Uhr</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="font-semibold mb-3 text-cyan-300">Warum mit uns sprechen?</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✓ Kostenlose Analyse deiner aktuellen SEO-Prozesse</li>
                  <li>✓ Personalisierte Automatisierungsstrategie</li>
                  <li>✓ ROI-Berechnung für deine Agentur</li>
                  <li>✓ Keine Verkaufsdrucktaktiken</li>
                </ul>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Kontaktformular</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Input
                    name="name"
                    placeholder="Dein Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Deine E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Input
                    name="company"
                    placeholder="Deine Agentur"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  />
                  <select
                    name="agencySize"
                    value={formData.agencySize}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-md px-3 py-2"
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
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 min-h-[120px] mb-6"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-6 text-lg font-semibold rounded-xl"
                >
                  Kostenlose Beratung anfragen
                </Button>
                
                <p className="text-center mt-4 text-sm text-slate-400">
                  Wir antworten innerhalb von 4 Stunden • Keine Spam-Mails
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center text-slate-400">
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </section>
  );
};
