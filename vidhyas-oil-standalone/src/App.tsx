import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetailPage from "@/pages/ProductDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Checkout from "@/pages/Checkout";
import ReturnPolicy from "@/pages/ReturnPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1b4332] focus:text-white focus:rounded-full focus:text-sm"
      >
        Skip to content
      </a>
      <ScrollToTop />
      {showAnnouncement && (
        <div className="fixed top-0 left-0 right-0 z-[55] flex items-center justify-center gap-3 bg-[#0f2f24] px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
          <span>🚚 Free delivery on orders above ₹999 · Pan India Shipping Available</span>
          <button
            type="button"
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/10 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X size={14} />
          </button>
        </div>
      )}
      <Navbar announcementVisible={showAnnouncement} />
      <CartDrawer />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/products/:slug" component={ProductDetailPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/return-policy" component={ReturnPolicy} />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <a
            href="https://wa.me/917708012418?text=Hi%2C%20I%27m%20interested%20in%20ordering%20Vidhya%27s%20Oil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:ring-offset-2"
          >
            <SiWhatsapp size={26} />
          </a>
          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
