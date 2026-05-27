import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function FeaturedProducts() {
  const { addItem } = useCart();
  const featured = products.filter((p) => p.featured);

  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-2"
            >
              Bestsellers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl lg:text-4xl font-semibold text-[#1b4332]"
            >
              Featured Products
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/shop">
              <button
                data-testid="button-view-all"
                className="flex items-center gap-2 text-sm font-medium text-[#1b4332] hover:text-[#C8942A] transition-colors"
              >
                View All
                <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Products — horizontal scroll on mobile */}
        <div className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow shrink-0 w-64 lg:w-auto group"
              data-testid={`card-product-${product.id}`}
            >
              {/* Image */}
              <Link href={`/products/${product.slug}`}>
                <div className="relative h-52 bg-[#f5f0e8] overflow-hidden cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium tracking-wider uppercase bg-[#1b4332] text-[#F9F6F0] rounded-full px-2.5 py-1">
                      {product.categoryLabel}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="p-4">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-serif text-base font-semibold text-[#1a1a1a] mb-1 cursor-pointer hover:text-[#1b4332] transition-colors leading-tight">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#5c5c5c] mb-3">
                  from ₹{product.sizes[0].price}
                </p>

                {/* Size pills */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.sizes.slice(0, 3).map((size) => (
                    <span
                      key={size.label}
                      className="text-[10px] border border-[#e0d9ce] text-[#5c5c5c] rounded-full px-2 py-0.5"
                    >
                      {size.label} · ₹{size.price}
                    </span>
                  ))}
                </div>

                <button
                  data-testid={`button-add-cart-${product.id}`}
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      size: product.sizes[0].label,
                      price: product.sizes[0].price,
                      quantity: 1,
                      image: product.image,
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1b4332] text-[#F9F6F0] text-sm font-medium rounded-lg hover:bg-[#2d6a4f] transition-colors"
                >
                  <ShoppingCart size={14} />
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
