import { motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    text: "The sesame oil takes me back to my grandmother's kitchen. That earthy, nutty aroma is exactly what I remember as a child. Absolutely worth every rupee.",
    name: "Priya S.",
    city: "Chennai",
    id: "priya",
  },
  {
    stars: 5,
    text: "Best coconut oil I've ever used. Pure, fragrant, and light. We now use it for everything — cooking, hair, and even on the baby's skin.",
    name: "Ravi K.",
    city: "Coimbatore",
    id: "ravi",
  },
  {
    stars: 5,
    text: "My hair has completely transformed after using their castor oil for just one month. Thicker, shinier, and absolutely no hair fall. Incredible product.",
    name: "Deepa M.",
    city: "Madurai",
    id: "deepa",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C8942A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-3">Customer Reviews</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#1b4332]">What Families Are Saying</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              data-testid={`testimonial-${t.id}`}
            >
              <StarRating count={t.stars} />
              <p className="text-[#1a1a1a] text-base leading-relaxed mt-4 mb-6 font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#95d5b2]/40 flex items-center justify-center">
                  <span className="font-serif font-bold text-[#1b4332] text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-[#1a1a1a]">{t.name}</p>
                  <p className="text-xs text-[#5c5c5c]">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
