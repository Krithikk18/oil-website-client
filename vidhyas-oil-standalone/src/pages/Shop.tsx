import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearch } from "wouter";
import { products } from "@/lib/products";
import { Product } from "@/lib/types";
import FilterBar from "@/components/shop/FilterBar";
import ProductGrid from "@/components/shop/ProductGrid";

type Category = "all" | "cooking" | "hair-body" | "medicinal";
type SortOption = "default" | "price-asc" | "price-desc";

export default function Shop() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCategory = (params.get("category") as Category) || "all";

  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [activeSort, setActiveSort] = useState<SortOption>("default");

  useEffect(() => {
    const p = new URLSearchParams(search);
    const cat = p.get("category") as Category;
    if (cat) setActiveCategory(cat);
  }, [search]);

  const filtered: Product[] = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => {
      if (activeSort === "price-asc") return a.sizes[0].price - b.sizes[0].price;
      if (activeSort === "price-desc") return b.sizes[0].price - a.sizes[0].price;
      return 0;
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F6F0]"
    >
      {/* Page header */}
      <div className="bg-[#f5f0e8] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-3">Handcrafted Goodness</p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-[#1b4332]">Our Products</h1>
          <p className="text-[#5c5c5c] text-base mt-4 max-w-lg mx-auto">
            Every oil, cold-pressed and traditionally crafted for purity you can taste and feel.
          </p>
        </div>
      </div>

      {/* Products section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterBar
          activeCategory={activeCategory}
          activeSort={activeSort}
          onCategoryChange={setActiveCategory}
          onSortChange={setActiveSort}
          totalCount={filtered.length}
        />
        <ProductGrid products={filtered} />
      </div>
    </motion.div>
  );
}
