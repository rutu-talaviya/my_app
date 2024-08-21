import React from 'react'
import './Css/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

    const {all_product} = useContext (ShopContext);
  
    return (

    <div className='shop-category'>

    <img className='shopcategory-banner' src={props.banner}></img>
    <div className='shopcategory-indexsort'>
      <p>
        <span>Showing 1-12</span>out of 36 roduct
      </p>
      <div className='shopcategory-sort'>
      sort by</div>
    </div>
    <div className='shopctegory-products'>
      {all_product.map((item,i)=>{
        if(props.category===item.category){
            return  <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }
      })}
    </div>
   <div className='shopcategory-loadmore'>
    Explore More
   </div>
    </div>
  )
}

export default ShopCategory
