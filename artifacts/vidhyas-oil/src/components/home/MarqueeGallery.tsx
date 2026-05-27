import { motion } from "framer-motion";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", alt: "Oil bottle" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", alt: "Nature" },
  { src: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80", alt: "Seeds" },
  { src: "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=400&q=80", alt: "Oil pour" },
  { src: "https://images.unsplash.com/photo-1561459158-bb39df89eb4a?w=400&q=80", alt: "Herbs" },
  { src: "https://images.unsplash.com/photo-1471928020535-cf55d0bc3019?w=400&q=80", alt: "Green plants" },
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
              />
              <div className="absolute inset-0 bg-[#1b4332]/10 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
