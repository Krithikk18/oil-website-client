import { motion } from "framer-motion";
import { Leaf, FlaskConical, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Leaf size={28} className="text-[#1b4332]" />,
    title: "Cold Pressed",
    description: "Extracted without heat to preserve every nutrient, antioxidant, and natural flavour.",
    testId: "feature-cold-pressed",
  },
  {
    icon: <FlaskConical size={28} className="text-[#1b4332]" />,
    title: "Traditional Process",
    description: "Made using Mara Chekku — the ancient wooden churning method passed down for generations.",
    testId: "feature-traditional",
  },
  {
    icon: <ShieldCheck size={28} className="text-[#1b4332]" />,
    title: "Lab Tested",
    description: "Every batch is tested for purity, adulteration, and quality before it reaches you.",
    testId: "feature-lab-tested",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-3">Why Vidhya's</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#1b4332]">
            The Difference is in the Press
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
              data-testid={feature.testId}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#95d5b2]/30 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1b4332] mb-3">{feature.title}</h3>
              <p className="text-[#5c5c5c] leading-relaxed text-sm max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
