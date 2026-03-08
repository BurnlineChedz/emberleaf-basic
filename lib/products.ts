export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const product: Product = {
  id: "1",
  name: "Customized 40oz Tumbler",
  price: 40.0,
  description:
    "A durable 40 oz insulated tumbler customized exactly the way you want it. Double-wall vacuum insulation keeps drinks hot or cold for hours while the personalized engraving turns an everyday cup into a one-of-a-kind statement.",
  image: "https://placehold.co/600x400/e5e5e5/737373?text=Tumbler",
};

export const productList: Product[] = [product];

export function getProduct(): Product {
  return product;
}

export function getProductById(id: string): Product | undefined {
  return productList.find((p) => p.id === id);
}
