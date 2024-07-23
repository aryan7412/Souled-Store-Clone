import React from 'react'
import Card from './Card'

function CategoriesK({heading,Catek}) {
  return (
    <div>
        <h3 className='text-center font-extrabold text-2xl pb-6 pt-6'>{heading}</h3>
        <div className='grid grid-cols-4 ml-2 mr-2 gap-2 items-center overflow-hidden'>
        {Catek.map((cat)=>(
            
                <Card>
                    <div className='mx-1 mb-4 overflow-hidden'>
                        <img className='transition hover:scale-110' src={cat.image} />
                    </div>
                </Card>

        ))}
        </div>
    </div>
  )
}

export default CategoriesK