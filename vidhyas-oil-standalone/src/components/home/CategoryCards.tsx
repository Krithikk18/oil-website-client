import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    label: "Cooking Oils",
    tagline: "Nourish your family",
    href: "/shop?category=cooking",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    testId: "card-category-cooking",
  },
  {
    label: "Hair & Body Oils",
    tagline: "Restore your glow",
    href: "/shop?category=hair-body",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    testId: "card-category-hair",
  },
  {
    label: "Medicinal Oils",
    tagline: "Ancient healing",
    href: "/shop?category=medicinal",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    testId: "card-category-medicinal",
  },
];

export default function CategoryCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase text-center mb-3"
        >
          Our Collections
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl lg:text-4xl font-semibold text-[#1b4332] text-center mb-12"
        >
          Shop by Category
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full overflow-hidden">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="w-full overflow-hidden"
            >
              <Link href={cat.href} data-testid={cat.testId}>
                <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl cursor-pointer group">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80";
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/80 via-[#1b4332]/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#95d5b2] text-xs font-medium tracking-[0.2em] uppercase mb-1">{cat.tagline}</p>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-3">{cat.label}</h3>
                    <div className="flex items-center gap-2 text-[#C8942A] text-sm font-medium translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
