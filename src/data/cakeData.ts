export interface Cake {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const cakeData: Cake[] = [
  {
    id: 1,
    name: "Elegant Wedding Cake",
    description: "Three-tier vanilla cake with buttercream frosting and edible flowers.",
    imageUrl: "https://images.pexels.com/photos/265801/pexels-photo-265801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Wedding", "Multi-tier", "Elegant"]
  },
  {
    id: 2,
    name: "Chocolate Drip Cake",
    description: "Rich chocolate cake with ganache drip and fresh berries.",
    imageUrl: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Chocolate", "Birthday", "Berries"]
  },
  {
    id: 3,
    name: "Unicorn Fantasy",
    description: "Colorful vanilla cake with rainbow buttercream and handcrafted fondant unicorn.",
    imageUrl: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Kids", "Birthday", "Colorful"]
  },
  {
    id: 4,
    name: "Floral Birthday Cake",
    description: "Vanilla and raspberry cake decorated with buttercream flowers.",
    imageUrl: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Birthday", "Floral", "Elegant"]
  },
  {
    id: 5,
    name: "Rustic Naked Cake",
    description: "Semi-frosted vanilla and lemon cake with fresh flowers and berries.",
    imageUrl: "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Rustic", "Wedding", "Minimalist"]
  },
  {
    id: 6,
    name: "Red Velvet Delight",
    description: "Classic red velvet cake with cream cheese frosting and chocolate decorations.",
    imageUrl: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Red Velvet", "Classic", "Celebration"]
  },
  {
    id: 7,
    name: "Tropical Paradise",
    description: "Coconut and pineapple cake with passion fruit filling and tropical decorations.",
    imageUrl: "https://images.pexels.com/photos/1120464/pexels-photo-1120464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Tropical", "Summer", "Exotic"]
  },
  {
    id: 8,
    name: "Dark Chocolate Ganache",
    description: "Rich dark chocolate cake with smooth ganache coating and gold accents.",
    imageUrl: "https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Chocolate", "Luxury", "Elegant"]
  },
  {
    id: 9,
    name: "Festive Holiday Cake",
    description: "Spiced cake with cream cheese frosting and festive holiday decorations.",
    imageUrl: "https://images.pexels.com/photos/5419044/pexels-photo-5419044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Holiday", "Seasonal", "Festive"]
  }
];