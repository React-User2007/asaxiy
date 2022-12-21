import React from 'react'
import Footer from '../../components/footer/Footer'
import NavbarBottom from '../../components/navbar-bottom/NavbarBottom'
import Navbar from '../../components/navbar/Navbar'
import Rasmlar from '../../components/rasmlar/Rasmlar'
import "./Kabinet.css"

function Kabinet() {
  return (
    <div className='kabinet_main'>
        <Navbar/>
        <NavbarBottom/>
        <div className="kabinaet__div">
          <div className="kabinet_desc">
          <h1>Buyurtma holati</h1>
          <p>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>
          <p>Buyurtma raqami*</p>
          <input type="text" />
          <p>Buyurtma berilgandagi telefon raqami *</p>
          <input type="text" />
          <button>Korinish</button>
          </div>
          <div className="kabinet_title">
            <img src="https://asaxiy.uz/custom-assets/images/tracking.svg" alt="" />
          </div>
        </div>
        <Rasmlar/>
        <div className="kotta">
          <div className="kottaa">
            <img src={"https://asaxiy.uz/custom-assets/images/asaxiy-app.png"} alt="" />
          </div>
          <div className="kotaa">
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

export default Kabinet