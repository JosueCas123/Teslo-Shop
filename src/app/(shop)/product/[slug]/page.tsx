// slug es un parametro dinamico que se puede pasar por la url

import { ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { ProductMovilShow } from "@/components/product/slideshow/ProductMovilShow";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";


interface Props {
  params: {slug: string}
}

export default function ({params}: Props) {
  const {slug} = params;
  const product = initialData.products.filter(product => product.slug === slug)[0];

  if(!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-1 md:col-span-2 ">
          {/* Movil */}
          <ProductMovilShow
            images={product.images}
            title={product.title}
            className="block md:hidden"
          />
          {/* Product Escritorio */}
          <ProductSlideshow
            images={product.images}
            title={product.title}
            className="hidden md:block"
          />
        </div>

        {/* Detalles */}
        <div className=" col-span-1">
          <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
            {product.title}
          </h1>

          <p className="text-lg mb-5">${product.price}</p>
          {/* Selector de tallas */}
            <SizeSelector
              selectedSize={product.sizes[0]}
              availableSizes={product.sizes}
            />
          {/* Selector de cantidad */}
          <QuantitySelector
            quantity={5}
          />
          {/* Button */}
          <button className="btn-primary my-5">
            Agregar al carrito
          </button>
          {/* Descripcion */}
          <h3 className="font-bold text-sm">Descripcion</h3>
          <p>
            {product.description}
          </p>
        </div>
    </div>
  );
}