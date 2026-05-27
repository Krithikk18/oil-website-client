import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  image: string;
  thumbnails: string[];
  name: string;
}

export default function ProductGallery({ image, thumbnails, name }: ProductGalleryProps) {
  const allImages = [image, ...thumbnails.slice(0, 2)];
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f5f0e8]">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            src={allImages[selected]}
            alt={name}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80";
            }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {allImages.map((src, i) => (
          <button
            key={i}
            data-testid={`button-thumbnail-${i}`}
            onClick={() => setSelected(i)}
            className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
              selected === i ? "border-[#1b4332]" : "border-transparent hover:border-[#95d5b2]"
            }`}
          >
            <img
              src={src}
              alt={`${name} view ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80";
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
