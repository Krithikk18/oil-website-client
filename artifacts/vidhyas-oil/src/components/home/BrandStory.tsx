import { motion } from "framer-motion";
import { Link } from "wouter";

export default function BrandStory() {
  return (
    <section className="relative bg-[#1b4332] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-[#95d5b2] text-xs font-medium tracking-[0.3em] uppercase mb-6"
            >
              About the Brand
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9F6F0] leading-tight mb-6"
            >
              VIDHYA'S OIL IS A{" "}
              <span className="italic text-[#e9c46a]">TRADITIONAL</span>{" "}
              ATELIER
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[#F9F6F0]/70 text-lg leading-relaxed mb-4"
            >
              crafting oils the way your ancestors did, for families who care about what goes in their food.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[#F9F6F0]/50 text-base leading-relaxed mb-10"
            >
              Every drop of Vidhya's Oil comes from a Mara Chekku — the ancient wooden press — where seeds are slowly churned at room temperature. No heat. No solvents. Just the original way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-6"
            >
              <Link href="/about">
                <button
                  data-testid="button-brand-story"
                  className="px-8 py-3 bg-[#C8942A] text-white font-medium rounded-full hover:bg-[#e9c46a] hover:text-[#1b4332] transition-all duration-200"
                >
                  Read Our Story
                </button>
              </Link>
              <div className="text-right">
                <p className="text-[#e9c46a] font-serif text-2xl font-bold">100%</p>
                <p className="text-[#F9F6F0]/50 text-xs tracking-wider uppercase">Pure &amp; Natural</p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80"
                alt="Traditional cold-pressed oil making"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1b4332]/20" />
            </div>

            {/* Est. badge */}
            <div className="absolute -top-6 -right-6 bg-[#C8942A] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-[10px] font-bold tracking-wider">EST.</span>
              <span className="text-xl font-serif font-bold">2010</span>
              <span className="text-[9px] tracking-wider">CHENNAI</span>
            </div>

            {/* Stat pill */}
            <div className="absolute -bottom-4 left-6 bg-[#F9F6F0] rounded-2xl px-5 py-3 shadow-xl flex items-center gap-4">
              <div>
                <p className="font-serif text-2xl font-bold text-[#1b4332]">50+</p>
                <p className="text-xs text-[#5c5c5c] tracking-wide">Families Trust Us</p>
              </div>
              <div className="w-px h-8 bg-[#e0d9ce]" />
              <div>
                <p className="font-serif text-2xl font-bold text-[#1b4332]">6</p>
                <p className="text-xs text-[#5c5c5c] tracking-wide">Oils</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p className="font-serif text-[15vw] font-bold text-[#F9F6F0]/[0.03] whitespace-nowrap leading-none select-none">
          PURE TRADITIONAL
        </p>
      </div>
    </section>
  );
}
