import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";

const images = [
  { src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", alt: "Oil bottle" },
  { src: "https://images.unsplash.com/photo-1519162808019-7de1100ce9bf?w=400&q=80", alt: "Coconut" },
  { src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80", alt: "Groundnuts" },
  { src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80", alt: "Seeds" },
  { src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80", alt: "Herbs and leaves" },
  { src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80", alt: "Oil pour" },
];

export default function InstagramGrid() {
  return (
    <section className="py-20 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-2">Social</p>
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-[#1b4332]">
            Follow our journey{" "}
            <a
              href="https://instagram.com/vidhyasoil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8942A] hover:underline"
              data-testid="link-instagram"
            >
              @vidhyasoil
            </a>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              data-testid={`img-instagram-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80";
                }}
              />
              <div className="absolute inset-0 bg-[#1b4332]/0 group-hover:bg-[#1b4332]/60 transition-all duration-300 flex items-center justify-center">
                <SiInstagram
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
