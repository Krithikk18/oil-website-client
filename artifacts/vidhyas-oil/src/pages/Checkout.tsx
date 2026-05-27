import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Checkout() {
  const { items, totalItems, totalPrice } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0] pt-28 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-3">
          Checkout
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1b4332] mb-8">
          Cart Summary
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="bg-white border border-[#e0d9ce] rounded-2xl p-5">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag size={42} className="mx-auto text-[#1b4332]/25 mb-4" />
                <p className="font-serif text-xl text-[#1b4332] mb-2">Your cart is empty</p>
                <Link href="/shop">
                  <button className="mt-4 px-6 py-2.5 bg-[#1b4332] text-white rounded-full hover:bg-[#2d6a4f] transition-colors">
                    Back to Shop
                  </button>
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-[#e0d9ce]">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-20 h-20 rounded-xl object-cover bg-[#f5f0e8] shrink-0"
                    />
                    <div className="flex-1">
                      <h2 className="font-serif text-lg font-semibold text-[#1b4332]">
                        {item.name}
                      </h2>
                      <p className="text-sm text-[#5c5c5c]">{item.size} x {item.quantity}</p>
                    </div>
                    <p className="font-serif text-lg font-semibold text-[#1b4332]">
                      Rs. {(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="bg-[#1b4332] text-white rounded-2xl p-6 h-fit">
            <h2 className="font-serif text-2xl font-semibold mb-5">Payment coming soon</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/75">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between text-white/75">
                <span>Subtotal</span>
                <span>Rs. {totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="border-t border-white/15 pt-3 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>Rs. {totalPrice.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-6">
              Online payment is being set up. Please contact us on WhatsApp to complete your order.
            </p>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
