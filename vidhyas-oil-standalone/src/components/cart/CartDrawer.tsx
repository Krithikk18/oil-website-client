import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItemCard from "./CartItem";
import { Link, useLocation } from "wouter";

export default function CartDrawer() {
  const { items, isCartOpen, setCartOpen, totalItems, totalPrice, clearCart } = useCart();
  const [, navigate] = useLocation();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#F9F6F0] z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e0d9ce]">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#1b4332]" />
                <h2 className="font-serif text-xl font-semibold text-[#1b4332]">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="bg-[#C8942A] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                data-testid="button-cart-close"
                onClick={() => setCartOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#1b4332]/10 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} className="text-[#1b4332]" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-[#1b4332]/20" />
                  <p className="font-serif text-xl text-[#1b4332]/40">Your cart is empty</p>
                  <p className="text-sm text-[#5c5c5c]">Add some oils to get started</p>
                  <Link href="/shop">
                    <button
                      data-testid="button-shop-now"
                      onClick={() => setCartOpen(false)}
                      className="mt-2 px-6 py-2 bg-[#1b4332] text-white text-sm font-medium rounded-full hover:bg-[#2d6a4f] transition-colors"
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItemCard key={`${item.id}-${item.size}`} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#e0d9ce] bg-white/50">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-[#5c5c5c]">Subtotal ({totalItems} items)</span>
                  <span className="font-serif text-lg font-semibold text-[#1b4332]">₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-xs text-[#5c5c5c] mb-4">Shipping calculated at checkout</p>
                <button
                  data-testid="button-checkout"
                  className="w-full py-3.5 bg-[#1b4332] text-white font-medium rounded-lg hover:bg-[#2d6a4f] transition-colors mb-2"
                  onClick={() => {
                    setCartOpen(false);
                    navigate("/checkout");
                  }}
                >
                  Proceed to Checkout
                </button>
                <button
                  data-testid="button-continue-shopping"
                  onClick={() => setCartOpen(false)}
                  className="w-full py-2.5 border border-[#1b4332] text-[#1b4332] text-sm font-medium rounded-lg hover:bg-[#1b4332]/5 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  data-testid="button-clear-cart"
                  onClick={clearCart}
                  className="w-full mt-2 text-xs text-[#5c5c5c] hover:text-red-500 transition-colors py-1"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
