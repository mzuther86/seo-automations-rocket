
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "€149",
      period: "/Monat",
      description: "Für kleine Agenturen, die ihre Prozesse automatisieren möchten",
      features: [
        "Bis zu 10 Kundenprojekte",
        "Automatisierte Keyword-Recherche",
        "Basis Content-Optimierung",
        "Standard Backlink-Management",
        "Monatliche Reports",
        "Email Support"
      ],
      popular: false,
      savings: "Spare 20 Stunden/Monat"
    },
    {
      name: "Pro Plan",
      price: "€399",
      period: "/Monat",
      description: "Für mittelgroße Agenturen mit erweiterten Funktionen",
      features: [
        "Bis zu 50 Kundenprojekte",
        "Vollautomatisierte Keyword-Analyse",
        "Erweiterte Content-Optimierung",
        "Premium Backlink-Management",
        "Echtzeit-SEO-Analyse",
        "Wöchentliche Reports",
        "Priority Support",
        "White-Label Dashboards"
      ],
      popular: true,
      savings: "Spare 60 Stunden/Monat"
    },
    {
      name: "Enterprise Plan",
      price: "€899",
      period: "/Monat",
      description: "Für große Agenturen mit der kompletten Automatisierungs-Suite",
      features: [
        "Unbegrenzte Kundenprojekte",
        "Vollständige Automatisierung",
        "KI-gesteuerte Strategieempfehlungen",
        "Custom API-Integrationen",
        "Dedicated Account Manager",
        "Tägliche Reports & Alerts",
        "24/7 Support",
        "Custom White-Label Lösungen",
        "Schulungen & Onboarding"
      ],
      popular: false,
      savings: "Spare 100+ Stunden/Monat"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Flexible Preismodelle für SEO-Agenturen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wähle den Plan, der am besten zu deinen Anforderungen passt und starte sofort mit der Automatisierung
          </p>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full px-6 py-2 inline-block">
            30 Tage Geld-zurück-Garantie
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 border-2 ${plan.popular ? 'border-cyan-500 bg-gradient-to-b from-cyan-50 to-white shadow-2xl scale-105' : 'border-slate-200 bg-white shadow-lg'} hover:shadow-2xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Beliebtester Plan
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-800">{plan.name}</h3>
                <p className="text-slate-600 mb-4 h-12">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block">
                  {plan.savings}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 text-lg font-semibold rounded-xl ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'} transition-all duration-300`}
              >
                Plan auswählen
              </Button>
              
              {plan.popular && (
                <p className="text-center mt-4 text-sm text-slate-600">
                  ⚡ Sofortiger Zugang zu allen Funktionen
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Warum SEO-Agenturen SEO Automations wählen</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">ROI</div>
                <p className="text-slate-600">Durchschnittlich 400% ROI im ersten Jahr durch Zeitersparnis</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-slate-600">Automatisierung arbeitet rund um die Uhr für deine Kunden</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <p className="text-slate-600">Unbegrenztes Skalierungspotential für deine Agentur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
