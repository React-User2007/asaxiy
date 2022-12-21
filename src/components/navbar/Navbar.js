import React , { useState } from 'react'
import "./navbar.css"
import img1 from "../../assets/nav__logo.svg"
import { HiSearch } from "react-icons/hi"
import { BsCreditCard , BsTruck } from "react-icons/bs"
import { AiOutlineGlobal , AiOutlineShoppingCart , AiOutlineHeart } from "react-icons/ai"
import {CiCircleRemove} from "react-icons/ci"
import { FiUser } from "react-icons/fi"
import {Link} from "react-router-dom"
import {HOME_DATE} from "../../static/index"

function Navbar() {
    const  [locationModal,setLocatioModal] = useState(false)

    const [value , setValue] = useState("")

    let filterDate = HOME_DATE.filter(pro => pro.title.toLowerCase().includes(value.toLowerCase()))
  return (
    <>
        <div className="nav__top">
        <Link to="/">
            <img src={img1} alt={img1} />
        </Link>
        <div className="nav__inp">
            <input value={value} onChange={(e)=> setValue(e.target.value)} type="text" placeholder='Search' />
            <button><HiSearch /> Search</button>
            {
                value.trim().length === 0 ?
                <></> :
                <div className="search__result">
                    <p>Qidiruv natichalari: {filterDate.length}</p>
                    {
                        filterDate?.slice(0,4)?.map((item,inx)=> <Link to={`/UnuquePage/${item.id}`}
                        onClick={()=> setValue("")}
                        key={inx} >
                            <img src={item.url} width={60} alt="" />
                            <span>{item.title}</span>
                            <hr />
                        </Link>)
                    }
                    {
                        filterDate.length === 0 ? <p>Hech narsa topilmadi</p> : <></>
                    }
                </div>
            }
        </div>
        <Link to="/carta" className="nav__card">
            <BsCreditCard />
            <p>To'lov</p>
        </Link>
        <Link to="/trek" className="nav__truc">
            <BsTruck />
            <p>Trek</p>
        </Link>
        <div className="nav__global">
            <AiOutlineGlobal />
            <p>Ozbekcha</p>
        </div>
        <div className="nav__cart">
            <AiOutlineShoppingCart />
            <p>Savatcha</p>
        </div>
        <Link to="/yurak" className="nav__heart">
            <AiOutlineHeart />
            <p>Sevimlilar</p>
        </Link>
        <div className="nav__user" onClick={() => setLocatioModal(true)}>
            <FiUser />
            <p>Kabinet</p>
        </div>
        </div>
    {
                    locationModal ?  
                    <div className="navbar__desc">
                        <div className="navbar_sazuxon">
                            <h2>Kirish yoki shaxsiy kabinet yaratish</h2>
                            <hr />
                            <p>Telefon</p>
                            <input type="text"placeholder='+998(__)___-__-__' />
                            <button>Faollashtirish kodi olish</button>
                            
                        </div>
                        <div className="navbar__team">
                        <CiCircleRemove onClick={()=> setLocatioModal(false)}/>
                        <div className="two__div">
                            <div className="nav__box-one">
                            <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                                <div className="nav__box-text">
                                <h3>Endi bozorga borishga hojat yo'q</h3>
                                <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
                                </div>
                            </div>
                            <div className="nav__box-two">
                            <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                                <div className="nav__box-text">
                                <h3>Tez yetkazib berish</h3>
                                <p>Bizning xizmatimiz sizni ajablantiradi</p>
                                </div>
                            </div>
                            <div className="nav__box-three">
                                <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                                <div className="nav__box-text">
                                <h3>Siz uchun qulayliklar</h3>
                                <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
                                </div>
                            </div>
                            <div className="nav__box-four">
                                <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                                <div className="nav__box-text">
                                <h3>Bo'lib to'lash</h3>
                                <p>12 yoki 18 oy davomida oldindan to'lov yo'q</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div> : <></>
                }
    </>
  )
}

export default Navbar