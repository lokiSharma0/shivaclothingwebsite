import React from 'react'
import { useState } from 'react'

export const Productlisting = ({id,image,price,item,info}) => {
    const[detail,setDetails]=useState(false)
   
  return (
   <>
    <main className='items' >
        <article key={id}>

        <img  src={image}alt=''/>
        <div className='item-info'>
      
            <h4>{item}</h4>
            <h4 className='price'> ${price}</h4>

        </div>
        <div className='item-text'>

        {detail &&  <p>{info}</p>}
        </div>
      
        <button onClick={()=>{setDetails(!detail)}}>{detail?'hide':'Show'}</button>
        </article>
        </main>
  
   </>
  )
}
