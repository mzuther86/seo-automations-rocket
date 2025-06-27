
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <Header />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h1 className="text-3xl font-bold mb-8 text-slate-800">Impressum</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Michael Zuther<br />
              Schleißheimer Str. 219<br />
              80809 München
            </p>
            
            <h2>Kontakt</h2>
            <p>
              Telefon: 089-12014173<br />
              E-Mail: mail@seo-automations.de
            </p>
            
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE267811402
            </p>
            
            <h2>Redaktionell verantwortlich</h2>
            <p>
              Michael Zuther
            </p>
            
            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            
            <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            
            <p>
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">https://www.e-recht24.de</a>
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Impressum;
