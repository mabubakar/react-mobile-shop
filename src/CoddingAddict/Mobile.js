import React from 'react'

const Mobile = ({ company, model, imgUrl, price }) => {
  return (
    <>
      <article className='mobile'>
        <img src={imgUrl} alt={model} />
        <p>{company}</p>
        <p>{model}</p>
        <p className='text-primary'>{price}</p>
      </article>
    </>
  )
}

export default Mobile
