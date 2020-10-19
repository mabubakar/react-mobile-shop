import React from 'react'
import Mobile from './CoddingAddict/Mobile'
import './CoddingAddict/Mobile.css'

function App() {
  return (
    <>
      <h1 className='text-center my-4 '>Mobile Shop</h1>
      <section className='mobile__list'>
        <Mobile
          company='Samsung'
          model='Galaxy S20 FE'
          imgUrl='https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS20FE-s.jpg'
          price='Rs. 119,999'
        />
        <Mobile
          company='Vivo'
          model='V20'
          imgUrl='https://www.whatmobile.com.pk/admin/images/Vivo/VivoV20-s.jpg'
          price='Rs. 59,999'
        />
        <Mobile
          company='Oppo'
          model='F17 Pro'
          imgUrl='https://www.whatmobile.com.pk/admin/images/Oppo/OppoF17Pro-s.jpg'
          price='Rs. 51,999'
        />
        <Mobile
          company='Infinix  '
          model='Zero 8'
          imgUrl='https://www.whatmobile.com.pk/admin/images/Infinix/InfinixZero8-s.jpg'
          price='Rs. 39,999'
        />
      </section>
    </>
  )
}

export default App
