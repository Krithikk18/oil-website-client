import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import ProductGallery from "./ProductGallery";
import SizeSelector from "./SizeSelector";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, setCartOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].label);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedSizeObj = product.sizes.find((s) => s.label === selectedSize) || product.sizes[0];
  const totalPrice = selectedSizeObj.price * quantity;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      size: selectedSize,
      price: selectedSizeObj.price,
      quantity,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      size: selectedSize,
      price: selectedSizeObj.price,
      quantity,
      image: product.image,
    });
    setCartOpen(true);
  };

  return (
    <section className="py-10 lg:py-16 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ProductGallery
              image={product.image}
              thumbnails={product.thumbnails}
              name={product.name}
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Category badge */}
            <span className="inline-block text-[10px] font-medium tracking-wider uppercase bg-[#95d5b2]/40 text-[#1b4332] rounded-full px-3 py-1 mb-4">
              {product.categoryLabel}
            </span>

            {/* Name */}
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#1b4332] mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-2xl font-bold text-[#C8942A]">₹{totalPrice.toLocaleString("en-IN")}</span>
              {quantity > 1 && (
                <span className="text-sm text-[#5c5c5c]">(₹{selectedSizeObj.price} × {quantity})</span>
              )}
            </div>

            {/* Short description */}
            <p className="text-[#5c5c5c] leading-relaxed mb-6">{product.shortDescription}</p>

            {/* Size Selector */}
            <div className="mb-5">
              <p className="text-sm font-medium text-[#1a1a1a] mb-2">Select Size</p>
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
              />
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-medium text-[#1a1a1a] mb-2">Quantity</p>
              <div className="inline-flex items-center border border-[#e0d9ce] rounded-full overflow-hidden">
                <button
                  data-testid="button-quantity-decrease"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#1b4332] hover:bg-[#f5f0e8] transition-colors disabled:opacity-30"
                  disabled={quantity <= 1}
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 font-medium text-[#1a1a1a] min-w-[3rem] text-center" data-testid="text-quantity">
                  {quantity}
                </span>
                <button
                  data-testid="button-quantity-increase"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 text-[#1b4332] hover:bg-[#f5f0e8] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-7">
              <button
                data-testid="button-add-to-cart"
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-medium rounded-xl transition-all ${
                  added
                    ? "bg-[#2d6a4f] text-white"
                    : "bg-[#1b4332] text-white hover:bg-[#2d6a4f]"
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle size={16} />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    Add to Cart
                  </>
                )}
              </button>
              <button
                data-testid="button-buy-now"
                onClick={handleBuyNow}
                className="flex-1 py-3.5 border-2 border-[#1b4332] text-[#1b4332] font-medium rounded-xl hover:bg-[#1b4332]/5 transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl p-5 mb-6 border border-[#e0d9ce]">
              <p className="text-sm font-semibold text-[#1b4332] mb-3">Product Benefits</p>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#5c5c5c]">
                    <CheckCircle size={14} className="text-[#2d6a4f] mt-0.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantee badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["Cold Pressed", "No Additives", "Lab Tested"].map((badge) => (
                <span key={badge} className="flex items-center gap-1 text-xs text-[#1b4332] bg-[#95d5b2]/20 rounded-full px-3 py-1">
                  <CheckCircle size={11} className="text-[#2d6a4f]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="border border-[#e0d9ce] rounded-xl overflow-hidden">
              <AccordionItem value="description" className="border-b border-[#e0d9ce] px-4">
                <AccordionTrigger className="font-medium text-sm text-[#1a1a1a] py-3 hover:no-underline">Description</AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c] text-sm leading-relaxed pb-4">{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-to-use" className="border-b border-[#e0d9ce] px-4">
                <AccordionTrigger className="font-medium text-sm text-[#1a1a1a] py-3 hover:no-underline">How to Use</AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c] text-sm leading-relaxed pb-4">{product.howToUse}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="storage" className="border-b border-[#e0d9ce] px-4">
                <AccordionTrigger className="font-medium text-sm text-[#1a1a1a] py-3 hover:no-underline">Storage</AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c] text-sm leading-relaxed pb-4">{product.storage}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="ingredients" className="px-4">
                <AccordionTrigger className="font-medium text-sm text-[#1a1a1a] py-3 hover:no-underline">Ingredients</AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c] text-sm leading-relaxed pb-4">{product.ingredients}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
