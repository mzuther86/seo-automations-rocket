
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Handle GitHub Pages redirect
    const l = window.location;
    
    // Check if we have a redirect parameter
    if (l.search) {
      const query = new URLSearchParams(l.search);
      const p = query.get('p');
      
      if (p) {
        // Restore the original path
        const newPath = p.replace(/~and~/g, '&');
        const q = query.get('q');
        const newSearch = q ? '?' + q.replace(/~and~/g, '&') : '';
        
        // Replace the current history entry
        window.history.replaceState(null, '', newPath + newSearch + l.hash);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
