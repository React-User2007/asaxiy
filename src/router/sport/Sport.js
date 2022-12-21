import React from 'react'
import Footer from '../../components/footer/Footer'
import NavbarBottom from '../../components/navbar-bottom/NavbarBottom'
import Navbar from '../../components/navbar/Navbar'
import Rasmlar from '../../components/rasmlar/Rasmlar'
import {Link} from "react-router-dom"
import { SPORT_DATA } from "../../static"
import { FiShoppingCart } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"
import "./Sport.css"
function Sport() {
  return (
    <div className='home_container'>
     <Navbar/>
     <NavbarBottom/>
     <div className="home__map">
            {
              SPORT_DATA?.map( (item , inx ) => <div key={inx} className="home_wrap">
                <div className="home__skidka">
                  <h4>СКИДКА</h4>
                </div>
                <div className="home__icons">
                  <FiShoppingCart />
                  <br />
                </div>
                <img src={item.url} alt={item.url} />
                <Link to={`/UniquePage/${item.id}`}>{item.title}</Link>
                <div className="home__icon">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
                <h4>{item.price}</h4>
                <p>{item.desc}</p>
                <div className="home__buttons">
                  <button className='home__ross'>Рассрочка</button>
                  <button className='home__click'>Купит в 1 клик</button>
                </div>
            </div> )
            }
        </div>
        <Rasmlar/>
        <Footer/>
    </div>
  )
}

export default Sport