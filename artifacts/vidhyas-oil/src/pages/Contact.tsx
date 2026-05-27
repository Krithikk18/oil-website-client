import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required";
    if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#1a1a1a] placeholder-[#5c5c5c]/50 focus:outline-none focus:border-[#1b4332] transition-colors ${
      errors[field] ? "border-red-400" : "border-[#e0d9ce]"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0]"
    >
      {/* Header */}
      <div className="bg-[#f5f0e8] pt-28 pb-16 px-4 text-center">
        <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-3">Get in Touch</p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1b4332]">Contact Us</h1>
        <p className="text-[#5c5c5c] text-base mt-3 max-w-md mx-auto">
          We'd love to hear from you — questions, wholesale enquiries, or just a hello.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl font-semibold text-[#1b4332] mb-7">Find Us</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#95d5b2]/30 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#1b4332]" />
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">Address</p>
                  <p className="text-[#5c5c5c] text-sm mt-0.5">
                    42, Velachery Main Road,<br />
                    Velachery, Chennai — 600 042<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#95d5b2]/30 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#1b4332]" />
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">Email</p>
                  <a href="mailto:hello@vidhyasoil.com" className="text-[#1b4332] text-sm hover:text-[#C8942A] transition-colors" data-testid="link-contact-email">
                    hello@vidhyasoil.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#95d5b2]/30 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#1b4332]" />
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">Phone</p>
                  <a href="tel:+919876543210" className="text-[#1b4332] text-sm hover:text-[#C8942A] transition-colors" data-testid="link-contact-phone">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#95d5b2]/30 rounded-xl flex items-center justify-center shrink-0">
                  <SiWhatsapp size={18} className="text-[#1b4332]" />
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1b4332] text-sm hover:text-[#C8942A] transition-colors"
                    data-testid="link-contact-whatsapp"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#95d5b2]/30 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#1b4332]" />
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">Business Hours</p>
                  <p className="text-[#5c5c5c] text-sm mt-0.5">
                    Mon–Sat: 9:00 AM – 6:00 PM IST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-48 rounded-2xl bg-[#1b4332]/10 border border-[#e0d9ce] flex flex-col items-center justify-center text-center gap-2">
              <MapPin size={28} className="text-[#1b4332]/40" />
              <p className="font-serif text-base text-[#1b4332]/50">Find us in Chennai, Tamil Nadu</p>
              <p className="text-xs text-[#5c5c5c]">Velachery, Chennai — 600 042</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-serif text-2xl font-semibold text-[#1b4332] mb-7">Send a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#95d5b2]/30 flex items-center justify-center">
                  <Mail size={28} className="text-[#1b4332]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1b4332]">Thank you!</h3>
                <p className="text-[#5c5c5c] max-w-xs">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name"
                    className={inputClass("name")}
                    data-testid="input-contact-name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={inputClass("email")}
                    data-testid="input-contact-email"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                    className={inputClass("phone")}
                    data-testid="input-contact-phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="How can we help you?"
                    rows={5}
                    className={inputClass("message") + " resize-none"}
                    data-testid="input-contact-message"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  data-testid="button-contact-submit"
                  className="w-full py-3.5 bg-[#1b4332] text-white font-medium rounded-xl hover:bg-[#2d6a4f] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
