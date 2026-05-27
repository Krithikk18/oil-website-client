import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ChevronLeft } from "lucide-react";
import { products } from "@/lib/products";
import ProductDetailComponent from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] pt-28 flex flex-col items-center justify-center gap-4">
        <h1 className="font-serif text-3xl text-[#1b4332]">Product not found</h1>
        <p className="text-[#5c5c5c]">The product you're looking for doesn't exist.</p>
        <Link href="/shop">
          <button className="mt-4 px-6 py-2.5 bg-[#1b4332] text-white rounded-full hover:bg-[#2d6a4f] transition-colors">
            Back to Shop
          </button>
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0]"
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-2">
        <div className="flex items-center gap-2 text-sm text-[#5c5c5c]">
          <Link href="/">
            <span className="hover:text-[#1b4332] cursor-pointer transition-colors">Home</span>
          </Link>
          <span>/</span>
          <Link href="/shop">
            <span className="hover:text-[#1b4332] cursor-pointer transition-colors">Shop</span>
          </Link>
          <span>/</span>
          <span className="text-[#1b4332] font-medium">{product.name}</span>
        </div>
      </div>

      <ProductDetailComponent product={product} />

      <RelatedProducts products={related} />
    </motion.div>
  );
}
