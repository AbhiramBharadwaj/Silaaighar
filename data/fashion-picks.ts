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
  id: "kurta-teal-embroidered",
  title: "Teal Embroidered Kurta Set",
  subtitle: "Intricate thread embroidery with matching dupatta",
  price: "₹5,499",
  tags: ["Festive", "Traditional wear", "Hand embroidery"],
  images: [
    "/teal-embroidered-kurta-full-look.png",
    "/teal-embroidered-kurta-front-detail.png",
    "/teal-embroidered-kurta-embroidery-closeup.png",
    "/teal-embroidered-kurta-dupatta.png",
    "/teal-embroidered-kurta-image.png"
  ],
  description: "Elegant teal kurta set featuring intricate white embroidery on the front and hemline. Paired with straight-fit trousers and a matching embroidered dupatta, this outfit is perfect for festive and cultural occasions.",
  },
  {
  id: "kurta-pink-lace",
  title: "Dusty Pink Lace Kurta Set",
  subtitle: "Delicate lace embroidery with collared kurta",
  price: "₹4,799",
  tags: ["Elegant wear", "Office chic", "Festive"],
  images: [
    "/pink-lace-kurta-full-look.png",
    "/pink-lace-kurta-front-detail.png"
  ],
  description: "A graceful dusty pink kurta set designed with a collared neckline and button-down front. Features intricate lace embroidery on the side panel for a modern yet traditional appeal. Paired with matching straight-fit pants, perfect for office gatherings and festive occasions."
},

{
  id: "kurta-cream-floral",
  title: "Cream Floral Embroidered Kurta Set",
  subtitle: "Red floral embroidery with printed multicolor dupatta",
  price: "₹5,299",
  tags: ["Festive", "Elegant wear", "Embroidery"],
  images: [
    "/cream-floral-kurta-full-look.png",
    
  ],
  description: "An elegant cream kurta set featuring rich red floral embroidery along the neckline, sleeves, and hemline. Paired with straight trousers and a striking multicolor printed dupatta, this outfit blends traditional charm with modern vibrance, making it ideal for festive gatherings and cultural occasions."
},

  {
  id: "kurta-yellow-embroidered",
  title: "Yellow Embroidered Kurta Set",
  subtitle: "Bright yellow with intricate maroon embroidery and printed dupatta",
  price: "₹5,799",
  tags: ["Festive", "Vibrant wear", "Embroidery"],
  images: [
    "/yellow-embroidered-kurta-full-look.png",

  ], 
  description: "A radiant yellow kurta set featuring elegant white and maroon embroidery across the neckline, sleeves, and hemline. The set is paired with matching trousers and a richly printed dupatta, making it an ideal choice for festive."
},

{
  id: "kurta-maroon-embroidered",
  title: "Maroon Embroidered Kurta Set",
  subtitle: "Rich maroon with golden threadwork and matching dupatta",
  price: "₹6,299",
  tags: ["Festive", "Elegant wear", "Luxury embroidery"],
  images: [
    "/maroon-embroidered-kurta-full-look.png",
    "/maroon-embroidered-kurta-front-detail.png"
  ],
  description: "A luxurious maroon kurta set adorned with intricate golden embroidery across the neckline, sleeves, and hem. The outfit is paired with coordinating trousers and an embroidered dupatta, offering a regal and festive appeal, perfect for weddings and evening gatherings."
},

]
