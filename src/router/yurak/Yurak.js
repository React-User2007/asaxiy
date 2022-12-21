import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/navbar-bottom/NavbarBottom'
import Rasmlar from '../../components/rasmlar/Rasmlar'
import Footer from '../../components/footer/Footer'
import "./Yurak.css"
import {useSelector} from "react-redux"

function Yurak() {
  const yurak = useSelector(y => y)
  console.log(yurak.yurak);
  return (
    <div className='yurak__main'>

        <Navbar/>
        <NavbarBottom/>
        {
          yurak.yurak?.map((item,inx) =>
          <div className="yurak__sevimli">
          <div className="yurak__jujutsu">
          <img src={item.url} alt="" />
          </div>
          <div className="yurak__price">
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
          <div className="three">
            <button className='yurak_savatcha'>Savatchaga qoshish</button>
            <button className='yurak_del'>Ochirish</button>
          </div>
  
        </div> )
        }
     
        <Rasmlar/>
        <Footer/>
    </div>
  )
}

export default Yurak