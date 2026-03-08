export interface SpiceVariant {
  id: string;
  name: string;
  image: string;
  priceDelta: number;
}

export interface SpiceReview {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface SpiceProduct {
  id: string;
  name: string;
  condition: string;
  priceRange: { min: number, max: number };
  basePrice: number;
  shipping: number;
  soldCount?: number;
  rating: number;
  reviewCount: number;
  promotions?: string[];
  seller: {
    name: string;
    positiveFeedback: number;
    totalRatings: string;
  };
  image: string;
  gallery: string[];
  location: string;
  type: string;
  form: string;
  foodSpecs?: string[];
  variants?: SpiceVariant[];
  reviews?: SpiceReview[];
  description: string;
  specifications: Record<string, string>;
}

export const SPICES: SpiceProduct[] = [
  {
    id: 'spice-1',
    name: "Premium Green Cardamom Pods - Whole Spice - Free UK Delivery",
    condition: "Brand new",
    priceRange: { min: 3.88, max: 34.88 },
    basePrice: 3.88,
    shipping: 0,
    soldCount: 253,
    rating: 4.7,
    reviewCount: 45,
    promotions: ["Save up to 10% with Multi-buy", "Buy 2 pieces get 2% off"],
    seller: {
      name: "klm_uk_limited",
      positiveFeedback: 99.7,
      totalRatings: "5.2K"
    },
    image: "https://images.unsplash.com/photo-1599307710082-c1352f98b3ef?w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599307710082-c1352f98b3ef?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615485500704-8e990f9901f7?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532634896-26909d0d4b89?w=600&auto=format&fit=crop"
    ],
    location: "Sri Lanka",
    type: "Cardamom",
    form: "Pods",
    foodSpecs: ["Gluten Free", "GMO Free"],
    description: "Premium quality green cardamom pods sourced directly from the highlands of Sri Lanka. Perfect for culinary use and medicinal purposes.",
    specifications: {
      "Origin": "Sri Lanka",
      "Grade": "A",
      "Moisture": "< 12%",
      "Color": "Deep Green"
    },
    variants: [
      { id: 'v1', name: '50g', image: 'https://images.unsplash.com/photo-1599307710082-c1352f98b3ef?w=100', priceDelta: 0 },
      { id: 'v2', name: '100g', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9901f7?w=100', priceDelta: 4.5 },
      { id: 'v3', name: '250g', image: 'https://images.unsplash.com/photo-1532634896-26909d0d4b89?w=100', priceDelta: 12.0 }
    ],
    reviews: [
      { id: 'r1', user: 'SpiceLover', rating: 5, date: '12 Feb 2026', comment: 'Excellent quality pods, very fragrant!', avatar: '' },
      { id: 'r2', user: 'HomeChef', rating: 4, date: '05 Jan 2026', comment: 'Good value for money.', avatar: '' }
    ]
  },
  {
    id: 'spice-2',
    name: "Whole Cloves Dried Spice - Premium Quality Cooking - 50g 100g 200g 1kg",
    condition: "Brand new",
    priceRange: { min: 2.48, max: 23.88 },
    basePrice: 2.48,
    shipping: 37.95,
    soldCount: 154,
    rating: 4.9,
    reviewCount: 32,
    promotions: ["FAST DISPATCH", "LOWEST PRICE GUARANTEE", "TOP SELLER", "5% off with coupon"],
    seller: {
      name: "klm_uk_limited",
      positiveFeedback: 99.7,
      totalRatings: "5.2K"
    },
    image: "https://images.unsplash.com/photo-1615485499978-1279c3d6302f?w=600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1615485499978-1279c3d6302f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop"
    ],
    location: "Sri Lanka",
    type: "Cloves",
    form: "Whole",
    foodSpecs: ["Gluten Free", "Organic"],
    description: "Hand-picked organic whole cloves from the spice gardens of Matale. Intense flavor and aroma, essential for baking and meat dishes.",
    specifications: {
      "Origin": "Sri Lanka",
      "Process": "Sun-dried",
      "Purity": "100%"
    }
  }
];

export const RELATED_SEARCHES = [
  'spice set', 'indian spices', 'herbs and spices', 'spice rack', 'spice jars', 'spices paprika', 'garam masala powder', 'spices set'
];

export const BRANDS = [
  { name: 'Morton & Bassett', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&auto=format&fit=crop' },
  { name: 'Simply Organic', image: 'https://images.unsplash.com/photo-1532634896-26909d0d4b89?w=200&auto=format&fit=crop' },
  { name: 'Spice Hunter', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9901f7?w=200&auto=format&fit=crop' },
  { name: 'Watkins', image: 'https://images.unsplash.com/photo-1596560917011-447548003923?w=200&auto=format&fit=crop' },
  { name: 'Gewürze', image: 'https://images.unsplash.com/photo-1599307710082-c1352f98b3ef?w=200&auto=format&fit=crop' }
];
