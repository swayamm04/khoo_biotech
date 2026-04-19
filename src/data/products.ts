import { StaticImageData } from "next/image";

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string | StaticImageData;
  description: string;
  form?: string;
  price?: number;
  volume?: string;
  composition?: string[];
  benefits?: string[];
  usage?: string;
  crop?: string;
};

export const products: Product[] = [
  {
    slug: "grow-up",
    name: "Grow Up",
    category: "Biostimulant",
    form: "Powder",
    price: 1999,
    volume: "1 KG",
    image: "/products/Grow Up.jpg",
    description: "Improves plant growth and increases fruit size and weight.",
    composition: ["Fish Protein Powder 90%", "Herbal Extracts 10%"],
    benefits: [
      "Improves plant growth",
      "Increases fruit size and weight",
      "Provides essential nutrients"
    ],
    usage: "1-2 grams per liter of water"
  },
  {
    slug: "humic-power-liquid",
    name: "Humic Power (Liquid)",
    category: "Biostimulant",
    form: "Liquid",
    price: 849,
    volume: "1000 ML",
    image: "/products/Humic Power (Liquid).jpg",
    description: "Improves soil fertility and enhances nutrient absorption.",
    composition: ["Humic Acid 6%"],
    benefits: [
      "Improves soil fertility",
      "Enhances nutrient absorption",
      "Promotes root growth"
    ]
  },
  {
    slug: "humic-power-powder",
    name: "Humic Power (Powder)",
    category: "Biostimulant",
    form: "Powder",
    price: 1085,
    volume: "1 KG",
    image: "/products/Humic Power (Powder).jpg",
    description: "Improves soil structure and enhances nutrient efficiency.",
    composition: ["Humic + Fulvic Acid 76%"],
    benefits: [
      "Improves soil structure",
      "Enhances nutrient efficiency"
    ]
  },
  {
    slug: "plant-yield-enhancer",
    name: "Plant Yield Enhancer",
    category: "Biostimulant",
    form: "Liquid",
    price: 1600,
    volume: "1000 ML",
    image: "/products/Plant Yield Enhancer.jpg",
    description: "Increases fruit size, improves yield, and enhances fruit quality.",
    composition: [
      "Humic Acid 6%",
      "Fish Protein",
      "Brassinolides",
      "Gibberellic Acid",
      "NATCA",
      "SNP"
    ],
    benefits: [
      "Increases fruit size",
      "Improves yield",
      "Enhances fruit quality"
    ],
    usage: "1.5-2 ml per liter",
    crop: "Tomato"
  },
  {
    slug: "seaweed-power",
    name: "Seaweed Power",
    category: "Biostimulant",
    form: "Liquid",
    price: 1368,
    volume: "1000 ML",
    image: "/products/Seaweed Power.jpg",
    description: "Enhances plant growth and improves crop quality. Suitable for all crops.",
    composition: ["Seaweed Extract (Sargassum) 10%"],
    benefits: [
      "Enhances plant growth",
      "Improves crop quality",
      "Suitable for all crops"
    ]
  },
  {
    slug: "amino-power",
    name: "Amino Power",
    category: "Biostimulant",
    form: "Liquid",
    volume: "1000 ML",
    image: "/products/Amino Power.jpg",
    description: "Boosts plant growth and improves nutrient absorption.",
    composition: ["Humic Acid 6%", "Amino Nutrients"],
    benefits: [
      "Boosts plant growth",
      "Improves nutrient absorption",
      "Enhances productivity"
    ]
  },
  {
    slug: "chitonal-super",
    name: "Chitonal Super",
    category: "Crop Specific",
    form: "Liquid",
    volume: "1000 ML",
    image: "/products/Chitonal Super.jpg",
    description: "Enhances fruit quality and improves yield for Pomegranate.",
    crop: "Pomegranate",
    benefits: [
      "Enhances fruit quality",
      "Improves yield",
      "Supports healthy fruit development"
    ]
  },
  {
    slug: "roganashini-m1",
    name: "Roganashini-M1",
    category: "Disease Control",
    form: "Liquid",
    price: 2483,
    volume: "1000 ML",
    image: "/products/Roganashini-M1.jpg",
    description: "Controls bacterial, fungal, and viral diseases while improving plant immunity.",
    composition: ["Neem Oil", "Natural Disinfectants"],
    benefits: [
      "Controls bacterial diseases",
      "Controls fungal diseases",
      "Controls viral diseases",
      "Improves plant immunity"
    ],
    usage: "2-2.5 ml per liter"
  },
  {
    slug: "roganashini-m2",
    name: "Roganashini-M2",
    category: "Disease Control",
    form: "Liquid",
    volume: "500 ML",
    image: "/products/Roganashini-M2.jpg",
    description: "Controls severe infections and provides natural resistance.",
    composition: ["COC", "Clove Oil", "Natural Fillers"],
    benefits: [
      "Controls severe infections",
      "Provides natural resistance",
      "Effective against bacterial, fungal and viral diseases"
    ],
    usage: "3-4 ml per liter"
  },
  {
    slug: "insect-controller",
    name: "Insect Controller",
    category: "Bio Pesticide",
    form: "Liquid",
    volume: "500 ML",
    image: "/products/Insect Controller.jpg",
    description: "Controls thrips, aphids, mites, whiteflies, and leaf hoppers.",
    composition: ["Crude Fish Oil", "Herbal Extracts"],
    benefits: [
      "Controls thrips",
      "Controls aphids",
      "Controls mites",
      "Controls whiteflies",
      "Controls leaf hoppers"
    ],
    usage: "3-3.5 ml per liter"
  },
  {
    slug: "neem-oil",
    name: "Neem Oil",
    category: "Bio Pesticide",
    form: "Liquid",
    volume: "1000 ML",
    image: "/products/Neem Oil.jpg",
    description: "Natural, eco-friendly pest control safe for all crops.",
    composition: ["100% Neem Oil"],
    benefits: [
      "Natural pest control",
      "Eco-friendly solution",
      "Safe for crops"
    ],
    usage: "3-5 ml per liter"
  },
  {
    slug: "waste-decomposer",
    name: "Waste Decomposer",
    category: "Soil Conditioner",
    form: "Liquid",
    image: "/products/Waste Decomposer.jpg",
    description: "Improves soil health and enhances microbial activity for decomposition.",
    benefits: [
      "Improves soil health",
      "Enhances microbial activity",
      "Supports composting",
      "Helps in residue decomposition"
    ]
  },
  {
    slug: "spreading-booster",
    name: "Spreading Booster",
    category: "Adjuvant",
    form: "Liquid",
    image: "/products/Spreading Booster.jpg",
    description: "Improves spray coverage and enhances absorption.",
    benefits: [
      "Improves spray coverage",
      "Enhances absorption",
      "Provides rainfastness",
      "Reduces spray loss"
    ],
    usage: "25 ml per 100 liters"
  }
];

export const categories = [
  { slug: "biostimulant", name: "Biostimulant", desc: "Natural substances that stimulate plant processes for better growth." },
  { slug: "crop-specific", name: "Crop Specific", desc: "Tailored solutions for specific crops like Pomegranate." },
  { slug: "disease-control", name: "Disease Control", desc: "Bio-products to manage and prevent plant diseases." },
  { slug: "bio-pesticide", name: "Bio Pesticide", desc: "Eco-friendly protection against harmful insects." },
  { slug: "soil-conditioner", name: "Soil Conditioner", desc: "Amendments that improve the physical and microbial health of soil." },
  { slug: "adjuvant", name: "Adjuvant", desc: "Enhancers that improve the effectiveness of other agricultural sprays." },
];
