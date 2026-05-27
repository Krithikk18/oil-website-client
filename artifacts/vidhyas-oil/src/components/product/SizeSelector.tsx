import { ProductSize } from "@/lib/types";

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: string;
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size.label}
          data-testid={`button-size-${size.label}`}
          onClick={() => onSelect(size.label)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all ${
            selectedSize === size.label
              ? "bg-[#1b4332] border-[#1b4332] text-white"
              : "bg-white border-[#e0d9ce] text-[#1a1a1a] hover:border-[#1b4332]"
          }`}
        >
          {size.label} · ₹{size.price}
        </button>
      ))}
    </div>
  );
}
