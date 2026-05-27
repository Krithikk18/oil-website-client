import { Product } from "./types";

export const products: Product[] = [
  {
    id: "sesame",
    slug: "cold-pressed-sesame-oil",
    name: "Cold Pressed Sesame Oil",
    category: "cooking",
    categoryLabel: "Cooking Oils",
    description: "Extracted from the finest black sesame seeds using traditional wooden churners (Mara Chekku). Our sesame oil retains all its natural nutrients, rich aroma, and deep flavor. Perfect for traditional Indian cooking, oil pulling, and daily wellness rituals.",
    shortDescription: "Traditional wood-pressed black sesame oil for authentic cooking and wellness.",
    sizes: [{ label: "500ml", price: 180 }, { label: "1L", price: 340 }, { label: "5L", price: 1500 }],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&q=80"
    ],
    benefits: ["Rich in antioxidants and healthy fats", "Improves heart health and lowers cholesterol", "Excellent for bone health and skin nourishment"],
    howToUse: "Ideal for deep frying, sautéing, and salad dressings. Also recommended for traditional oil pulling and body massage.",
    storage: "Store in a cool, dry place away from direct sunlight. Do not refrigerate.",
    ingredients: "100% Pure Cold-Pressed Black Sesame Seeds, Palm Jaggery",
    featured: true
  },
  {
    id: "coconut",
    slug: "cold-pressed-coconut-oil",
    name: "Cold Pressed Coconut Oil",
    category: "cooking",
    categoryLabel: "Cooking Oils",
    description: "Made from sun-dried, premium quality copras. This versatile oil brings a delicate, sweet aroma to your cooking and serves as an exceptional natural moisturizer for hair and skin. Zero heat means zero nutrient loss.",
    shortDescription: "Pure, unrefined coconut oil for cooking, skin, and hair care.",
    sizes: [{ label: "500ml", price: 220 }, { label: "1L", price: 420 }, { label: "5L", price: 1900 }],
    image: "https://images.unsplash.com/photo-1519162808019-7de1100ce9bf?w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1519162808019-7de1100ce9bf?w=400&q=80",
      "https://images.unsplash.com/photo-1519162808019-7de1100ce9bf?w=600&q=80",
      "https://images.unsplash.com/photo-1519162808019-7de1100ce9bf?w=200&q=80"
    ],
    benefits: ["Boosts metabolism and energy", "Deeply nourishes hair and skin", "Supports healthy digestion"],
    howToUse: "Use for everyday cooking, baking, or raw in smoothies. Apply directly to hair or skin as a natural moisturizer.",
    storage: "Store at room temperature. The oil will naturally solidify below 24°C (75°F).",
    ingredients: "100% Pure Cold-Pressed Coconut Copras",
    featured: true
  },
  {
    id: "groundnut",
    slug: "cold-pressed-groundnut-oil",
    name: "Cold Pressed Groundnut Oil",
    category: "cooking",
    categoryLabel: "Cooking Oils",
    description: "Our wood-pressed groundnut (peanut) oil brings back the authentic taste of Indian meals. Extracted from native peanut varieties, it has a high smoking point making it the perfect companion for deep frying while maintaining heart health.",
    shortDescription: "Aromatic and nutrient-rich peanut oil, ideal for all types of Indian cooking.",
    sizes: [{ label: "500ml", price: 160 }, { label: "1L", price: 300 }, { label: "5L", price: 1300 }],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&q=80"
    ],
    benefits: ["High smoke point ideal for deep frying", "Rich in Vitamin E and resveratrol", "Cholesterol-free and heart healthy"],
    howToUse: "Perfect for deep frying, stir-frying, and everyday cooking. Enhances the flavor of traditional recipes.",
    storage: "Keep tightly sealed in a cool, dark place.",
    ingredients: "100% Pure Cold-Pressed Groundnuts (Peanuts)",
    featured: true
  },
  {
    id: "castor",
    slug: "cold-pressed-castor-oil",
    name: "Cold Pressed Castor Oil",
    category: "hair-body",
    categoryLabel: "Hair & Body Oils",
    description: "A dense, deeply nourishing oil extracted slowly without heat. Our castor oil is a miracle worker for hair growth, skin healing, and joint pain relief. Thick, pure, and incredibly potent.",
    shortDescription: "Thick, potent castor oil for rapid hair growth and deep skin healing.",
    sizes: [{ label: "200ml", price: 250 }, { label: "500ml", price: 550 }],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80"
    ],
    benefits: ["Stimulates hair follicles for thicker growth", "Relieves joint and muscle pain when massaged", "Deeply moisturizes dry skin and heals scars"],
    howToUse: "For hair: mix with coconut or sesame oil and massage into scalp. For body: apply gently on affected areas.",
    storage: "Store in a cool, dry place. The dark amber bottle protects it from light degradation.",
    ingredients: "100% Pure Cold-Pressed Castor Seeds",
    featured: true
  },
  {
    id: "mustard",
    slug: "cold-pressed-mustard-oil",
    name: "Cold Pressed Mustard Oil",
    category: "cooking",
    categoryLabel: "Cooking Oils",
    description: "Extracted from black mustard seeds, this pungent and flavorful oil brings a sharp, authentic kick to your dishes. Cold pressing ensures the essential allyl isothiocyanate is preserved for maximum health benefits.",
    shortDescription: "Pungent and authentic mustard oil for robust flavor and immunity.",
    sizes: [{ label: "500ml", price: 190 }, { label: "1L", price: 360 }],
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&q=80"
    ],
    benefits: ["Boosts immunity and fights infections", "Improves blood circulation", "Natural preservative for pickles"],
    howToUse: "Heat until smoking before cooking to mellow the flavor. Essential for traditional pickles and robust curries.",
    storage: "Store away from direct sunlight in a dry place.",
    ingredients: "100% Pure Cold-Pressed Black Mustard Seeds",
    featured: false
  },
  {
    id: "neem",
    slug: "cold-pressed-neem-oil",
    name: "Cold Pressed Neem Oil",
    category: "medicinal",
    categoryLabel: "Medicinal Oils",
    description: "A potent, highly therapeutic oil extracted from neem seeds. Known as the 'village pharmacy' in India, neem oil is a powerful anti-bacterial and anti-fungal remedy for severe skin conditions, dandruff, and organic gardening.",
    shortDescription: "Therapeutic grade neem oil for skin healing, scalp health, and organic gardening.",
    sizes: [{ label: "100ml", price: 180 }, { label: "200ml", price: 320 }],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=80"
    ],
    benefits: ["Treats severe acne, eczema, and psoriasis", "Eliminates dandruff and head lice", "Excellent natural pesticide for plants"],
    howToUse: "Always dilute before use. Mix a few drops with coconut or sesame oil for skin/hair. Mix with water and mild soap for plant spray.",
    storage: "Store in a cool place. Will solidify in cold weather; warm gently to liquefy.",
    ingredients: "100% Pure Cold-Pressed Neem Seeds",
    featured: false
  }
];
