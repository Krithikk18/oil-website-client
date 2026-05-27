import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#F9F6F0] mb-3">Vidhya's Oil</h2>
            <p className="text-[#F9F6F0]/60 text-sm leading-relaxed mb-4">
              Pure. Cold-Pressed. Traditional. Premium oils crafted the way your grandmother made them.
            </p>
            <div className="flex items-start gap-2 text-sm text-[#F9F6F0]/60">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#C8942A]" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#F9F6F0] mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm text-[#F9F6F0]/60">
              <li>
                <Link href="/shop" data-testid="link-footer-all">
                  <span className="hover:text-[#C8942A] cursor-pointer transition-colors">All Products</span>
                </Link>
              </li>
              <li>
                <Link href="/shop?category=cooking" data-testid="link-footer-cooking">
                  <span className="hover:text-[#C8942A] cursor-pointer transition-colors">Cooking Oils</span>
                </Link>
              </li>
              <li>
                <Link href="/shop?category=hair-body" data-testid="link-footer-hair">
                  <span className="hover:text-[#C8942A] cursor-pointer transition-colors">Hair &amp; Body</span>
                </Link>
              </li>
              <li>
                <Link href="/shop?category=medicinal" data-testid="link-footer-medicinal">
                  <span className="hover:text-[#C8942A] cursor-pointer transition-colors">Medicinal Oils</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#F9F6F0] mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm text-[#F9F6F0]/60">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="hover:text-[#C8942A] cursor-pointer transition-colors">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-process">
                  <span className="hover:text-[#C8942A] cursor-pointer transition-colors">Our Process</span>
                </Link>
              </li>
              <li>
                <span className="text-[#F9F6F0]/40 cursor-default">Blog (Coming Soon)</span>
              </li>
              <li>
                <span className="text-[#F9F6F0]/40 cursor-default">Careers</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#F9F6F0] mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-[#F9F6F0]/60">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#C8942A] shrink-0" />
                <a href="mailto:hello@vidhyasoil.com" className="hover:text-[#C8942A] transition-colors" data-testid="link-footer-email">
                  hello@vidhyasoil.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#C8942A] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#C8942A] transition-colors" data-testid="link-footer-phone">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiWhatsapp size={15} className="text-[#C8942A] shrink-0" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8942A] transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#F9F6F0]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F9F6F0]/40">
          <p>© 2026 Vidhya's Oil. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/return-policy">
              <span className="hover:text-[#C8942A] cursor-pointer transition-colors">Return Policy</span>
            </Link>
            <span>·</span>
            <Link href="/terms-of-use">
              <span className="hover:text-[#C8942A] cursor-pointer transition-colors">Terms of Use</span>
            </Link>
            <span>·</span>
            <Link href="/privacy-policy">
              <span className="hover:text-[#C8942A] cursor-pointer transition-colors">Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
