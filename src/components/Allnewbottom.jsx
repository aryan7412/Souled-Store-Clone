import React from 'react'

const Allnewbottom = ({heading,products}) => {
  return (
    <div>
        <h3 className='text-center font-extrabold text-2xl pb-6 pt-6'>{heading}</h3>
        <div className='grid grid-cols-4 pb-10 pt-4'>
        {products.map((product)=>(
                    <div className='mx-3 '>
                        <img className='rounded-lg' src={product.image} />
                        <p className='font-bold text-gray-700 font-sans text-sm'>{product.subtitle}</p>
                        <div className='h-px my-0 mb-1 border-0 w-[340px] dark:bg-gray-300'></div>
                        <p className='text-gray-500 text-sm'>{product.type}</p>
                        <p className=' text-sm'>{product.price}</p>
                        <p className='text-gray-500 text-sm'>MRP incl. of all taxes</p>
                    </div>          
            ))}
        </div>
    </div>

  )
}

export default Allnewbottom