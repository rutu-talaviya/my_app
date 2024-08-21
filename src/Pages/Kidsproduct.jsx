import React from 'react'
import Item from '../Components/Item/Item'
import kid_banner from '../Components/Assets/kid_banner.jfif'
import Kidsproductdata from '../Components/Assets/Kidsproductdata'

const Menproduct = () => {
    
    return (
    <div className='menproduct'>
    <div className='banner'>
      <img className='banner1' src={kid_banner}></img>
    </div>

    <div className='new-collections'>
      <h1>KIDS COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
        {Kidsproductdata.map((item,i)=>{
                return <Item id={item.id} name={item.name} image={item.image} category={item.Category} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>

      
    </div>
  )
}

export default Menproduct
