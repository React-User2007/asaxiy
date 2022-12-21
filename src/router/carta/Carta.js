import React from 'react'
import Footer from '../../components/footer/Footer'
import NavbarBottom from '../../components/navbar-bottom/NavbarBottom'
import Navbar from '../../components/navbar/Navbar'
import Rasmlar from '../../components/rasmlar/Rasmlar'
import "./Cart.css"

function Carta() {
  return (
    <div className='cart__main'>
        <Navbar/>
        <NavbarBottom/>
        <div className="cart__money">
            <h1>To'lov qilish</h1>
            <p>Buyurtma raqamini bexato kiriting</p>
            <p>Buyurtma raqami*</p>
            <input type="cart__title" />
            <button>Tastiqlash</button>
        </div>
        <Rasmlar/>
        <div className="cart__div">
          <div className="cart__url">
            <img src={"https://asaxiy.uz/custom-assets/images/asaxiy-app.png"} alt="" />
          </div>
          <div className="cart__link">
            <img src={"https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"} alt="" />
            <p>Sizning internet do'koningiz</p>
            <button>App Store</button>
            <button>Google Play</button>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Carta