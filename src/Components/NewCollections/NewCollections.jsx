import React from 'react'
import './NewCollections.css'
import NewCollection from '../Assets/NewCollection'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
        {NewCollection.map((item,i)=>{
                return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
