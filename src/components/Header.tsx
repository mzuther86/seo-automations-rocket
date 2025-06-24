
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/3ecb5a70-ecfc-418e-b466-4934434244cd.png" 
                alt="SEO Automations Logo" 
                className="h-16 w-auto"
              />
            </a>
          </div>
          
          {/* CTA Button */}
          <Button 
            asChild
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            <a href="https://calendly.com/michael-jnh5/erstgesprach" target="_blank" rel="noopener noreferrer">
              Demo vereinbaren
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
