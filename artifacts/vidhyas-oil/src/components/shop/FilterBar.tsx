import { motion } from "framer-motion";

type Category = "all" | "cooking" | "hair-body" | "medicinal";
type SortOption = "default" | "price-asc" | "price-desc";

interface FilterBarProps {
  activeCategory: Category;
  activeSort: SortOption;
  onCategoryChange: (cat: Category) => void;
  onSortChange: (sort: SortOption) => void;
  totalCount: number;
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "cooking", label: "Cooking Oils" },
  { value: "hair-body", label: "Hair & Body" },
  { value: "medicinal", label: "Medicinal" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "Sort: Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function FilterBar({ activeCategory, activeSort, onCategoryChange, onSortChange, totalCount }: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
    >
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            data-testid={`button-filter-${cat.value}`}
            onClick={() => onCategoryChange(cat.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.value
                ? "bg-[#1b4332] text-white"
                : "bg-white border border-[#e0d9ce] text-[#5c5c5c] hover:border-[#1b4332] hover:text-[#1b4332]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Right: count + sort */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-sm text-[#5c5c5c]">{totalCount} products</span>
        <select
          data-testid="select-sort"
          value={activeSort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="text-sm border border-[#e0d9ce] rounded-lg px-3 py-1.5 bg-white text-[#1a1a1a] focus:outline-none focus:border-[#1b4332]"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </motion.div>
  );
}
