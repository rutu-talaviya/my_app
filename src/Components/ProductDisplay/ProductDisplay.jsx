import React from 'react'
import '../../Components/ProductDisplay/ProductDisplay.css'
import star_icon from '../Assets/star_icon.jfif'


const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className='productdisplay'>
    <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt=''></img>
            <img src={product.image} alt=''></img>
            <img src={product.image} alt=''></img>
            <img src={product.image} alt=''></img>
        </div>
        <div className='prductdisplay-img'>
            <img className='productdisplay-main-img' src={product.image}/>
        </div>
    </div>
    <div className='productdisplay-right'>
    <h1>{product.name}</h1>
    <div className='productdisplay-right-stars'>
       <img src={star_icon} alt=''/>
       <p>(122)</p>
    </div>
    <div className='productdisplay-right-prices'>
      <div className='productdisplay-right-price-old'>${product.old_price}</div>
      <div className='productdisplay-right-price-new'>${product.new_price}</div>
    </div>
    <div className='productdisplay-right-description'>
      A lightweight ,usually knitted,pullover shirt ,close-fiting and white a round nexkline and short sleeves,worn as an undershirt or outer garment.
    </div>
    <div className='productdisplay-right-size'>
      <h1>select size</h1>
      <div className='productdisplay-right-sizes'>
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
      </div>
      <button>ADD TO CART</button>
      <p className='productdisplay-right-category'>  <span>Category :</span>Women ,T-shirt , Crop top </p>
      <p className='productdisplay-right-category'>  <span>Tags :</span>Morden ,Latest </p>
    </div>
    </div>
      
    </div>
  )
}

export default ProductDisplay
