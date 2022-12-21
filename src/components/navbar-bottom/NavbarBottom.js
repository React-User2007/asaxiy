import React from 'react'
import "./NavbarBottom.css"
import { FaBars } from "react-icons/fa"
import {Link} from "react-router-dom"
function NavbarBottom() {
  return (
    <div className='nav_bottom'>
      <div className="nav_flex">
        <FaBars />
        <p>Все категории</p>
      </div>


      <Link to={"/news"}>Новости</Link>
      <Link to={"/novinka"}>Новинки</Link>
      <Link to={"/skidka"}>Скидки</Link>
      <Link to={"/kitob"}>Книги</Link>
      <Link to={"/telefon"}>Телефоны и гаджеты</Link>
      <Link to={"/televizor"}>Телевизоры</Link>
      <Link to={"/sport"}>Спорт товары</Link>
    </div>
  )
}

export default NavbarBottom