import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#1b4332]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C8942A]/20 mb-6">
            <Mail size={22} className="text-[#C8942A]" />
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#F9F6F0] mb-3">
            Get 10% off your first order
          </h2>
          <p className="text-[#F9F6F0]/60 text-base mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and traditional wellness tips.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-[#95d5b2]"
            >
              <CheckCircle size={22} />
              <p className="text-lg font-medium">Thank you! Your 10% discount is on its way.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address for newsletter"
                  className="w-full px-5 py-3 rounded-full bg-[#F9F6F0]/10 border border-[#F9F6F0]/20 text-[#F9F6F0] placeholder-[#F9F6F0]/40 text-sm focus:outline-none focus:border-[#C8942A] transition-colors"
                  data-testid="input-newsletter-email"
                />
                {error && <p className="text-red-400 text-xs mt-1 text-left ml-4">{error}</p>}
              </div>
              <button
                type="submit"
                data-testid="button-newsletter-subscribe"
                className="px-7 py-3 bg-[#C8942A] text-white font-medium rounded-full hover:bg-[#e9c46a] hover:text-[#1b4332] transition-all shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[#F9F6F0]/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
