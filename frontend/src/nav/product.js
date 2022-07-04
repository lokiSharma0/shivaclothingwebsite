import React from 'react'
import { useState ,useEffect} from 'react'
import { Productlisting } from './productlisting';


export const Product = () => {
const[fdata,setFdata]=useState([]);
const getdata=async()=>{
  const data=await(fetch("http://localhost:4000/")) 
  const finaldata=await(data).json();
setFdata(finaldata)

}
useEffect(()=>{
  getdata()
},[]);
getdata();
  return (
    <>
    <section >
      <h2 className='products-title'>Our products</h2>
      {fdata.map((alldata)=>{
        return<Productlisting key={alldata.id}{...alldata}/>
      })}
   
    
    </section>
    <div>

      <p className='footer'>Our membership from has open from today <a href='/regestration'>Be a member Today</a></p>
    </div>
    </>

  )
}
