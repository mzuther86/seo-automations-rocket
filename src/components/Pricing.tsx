
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "€99",
      period: "/Monat",
      features: [
        "Bis zu 5 Websites",
        "Keyword-Tracking",
        "Basis Content-Optimierung",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "€299",
      period: "/Monat",
      features: [
        "Bis zu 25 Websites",
        "Erweiterte Keyword-Recherche",
        "Automatisierte Content-Optimierung",
        "Backlink-Monitoring",
        "Priority Support",
        "Performance Analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "€699",
      period: "/Monat",
      features: [
        "Unbegrenzte Websites",
        "Vollständige Automatisierung",
        "White-Label Lösungen",
        "Dedicated Account Manager",
        "Custom Integrationen",
        "24/7 Support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Flexible Pläne für jedes Budget
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Starte heute und wachse mit uns!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 border-2 ${plan.popular ? 'border-cyan-500 bg-gradient-to-b from-cyan-50 to-white' : 'border-slate-200 bg-white'} hover:shadow-2xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Best Value
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 text-lg font-semibold rounded-xl ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'} transition-all duration-300`}
              >
                Plan auswählen
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
