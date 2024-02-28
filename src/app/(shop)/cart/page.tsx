import { QuantitySelector } from "@/components";
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    initialData.products[3],
]

export default function() {

   // redirect('/empty');
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
        <div className="flex flex-col w-[1000px]">
            <Title title="Carrito"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* carrito */}
                <div className="flex flex-col mt-5">
                    <span>Agregar mas items</span>
                    <Link href='/' className=" underline mb-5">
                        Seguir comprando
                    </Link>
                {/* items */}
                {
                    productsInCart.map(product => (
                        <div key={product.slug} className="flex mb-5">
                            <Image
                                src={`/product/${product.images[0]}`}
                                alt={product.title}
                                width={100}
                                height={100}
                                className="rounded"
                            />
                            <div className="">
                                <h3 className="font-bold">{product.title}</h3>
                                <p>{product.price}</p>
                                <QuantitySelector quantity={3}/>
                            </div>
                            
                        </div>
                    ))
                }
                </div>

                {/* Checkout - Resumen de orden */}
                <div className=" bg-white rounded-xl shadow-xl p-7  h-fit">
                    <h2 className="text-2xl mb-2">Resumen de la orden</h2>

                    <div className="grid grid-cols-2">
                        <span>No. Productos</span>
                        <span className="text-right">3 articulos</span>

                        <span>Sub Total</span>
                        <span className="text-right">$ 100</span>

                        <span>Impuestos (15%)</span>
                        <span className="text-right">$ 100</span>

                        <span className="mt-5 text-xl font-bold">Total</span>
                        <span className="mt-5 text-right">$ 100</span>
                    </div>

                    <div className="mt-5 mb-2 w-full">
                        <Link 
                            href='/checkout/address'
                            className="flex btn-primary justify-center "
                        >
                            Proceder al pago
                        </Link>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  );
}
