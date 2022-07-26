 
export const  Validation = (people) => {
  
    let error={}
    if(!people.email){
    error.email='email required'
     }else
        if(!/\S+@\S+\.\S+/.test(people.email)){
      error.email='incorrect formet!'
     }
      if(!people.name){
        error.name='Name required!'
     }else
        if(people.name.length>20){
         error.name='length should be less than 20 '
          
     }
      if(!people.age){
        error.age='Age id required!!'
     }else if(people.age<=18 || people.age>=50){
        error.age='you are not permitted'
     }
      if(!people.address){
        error.address='address required!!'
     }
      if(!people.username){
        error.username='username needed!!'
     }
      if(!people.password){
        error.password='password needed!!'
     }else if(people.password.length<5){
        error.password='use a strong password'
     }
      if(!people.rpassword){
        error.rpassword='Enter same password'
     }else if(people.rpassword !==people.password){
        error.rpassword='Password not match'
     }


  return error
  
 
  
}
