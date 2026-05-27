import { motion } from "framer-motion";
import { CheckCircle, Leaf, Recycle } from "lucide-react";

const processSteps = [
  { number: "01", title: "Select Seeds", description: "Carefully hand-picked, native variety seeds sourced from trusted local farmers in Tamil Nadu." },
  { number: "02", title: "Cold Press", description: "Loaded into the Mara Chekku — our ancient wooden press — and churned slowly at room temperature. No heat, ever." },
  { number: "03", title: "Filter", description: "Naturally filtered through traditional cloth to remove seed pulp while retaining all natural nutrients." },
  { number: "04", title: "Bottle", description: "Filled into food-grade glass or HDPE bottles the same day, sealed fresh for your family." },
];

const values = [
  {
    icon: <CheckCircle size={24} className="text-[#1b4332]" />,
    title: "Pure",
    description: "Zero chemicals, zero heat, zero adulteration. What goes in the press is what you get in the bottle.",
  },
  {
    icon: <Leaf size={24} className="text-[#1b4332]" />,
    title: "Traditional",
    description: "Mara Chekku cold pressing is a 2000-year-old method. We refuse to modernize what isn't broken.",
  },
  {
    icon: <Recycle size={24} className="text-[#1b4332]" />,
    title: "Sustainable",
    description: "Local sourcing, minimal packaging, and zero chemical waste. Good for your family and the planet.",
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0]"
    >
      {/* Hero */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
          alt="Our story"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1b4332]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#95d5b2] text-xs font-medium tracking-[0.3em] uppercase mb-3"
          >
            Since 2010
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-serif text-5xl lg:text-7xl font-bold text-white"
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      {/* Founding story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-4">The Beginning</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#1b4332] mb-6">
              Born in a Village Kitchen in Tamil Nadu
            </h2>
            <div className="prose prose-lg text-[#5c5c5c] space-y-4 max-w-none">
              <p>
                Vidhya's Oil was born not from a business plan, but from a memory. Growing up in a small village near Chennai, Vidhya watched her grandmother wake before dawn, carefully placing sesame seeds into the family's wooden Mara Chekku. The scent of slowly pressed oil filled the entire house. That was breakfast — a spoonful of fresh sesame oil on hot rice. Simple, perfect, and alive with flavour.
              </p>
              <p>
                When Vidhya moved to Chennai for work, she found she couldn't recreate that smell. The sesame oil in supermarkets was solvent-extracted, refined, bleached, and deodourised until all that tradition was stripped away. She began making oil at home for her family. Neighbours started asking for bottles. Then their friends. Then their friends' friends.
              </p>
              <p>
                In 2010, Vidhya's Oil was officially born — a small operation with one wooden press, a handful of trusted farmers, and a simple promise: to make oil exactly the way it was made for centuries, and to make it available to every family who deserves better.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#f5f0e8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-3">How We Do It</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#1b4332]">Our Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-6"
                data-testid={`step-process-${i}`}
              >
                <p className="font-serif text-4xl font-bold text-[#95d5b2] mb-3">{step.number}</p>
                <h3 className="font-serif text-lg font-semibold text-[#1b4332] mb-2">{step.title}</h3>
                <p className="text-sm text-[#5c5c5c] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Family */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-[#95d5b2]/20">
                <img
                  src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=800&q=80"
                  alt="Vidhya, founder"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-4">The Founder</p>
              <h2 className="font-serif text-3xl font-semibold text-[#1b4332] mb-4">Meet Vidhya</h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                A software engineer turned oil maker, Vidhya left her corporate job in 2010 with a single conviction: that the oils her grandmother made were better in every measurable way than anything sold in a supermarket.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                Today, she runs Vidhya's Oil with her husband Karthik and a small team of artisans in Chennai, still using the same wooden Mara Chekku press she started with. Every batch is made with the same care as that first batch, 14 years ago.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1b4332] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#F9F6F0]">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-[#F9F6F0]/10 rounded-2xl p-7 text-center border border-[#F9F6F0]/10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#95d5b2]/20 rounded-xl mb-4">
                  {val.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#F9F6F0] mb-2">{val.title}</h3>
                <p className="text-[#F9F6F0]/60 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
