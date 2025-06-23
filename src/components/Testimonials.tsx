
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Max Mustermann",
      company: "SEO-Agentur XYZ",
      content: "Wir haben die Effizienz unserer Agentur um 50% steigern können. SEO Automations hat uns von der zeitaufwendigen Recherche befreit!",
      rating: 5,
      improvement: "50% mehr Effizienz"
    },
    {
      name: "Jane Doe",
      company: "SEO-Agentur ABC",
      content: "Dank der Automatisierung können wir nun mehr Kundenprojekte bearbeiten, ohne zusätzliche Mitarbeiter einstellen zu müssen.",
      rating: 5,
      improvement: "3x mehr Projekte"
    },
    {
      name: "Dr. Sarah Mueller",
      company: "Digital Marketing Profis",
      content: "Die Tools haben unsere Arbeitsweise revolutioniert. Was früher Tage gedauert hat, schaffen wir jetzt in wenigen Stunden.",
      rating: 5,
      improvement: "70% Zeitersparnis"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <div className="mb-4">
                <span className="bg-green-500/20 text-green-400 text-sm font-semibold px-3 py-1 rounded-full">
                  {testimonial.improvement}
                </span>
              </div>
              
              <p className="text-slate-300 mb-6 italic text-lg">"{testimonial.content}"</p>
              
              <div>
                <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                <p className="text-cyan-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Durchschnittliche Ergebnisse unserer Kunden</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-cyan-400">70%</div>
                <div className="text-sm text-slate-300">Zeitersparnis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">3x</div>
                <div className="text-sm text-slate-300">Mehr Projekte</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-sm text-slate-300">Zufriedenheit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
