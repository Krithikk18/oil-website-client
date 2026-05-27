import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  announcementVisible?: boolean;
}

export default function Navbar({ announcementVisible = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = location === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed ${announcementVisible ? "top-8" : "top-0"} left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent"
            : "bg-[#F9F6F0]/95 backdrop-blur-md shadow-sm border-b border-[#e0d9ce]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" data-testid="link-logo">
              <span
                className={`font-serif text-xl lg:text-2xl font-bold tracking-wide cursor-pointer transition-colors duration-300 ${
                  transparent ? "text-[#1b4332]" : "text-[#1b4332]"
                }`}
              >
                Vidhya's Oil
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                      location === link.href
                        ? "text-[#1b4332] border-b-2 border-[#C8942A] pb-0.5"
                        : transparent
                        ? "text-[#1b4332]/80 hover:text-[#1b4332]"
                        : "text-[#1b4332]/70 hover:text-[#1b4332]"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                data-testid="button-cart"
                onClick={() => setCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-[#1b4332]/10 transition-colors cursor-pointer"
                aria-label="Open cart"
              >
                <ShoppingCart size={22} className="text-[#1b4332]" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-[#C8942A] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {totalItems > 9 ? "9+" : totalItems}
                  </motion.span>
                )}
              </button>

              <button
                data-testid="button-login"
                className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-medium border border-[#1b4332] text-[#1b4332] rounded-full hover:bg-[#1b4332] hover:text-white transition-all duration-200"
              >
                Login
              </button>

              {/* Mobile hamburger */}
              <button
                data-testid="button-mobile-menu"
                onClick={() => setMobileOpen((o) => !o)}
                className="md:hidden p-2 rounded-full hover:bg-[#1b4332]/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} className="text-[#1b4332]" /> : <Menu size={22} className="text-[#1b4332]" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F9F6F0] flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-[#e0d9ce]">
              <span className="font-serif text-xl font-bold text-[#1b4332]">Vidhya's Oil</span>
              <button onClick={() => setMobileOpen(false)} className="p-2" data-testid="button-mobile-close">
                <X size={22} className="text-[#1b4332]" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col items-center justify-center flex-1 gap-8"
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                    <span className="font-serif text-3xl font-semibold text-[#1b4332] tracking-wide cursor-pointer hover:text-[#C8942A] transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}>
                <button className="mt-4 px-8 py-2.5 border border-[#1b4332] text-[#1b4332] font-medium rounded-full hover:bg-[#1b4332] hover:text-white transition-all">
                  Login
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
