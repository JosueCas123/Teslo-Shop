import { ProductGrid } from "@/components";
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subTitle="Todos los productos" />
      <ProductGrid products={products} />
    </>
  );
}
