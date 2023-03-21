import React from 'react'

const Images = ({img}) => {
  return (
    <div>
         <img src={img?.image} alt={img?.title} className='photo' />
    </div>
  )
}

export default Images