import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "Years" },
  { value: 6, suffix: "", label: "Oils" },
  { value: 10000, suffix: "+", label: "Customers" },
  { value: 100, suffix: "%", label: "Natural" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString("en-IN"));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [count, isInView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-[#1b4332] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="text-center"
          >
            <p className="font-serif text-3xl lg:text-5xl font-bold text-[#e9c46a]">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-[#F9F6F0]/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
