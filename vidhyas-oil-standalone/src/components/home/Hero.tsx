import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const wordReveal: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

export default function Hero() {
  const marqueeText = "COLD PRESSED · TRADITIONAL · PURE · NATURAL · HANDCRAFTED · CHENNAI · ";

  return (
    <section className="relative min-h-screen bg-[#F9F6F0] overflow-hidden">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-6"
            >
              Tamil Nadu, India
            </motion.p>

            {/* Main headline */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="overflow-hidden"
            >
              <div className="overflow-hidden">
                <motion.h1
                  variants={wordReveal}
                  className="font-serif text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] font-bold text-[#1b4332] leading-none tracking-tight"
                >
                  VIDHYA'S
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={wordReveal}
                  className="font-serif text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] font-bold text-[#1b4332] leading-none tracking-tight -mt-2"
                >
                  OIL
                </motion.h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-[#C8942A] text-sm sm:text-base font-medium tracking-[0.2em] uppercase mt-4 mb-8"
            >
              Pure. Cold-Pressed. Traditional.
            </motion.p>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="text-[#5c5c5c] text-base max-w-sm mb-10 leading-relaxed"
            >
              Premium oils crafted the way your grandmother made them. No heat. No chemicals. Just pure tradition.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/shop" data-testid="link-hero-shop">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1b4332] text-[#F9F6F0] font-medium rounded-full hover:bg-[#2d6a4f] transition-colors"
                  data-testid="button-hero-shop"
                >
                  Shop Now
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
              <Link href="/about" data-testid="link-hero-story">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#1b4332] text-[#1b4332] font-medium rounded-full hover:bg-[#1b4332]/5 transition-colors"
                  data-testid="button-hero-story"
                >
                  Our Story
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 sm:w-96 sm:h-[440px] lg:w-[440px] lg:h-[520px]">
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] bg-[#95d5b2]/20" />
              <img
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80"
                alt="Premium cold-pressed oil"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-[35%_65%_55%_45%/40%_40%_60%_60%] shadow-2xl"
              />
              {/* Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.3, type: "spring" }}
                className="absolute -bottom-3 -left-3 bg-[#C8942A] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg"
              >
                <span className="text-[10px] font-bold tracking-wider leading-tight">EST.</span>
                <span className="text-lg font-serif font-bold leading-tight">2010</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-20 bg-[#1b4332] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[#F9F6F0]/80 text-xs font-medium tracking-[0.25em] uppercase mx-6">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
