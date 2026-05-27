import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import CategoryCards from "@/components/home/CategoryCards";
import BrandStory from "@/components/home/BrandStory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import MarqueeGallery from "@/components/home/MarqueeGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsCounter from "@/components/home/StatsCounter";
import Testimonials from "@/components/home/Testimonials";
import InstagramGrid from "@/components/home/InstagramGrid";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <CategoryCards />
      <BrandStory />
      <FeaturedProducts />
      <MarqueeGallery />
      <WhyChooseUs />
      <StatsCounter />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
    </motion.div>
  );
}
