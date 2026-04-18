import fertilizer from "@/assets/product-fertilizer.jpg";
import pesticide from "@/assets/product-pesticide.jpg";
import enhancer from "@/assets/product-enhancer.jpg";
import manure from "@/assets/product-manure.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  { slug: "green-bio-npk", name: "Green Bio NPK", category: "Bio-Fertilizers", image: fertilizer, description: "Versatile microbial biofertilizer that fixes nitrogen, solubilizes phosphate, and mobilizes potash." },
  { slug: "green-vam-l", name: "Green VAM L", category: "Bio-Fertilizers", image: fertilizer, description: "Liquid mycorrhiza formulation that improves nutrient uptake and drought resistance." },
  { slug: "green-actino", name: "Green Actino", category: "Bio-Pesticides", image: pesticide, description: "Bio-insecticide derived from soil microbes, effective against sucking pests." },
  { slug: "green-dual", name: "Green Dual", category: "Bio-Pesticides", image: pesticide, description: "Dual-purpose bio-fungicide controlling fungi and nematodes while solubilizing nutrients." },
  { slug: "green-healthplus", name: "Green Healthplus", category: "Bio-Pesticides", image: pesticide, description: "Microbial plant growth regulator with probiotics and antagonistic microbes." },
  { slug: "green-nemafree", name: "Green Nemafree", category: "Bio-Pesticides", image: pesticide, description: "Bio-nematicide formulated to control parasitic nematodes naturally." },
  { slug: "green-star", name: "Green Star", category: "Bio-Enhancers", image: enhancer, description: "Bio-organic product that promotes flowering and enhances fruit setting." },
  { slug: "green-marvel", name: "Green Marvel", category: "Bio-Pesticides", image: pesticide, description: "Bio-fungicide that combats bacterial and fungal pathogens effectively." },
  { slug: "green-compost", name: "Green Compost", category: "Organic Manures", image: manure, description: "Premium compost and soil amendment that enriches soil organic matter." },
];

export const categories = [
  { slug: "bio-fertilizers", name: "Bio-Fertilizers", desc: "Natural nutrients that enhance soil fertility and plant growth." },
  { slug: "bio-pesticides", name: "Bio-Pesticides", desc: "Eco-friendly protection against pests and diseases." },
  { slug: "bio-enhancers", name: "Bio-Enhancers", desc: "Stimulants that improve crop quality and yield." },
  { slug: "decomposers", name: "Decomposers", desc: "Solutions that accelerate organic waste breakdown." },
  { slug: "organic-manures", name: "Organic Manures", desc: "Premium composts and soil amendments." },
  { slug: "specialty", name: "Specialty Products", desc: "Innovative solutions for specific agricultural needs." },
];
