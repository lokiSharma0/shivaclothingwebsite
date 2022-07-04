import React from 'react'

export const Login = () => {

  return (
    <>
    <div className='login'>
      <h2>Log in to your Account</h2>
      <form className='form'>
        <div className='user'>
    <lable>UserName</lable>
    <input type='text'/>
        </div>
        <div className='psd'>
    <lable>Password</lable>
    <input type='password' />
        </div>
      </form>
      <button>Log in</button>
   <p> Do not Have an account?<a href="/regestration">Create an Account Now </a> </p> 
    </div>
    
    </>
  )
}
