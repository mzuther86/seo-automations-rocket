
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mueller",
      company: "Digital Marketing Agentur",
      content: "SEO Automations hat unsere Effizienz um 300% gesteigert. Die KI-gesteuerten Tools sind einfach unglaublich!",
      rating: 5
    },
    {
      name: "Thomas Weber",
      company: "E-Commerce Unternehmen",
      content: "Dank der Automatisierung konnten wir unsere organischen Rankings innerhalb von 3 Monaten verdoppeln.",
      rating: 5
    },
    {
      name: "Lisa Schmidt",
      company: "Startup Gründerin",
      content: "Als kleines Unternehmen war SEO immer eine Herausforderung. Diese Tools haben alles verändert!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unsere Kunden lieben uns!
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hier ist, was sie sagen...
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-cyan-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
