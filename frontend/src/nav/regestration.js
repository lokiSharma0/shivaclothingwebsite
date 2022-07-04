import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Validation } from '../nav/validation';




export const Regestration = () => {
  const nav=useNavigate();
  const[error,setError]=useState("")
  const[show ,setShow]=useState('')
  const[people,setPeople]=useState({
email:"",
name:"",
age:"",
address:"",
username:"",
password:"",
rpassword:"",

});
const[list,setList]=useState([])
const handelinputs=(e)=>{
    const names=e.target.name
    const val=e.target.value
    setPeople({...people,[names]:val})
    
  }
  const handelsubmit=(e)=>{
  
    if(Validation){

      setError(Validation(people))
      setPeople({email:"",name:"",age:"",address:"",username:"",password:"",rpassword:""})
      const num={...people,id:new Date().getTime().toString()}
      setList(...list,num)
     
    }

  
      
    
   
  }
  const option=()=>{
    setShow(!show)
  }
  return (
    <>
    <div className='textbox'>
      <h2>Regestration Form</h2>
      <div className='inputbox'>
      <input type="text"  
      placeholder="Email" 
      name='email'
      value={people.email}
      onChange={handelinputs}
      />
      {error.email &&<p className='errors'>{error.email}</p>}
      
     
      </div>
      <div className='inputbox'>
      <input type="text" 
       placeholder="Name" 
       name='name'
       value={people.name}
       onChange={handelinputs}
       required/>
       {error.name &&<p className='errors'>{error.name}</p>}
      </div>
      <div className='inputbox'>
        <input 
         placeholder='Address'
         name='address'
         value={people.address}
         onChange={handelinputs}
          required/>
            {error.address &&<p className='errors'>{error.address}</p>}
      </div>
      <div className='inputbox'>
        <input type='number'
         placeholder='Age' 
         name='age'
         value={people.age}
         onChange={handelinputs}
         required/>
           {error.age &&<p className='errors'>{error.age}</p>}
      </div>
      <div className='inputbox'>
        <input type='text'
         placeholder='User Name'
         name='username'
         value={people.username}
         onChange={handelinputs}
          required/>
          {error.username &&<p className='errors'>{error.username}</p>}
      </div>
      <div className='inputbox'>
        <input type='password'
         placeholder='Password'
         name='password'
         value={people.password}s
         onChange={handelinputs}
          required/>
          {error.password &&<p className='errors'>{error.password}</p>}
      </div>
      <div className='parentDiv'>
        <input type={show?'text':'password'}
         placeholder='Re-Enter Password'
         name='rpassword'
         value={people.rpassword}
         onChange={handelinputs}

          required/>
          <button className='btnChild' onClick={option}>{show?'hide':'show'}</button>
          {error.rpassword &&<p className='errors'>{error.rpassword}</p>}
      </div>
      <div className='inputbox'>
    <button  onClick={handelsubmit }>Register</button>
      </div>
    
 
    </div>

      <footer className='footer'>
      <p >Already a member? <a href='/login'>Login to see Discounts</a></p>
      <button  onClick={()=>{nav('/')}}>Back to Home </button>
      
      </footer>
    </>
    
  
    
  )
}
