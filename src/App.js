import React from 'react'
import Mobile from './CoddingAddict/Mobile'
import './CoddingAddict/Mobile.css'
import mobiles from './CoddingAddict/mobiles'

function App() {
  return (
    <>
      <h1 className='text-center my-4 '>Mobile Shop</h1>
      <section className='mobile__list'>
        {mobiles.map(mobile => {
          return (
            <Mobile
              key={mobile.id}
              //using spread operator
              {...mobile}
              //or using this way
              // company={mobile.company}
              // model={mobile.model}
              // price={mobile.price}
              // imgUrl={mobile.imgUrl}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
