import React, { useState } from 'react';
import "./Banner.css";
import productData from '../../products.json';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import SelectedCategory from '../SelectedCategory/SelectedCategory'

const title = (
  <h2 className='title'>Search Your One From <span>Thousend</span> of Product</h2>
);
const description = "We have the largest collection of the products";
// // const bannerList = [
// //   { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
//   { iconName: "icofont-notification", text: "More then 2000 Marchent" },
//   { iconName: "icofont-globe", text: "Buy Anything Online" }
// ]

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fillterProducts, setFillterProducts] = useState(productData);


  // search Products logic
  const handelSearch = (ele) => {
    const searchItem = ele.target.value;
    setSearchInput(searchItem)

    // filltering products Logic
    const fillterData = productData.filter((product) => product.name.toLowerCase().includes(searchItem.toLowerCase()))
    setFillterProducts(fillterData)
  }
  return (
    <div className='banner'>
      {console.log(productData)}
      <div className='banner-top'>
        <span>{title}</span>
      </div>
      <form>
        <span className='select-category'><SelectedCategory /></span>
        <input type="text" name='search' id='search' placeholder='Search your products' value={searchInput} onChange={handelSearch} />
        <button type="submit" className='submit-btn'><i><IoSearchSharp /></i></button>
      </form>
      <span className='description'>{description}</span>
      <ul>
        {searchInput && fillterProducts.map((product, index) => (
          <li className='li-bottom' key={index}><Link to={`/shop/${product.id}`}>{product.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Banner;
