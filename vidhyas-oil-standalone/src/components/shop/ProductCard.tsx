import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      size: product.sizes[0].label,
      price: product.sizes[0].price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
      data-testid={`card-product-${product.id}`}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-56 sm:h-64 bg-[#f5f0e8] overflow-hidden cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-medium tracking-wider uppercase bg-[#1b4332] text-[#F9F6F0] rounded-full px-2.5 py-1">
              {product.categoryLabel}
            </span>
          </div>
          {product.featured && (
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-medium tracking-wider uppercase bg-[#C8942A] text-white rounded-full px-2.5 py-1">
                Bestseller
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-base font-semibold text-[#1a1a1a] mb-1 cursor-pointer hover:text-[#1b4332] transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-[#5c5c5c] mb-3 line-clamp-2">{product.shortDescription}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.sizes.map((size) => (
            <span
              key={size.label}
              className="text-[10px] border border-[#e0d9ce] text-[#5c5c5c] rounded-full px-2 py-0.5"
            >
              {size.label} · ₹{size.price}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[#5c5c5c]">from</p>
            <p className="font-serif text-lg font-bold text-[#1b4332]">₹{product.sizes[0].price}</p>
          </div>
          <button
            data-testid={`button-add-cart-${product.id}`}
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2 bg-[#1b4332] text-[#F9F6F0] text-sm font-medium rounded-full hover:bg-[#2d6a4f] transition-colors"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
