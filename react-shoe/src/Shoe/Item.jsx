import React from 'react'

export default function Item({key,item,handleRemoveList,handleAddToCart}) {
  return (
      <div key={key} className="col-3">
        <img width={200} src={item.image} alt="" />
        <p>{item.name}</p>
        <button onClick={()=>{
            handleAddToCart(item)
        }}>Add</button>
        
            <button onClick={()=>
            {handleRemoveList(item.id)}}>Delete</button>
        
      </div> 

  )
}
  