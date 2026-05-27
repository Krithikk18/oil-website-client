import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItemCard({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex gap-3 py-3 border-b border-[#e0d9ce] last:border-0" data-testid={`cart-item-${item.id}-${item.size}`}>
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg bg-[#f5f0e8] shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-[#1a1a1a] text-sm truncate">{item.name}</h4>
        <p className="text-xs text-[#5c5c5c] mt-0.5">{item.size}</p>
        <p className="text-sm font-semibold text-[#1b4332] mt-1">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
      </div>
      <div className="flex flex-col items-end justify-between shrink-0">
        <button
          data-testid={`button-remove-${item.id}-${item.size}`}
          onClick={() => removeItem(item.id, item.size)}
          className="text-[#5c5c5c] hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={14} />
        </button>
        <div className="flex items-center gap-2 bg-white border border-[#e0d9ce] rounded-full px-2 py-1">
          <button
            data-testid={`button-decrease-${item.id}-${item.size}`}
            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="text-[#1b4332] disabled:opacity-30 hover:text-[#C8942A] transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={12} />
          </button>
          <span className="text-xs font-semibold text-[#1a1a1a] w-4 text-center" data-testid={`quantity-${item.id}-${item.size}`}>
            {item.quantity}
          </span>
          <button
            data-testid={`button-increase-${item.id}-${item.size}`}
            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
            className="text-[#1b4332] hover:text-[#C8942A] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
