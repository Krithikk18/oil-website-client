import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";

const images = [
  { src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", alt: "Oil bottle" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", alt: "Nature hills" },
  { src: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80", alt: "Seeds" },
  { src: "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=400&q=80", alt: "Oil pour" },
  { src: "https://images.unsplash.com/photo-1561459158-bb39df89eb4a?w=400&q=80", alt: "Herbs" },
  { src: "https://images.unsplash.com/photo-1471928020535-cf55d0bc3019?w=400&q=80", alt: "Green plants" },
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
