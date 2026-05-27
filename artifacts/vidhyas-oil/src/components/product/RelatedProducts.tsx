import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const { addItem } = useCart();

  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl lg:text-3xl font-semibold text-[#1b4332] mb-8"
        >
          You may also like
        </motion.h2>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:mx-0 lg:px-0">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm shrink-0 w-56 lg:w-auto group"
              data-testid={`card-related-${product.id}`}
            >
              <Link href={`/products/${product.slug}`}>
                <div className="h-44 bg-[#f5f0e8] overflow-hidden cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-serif text-sm font-semibold text-[#1a1a1a] mb-1 cursor-pointer hover:text-[#1b4332] transition-colors leading-snug">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#5c5c5c] mb-3">from ₹{product.sizes[0].price}</p>
                <button
                  data-testid={`button-related-add-${product.id}`}
                  onClick={() => addItem({
                    id: product.id,
                    name: product.name,
                    size: product.sizes[0].label,
                    price: product.sizes[0].price,
                    quantity: 1,
                    image: product.image,
                  })}
                  className="w-full flex items-center justify-center gap-1.5 py-2 bg-[#1b4332] text-[#F9F6F0] text-xs font-medium rounded-lg hover:bg-[#2d6a4f] transition-colors"
                >
                  <ShoppingCart size={12} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
