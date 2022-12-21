import React from 'react'
import "./Footer.css"
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail , AiFillYoutube , AiOutlineWifi, AiFillInstagram  } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { FaFacebookF , FaTelegramPlane } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer__main'>
        <div className="footer__top">
            <div className="footer__one">
                <div className="footer__title">
                    <p>Endi bozorga borishga hojat </p>
                    <span>Bizda qulay narxlar va uyga yerkazib berish mavjud</span>
                </div>
            </div>
            <div className="footer__two">
                <div className="footer__title">
                    <p>Endi bozorga borishga hojat </p>
                    <span>Bizni xizmatlarimiz sizni ajablantiradi</span>
                </div>
            </div>
            <div className="footer__three">

                <div className="footer__title">
                    <p>Siz uchun qulayliklar</p>
                    <span>Nosizlik yuzga kelganda tez rasmiylashtirish va qytarish kavolati</span>
                </div>
            </div>
            <div className="footer__">

                <div className="footer__title">
                    <p>Bo'lib boshlash</p>
                    <span>3 , 6 , 9 va 12 oy davomida oldindan to'lavsiz</span>
                </div>
            </div>
        </div>
        <div className="footer__sana">
            <div className="footer__malumot">
                <h3>Ma'lmotlar</h3>
                <p>Omamaviy ofera ( Foydalanuvcha bitmi )</p>
                <p>Muddatli to'lav asosida sotib olishning umumiy qoidalari</p>
                <p>Muddatli to'lav sharti</p>
                <p>Tovarlarni yetkazib berish va to'lav turlari </p>
                <p>Buyurtmani bekor qilish va tovarni qatarish</p>
                <p>Biz haqimizda</p>
            </div>
            <div className="footer__contact">
                <h3>Biz bilan aloqa</h3>
                <p> <BsTelephone /> +998 71 200 01 05 </p>
                <p> <AiOutlineMail /> info @asxiy.uz </p>
                <p> <GoLocation /> Chilonzor 3 </p>
            </div>
            <div className="footer__social">
                <h3> Biz ichtimoiy tar,oqlar: </h3>
                <p> <FaFacebookF/> <FaTelegramPlane /> <AiFillInstagram /> <AiFillYoutube/> <AiOutlineWifi /></p>
            </div>
        </div>
        <div className="footer__Payment">
            <div className="footer__pay">
            <h2>To'lov turlari:</h2>
            </div>
        </div>
        <div className="footer__bottom">
            <p>2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</p>
        </div>
    </div>
  )
}

export default Footer