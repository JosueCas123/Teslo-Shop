'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperObjet } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

interface Props {
    images: string[];
    title: string;
    className?: string;
}
export const ProductMovilShow = ({ images, title, className }: Props) => {
   
    return (
        <div className={className}>
            <Swiper
               style={{
                width:'100vw',
                height:'500px',
               }}
                pagination
                autoplay = {{
                    delay: 2500
                
                }}
                modules={[FreeMode, Navigation,  Autoplay, Pagination ]}
                className="mySwiper2"
            >
                {
                    images.map(imge => (
                        <SwiperSlide key={imge}>
                            <Image
                                src={`/product/${imge}`}
                                alt={title}
                                width={600}
                                height={500}
                                className='object-fill'
                            />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}
