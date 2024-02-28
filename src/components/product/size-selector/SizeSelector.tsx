import { Size } from '@/interfaces'
import clsx from 'clsx';
import React from 'react'

interface Props {
    selectedSize:Size;
    availableSizes:Size[];
}

export const SizeSelector = ({selectedSize, availableSizes}:Props) => {
  return (
    <div className='my-5'>
        <h3 className=' font-bold mb-4'>Tallas disponibles</h3>
        <div className='flex'>
            {
                availableSizes.map(size => (
                    <button key={size} className={
                        clsx(
                            'btn-secondary mr-1' ,
                            {
                                'underline': size === selectedSize
                            
                            }
                        )
                    
                    }>
                        {size}
                    </button>
                ))
            }
        </div>
    </div>
  )
}
