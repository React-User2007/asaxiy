import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/navbar-bottom/NavbarBottom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Pagination} from "swiper"
import "swiper/css";
import img1 from "../../assets/home__1.webp"
import img2 from "../../assets/home__2.webp"
import img3 from "../../assets/home__3.webp"
import img4 from "../../assets/home__4.webp"
import img5 from "../../assets/home__modal.jpeg"
import { HOME_DATE } from "../../static"
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import Rasmlar from '../../components/rasmlar/Rasmlar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"

function Home() {
  const dispatch = useDispatch()
  return (
    <div className='home__container'>
        <Navbar />
        <NavbarBottom />
        <div className="home__main">
            <Swiper className="mySwiper home__swiper"
            modules={[Autoplay, Pagination]}
            loop={true}
            pagination={true}
            autoplay={true}
            spaceBetween={10}
            slidesPerView={1}>
                <SwiperSlide><img src={img1} alt={img1} /></SwiperSlide>
                <SwiperSlide><img src={img2} alt={img2} /></SwiperSlide>
                <SwiperSlide><img src={img3} alt={img3} /></SwiperSlide>
                <SwiperSlide><img src={img4} alt={img4} /></SwiperSlide>
            </Swiper>
            <div className="home__img">
                <img src={img5} alt={img5} />
            </div>
        </div>

        <div className="hom__div">

          <div className="home__map">
            {
              HOME_DATE?.map( (item , inx ) => <div key={inx} className="home_wrap">
                <div className="home__skidka">
                  <h4>СКИДКА</h4>
                </div>
                <div className="home__icons">
                  <FiShoppingCart />
                  <br />
                  <AiOutlineHeart onClick={() => dispatch({type:"ADD_LOVE", payload:item})}/>
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

        </div>


        <div className="home__vaqt">
          <div className="home__text">
            <h1>Asaxiy kompaniyasi haqida</h1>
            <p>Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.</p>
            <br />
              <div className="home__class">
                <div className="home__box">Bizning qoida</div>
                <div className="home__two">Sizning qoidagiz</div>
              </div>
            <br />

            <p>"Asaxiy Books" MCHJ </p>
            <p>Ro'yxatdan o'tish raqami: 123456</p>
            <p>INN: 305829008</p>
            <p>MCHJ rahbari: Allayev Firuz Abdunasimovich</p>
          </div>
        </div>
        <Rasmlar/>
        <div className="home__link">
          <div className="home__url">
            <img src={"https://asaxiy.uz/custom-assets/images/asaxiy-app.png"} alt="" />
          </div>
          <div className="home__url">
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

export default Home