import React from 'react'

const Card = ({children}) => {
  return (
    <div className='cursor-pointer object-cover duration-500'>
        {children}
    </div>
  )
}

export default Card
