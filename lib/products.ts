export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const productList: Product[] = [
  {
    id: "tumbler-40oz",
    name: "40oz Insulated Tumbler",
    price: 40.0,
    description:
      "Our flagship 40 oz tumbler — double-wall vacuum insulation keeps drinks hot or cold for hours. Custom engraving turns an everyday cup into a one-of-a-kind statement piece.",
    image: "https://placehold.co/600x400/0a0a0a/39FF14?text=40oz+Tumbler",
  },
  {
    id: "tumbler-20oz",
    name: "20oz Travel Tumbler",
    price: 28.0,
    description:
      "The perfect companion for your commute. Slim 20 oz profile fits most cup holders while keeping your drink at the right temperature all day. Personalized just for you.",
    image: "https://placehold.co/600x400/0a0a0a/c0c0c0?text=20oz+Tumbler",
  },
  {
    id: "tumbler-bundle",
    name: "Duo Bundle (20oz + 40oz)",
    price: 62.0,
    description:
      "Get both sizes at a bundle discount. Mix and match engravings — one for home, one for the road. Comes gift-boxed and ready to impress.",
    image: "https://placehold.co/600x400/0a0a0a/f0f0f0?text=Bundle",
  },
];

export function getProduct(): Product {
  return productList[0];
}

export function getProductById(id: string): Product | undefined {
  return productList.find((p) => p.id === id);
}
