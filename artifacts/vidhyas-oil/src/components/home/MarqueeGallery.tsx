import { motion } from "framer-motion";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", alt: "Cold pressed oil bottle" },
  { src: "https://images.unsplash.com/photo-1519162808019-7de1100ce9bf?w=400&q=80", alt: "Coconut" },
  { src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80", alt: "Groundnuts" },
  { src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80", alt: "Seeds" },
  { src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80", alt: "Herbs and leaves" },
  { src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80", alt: "Oil pour" },
];

export default function MarqueeGallery() {
  const doubled = [...galleryImages, ...galleryImages];

  return (
    <section className="py-16 bg-[#F9F6F0] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <p className="text-[#5c5c5c] text-xs font-medium tracking-[0.3em] uppercase">From Our Farm</p>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-marquee" aria-hidden="true">
          {doubled.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-56 h-40 rounded-xl overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80";
                }}
              />
              <div className="absolute inset-0 bg-[#1b4332]/10 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
