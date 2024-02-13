import React from 'react'
import { Link } from 'react-router-dom'
import wolfImg from "../img/worfie.jpg"

function CardItem() {
  return (
    <>
      <li className='cards__item'>
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category="Art">
            <img className="cards__item__img" src={wolfImg} alt="Wolf" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">Put the description here!</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem