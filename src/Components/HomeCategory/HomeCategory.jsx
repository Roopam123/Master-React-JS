import React from 'react'
import { Link } from 'react-router-dom';
import one from "../../assets/images/category/01.jpg"
import Two from "../../assets/images/category/02.jpg"
import Three from "../../assets/images/category/03.jpg"
import Four from "../../assets/images/category/04.jpg"
import Five from "../../assets/images/category/05.jpg"
import six from "../../assets/images/category/06.jpg"
import './HomeCategory.css'
const btnText = "Get Started Now";
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";


const categoryList = [
  {
    imgUrl: one,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'DSLR Camera',
  },
  {
    imgUrl: Two,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Shoes',
  },
  {
    imgUrl: Three,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Photography',
  },
  {
    imgUrl: Four,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Formal Dress',
  },
  {
    imgUrl: Five,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    imgUrl: six,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
  },
]

const HomeCategory = () => {
  return (
    <div className='home-category'>
      {/* title */}
      <div className='home-category-top'>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
      
      {/* cards */}
      <div className='home-cateogory-card'>
        {categoryList.map((item,index)=>(
          <Link to="/shop" key={index} className='home-category-hover'>
            {/* Img */}
            <div className='card-img'>
              <img src={item.imgUrl} alt="" />
            </div>
            {/* content */}
            <div className='card-content'>
              <div className='card-icon'><i className={item.iconName}></i></div>
              <Link to="/shop"><span className='item-title'>{item.title}</span></Link>
            </div>
          </Link>
        ))}
      </div>
      <div>
          <Link to="/shop" className="lab-btn" >{btnText}</Link>
        </div>
    </div>
  )
}

export default HomeCategory
