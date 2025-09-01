export type FashionProduct = {
  id: string
  title: string
  subtitle?: string
  price?: string
  tags?: string[]
  images: string[] // 3-4 images per product
  description?: string
}

export const fashionPicks: FashionProduct[] = [
  {
    id: "lehenga-regal-rose",
    title: "Regal Rose Lehenga",
    subtitle: "Hand embroidery, net dupatta",
    price: "₹14,990",
    tags: ["Festive", "Bridal pre-wed", "Handwork"],
    images: [
      "/regal-rose-lehenga-full-look.png",
      "/regal-rose-lehenga-embroidery-detail.png",
      "/regal-rose-lehenga-fabric-texture.png",
      "/regal-rose-lehenga-back-view.png",
    ],
    description: "Soft-rose palette with fine zardozi and mirror highlights.",
  },
  {
    id: "kurta-linen-summer",
    title: "Summer Linen Kurta Set",
    subtitle: "Breathable linen, pastel hues",
    price: "₹3,990",
    tags: ["Daily wear", "Custom fit", "Pastel"],
    images: ["/linen-kurta-set-front.png", "/linen-kurta-set-closeup.png", "/linen-kurta-set-sleeve-detail.png"],
    description: "Ultra-light linen with neat placket and hand-finished hems.",
  },
  {
    id: "saree-organza-blush",
    title: "Blush Organza Saree",
    subtitle: "Pearl edging, fall pico",
    price: "₹6,490",
    tags: ["Occasion", "Organza", "Pearls"],
    images: ["/blush-organza-saree-drape.png", "/blush-organza-saree-pearl-edging.png", "/blush-organza-saree-pallu.png"],
    description: "Feather-light drape finished with premium pearl lace.",
  },
  {
    id: "jacket-ethnic-weave",
    title: "Ethnic Weave Jacket",
    subtitle: "Handloom-inspired",
    price: "₹5,990",
    tags: ["Fusion", "Handloom", "Layering"],
    images: ["/ethnic-weave-jacket-front.png", "/ethnic-weave-jacket-texture.png", "/ethnic-weave-jacket-buttons.png"],
    description: "Versatile layer with structured shoulders and soft lining.",
  },
]
