
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir werden uns in Kürze bei dir melden.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, mit uns zu starten?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Kontaktiere uns, und unser Team wird dir helfen, deine SEO zu automatisieren.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontakt aufnehmen</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-400">E-Mail</h4>
                  <p className="text-slate-300">info@seo-automations.de</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-400">Telefon</h4>
                  <p className="text-slate-300">+49 (0) 123 456 789</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-400">Live-Chat</h4>
                  <p className="text-slate-300">Chatte jetzt mit uns für sofortige Hilfe!</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Dein Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Deine E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <Input
                  name="company"
                  placeholder="Dein Unternehmen"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Deine Nachricht"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 min-h-[120px]"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-6 text-lg font-semibold rounded-xl"
              >
                Kontakt aufnehmen
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
