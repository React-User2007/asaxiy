import React from 'react'
import { useParams } from "react-router-dom"
import { HOME_DATE } from "../../static"
import Navbar from '../navbar/Navbar'
import NavbarBottom from '../navbar-bottom/NavbarBottom'
import Footer from '../footer/Footer'
// import Swiper from '../swiper/Svipers'
import { BsFacebook , BsTelegram } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import Rasmlar from "../rasmlar/Rasmlar"
import "./UniquePage.css"
function UniquePage() {
    const { id } = useParams()
    const oneItem = HOME_DATE.find((item) => item.id === id)
  return (
    <div>
        <Navbar/>
        <NavbarBottom />
        <div className="Singel__Page-con">
            <div className="singel__page-img">
                <img src={oneItem.url} alt={oneItem.url} />
            </div>
            <div className="singel__page-text">
                <h1>{ oneItem.title.slice(0 , 40) }</h1>
                <del>{ oneItem.price }</del>
                <h2>{ oneItem.price }</h2>
                <h3>{ oneItem.desc }</h3>
                <h3> Holati <span>sotuvda bor</span> </h3>
                <h4> <span className='singel__page-span'>Ulanish :</span> <BsFacebook className='singel__page-svg-1' /> <BsTelegram className='singel__page-svg-2' /> <AiFillTwitterCircle className='singel__page-svg-3' /> <IoLogoWhatsapp className='singel__page-svg-4' /> </h4>
                <div className="singel__page-buttons">
                    <button className='singel_page-btn-1'>Muddatli To'lov</button>
                    <button className='singel_page-btn-2'>Savatchaga Qo'shish</button>
                    <button className='singel_page-btn-3'>Bir klikda olish</button>
                </div>
            </div>
        </div>
        <Rasmlar/>
        <Footer />
    </div>
  )
}

export default UniquePage