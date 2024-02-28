import { ProductGrid } from "@/components";
import { Title } from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
    params: {id:Category}
    
}

export default function ({params}: Props) {
    const {id} = params;
    const products = seedProducts.filter(product => product.gender === id);

    const label:Record<Category, string> = {
      'men': 'para Hombres',
      'women': 'para Mujeres',
      'kid': 'para Niños',
      'unisex':'para todos'
    }

    // if(id === 'kids') {
    //     notFound();
    // }
  return (
    <>
    <Title title={`Articulos de ${label[id]}`} subTitle="Todos los productos" />
    <ProductGrid products={products} />
  </>
  );
}