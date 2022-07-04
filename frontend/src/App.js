import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import {Home} from './nav/home'
import {Login} from './nav/login'
import {Product} from './nav/product'
import {Regestration} from './nav/regestration'
import {Errorpage} from './nav/errorpage'
import {Question} from './nav/question'


function App() {
  
  return (
    <header>
      <BrowserRouter>
      <div className='nav-bar'>
      <img src='https://cdn.dribbble.com/users/987878/screenshots/14000171/media/0f00c50f3f0cfe64c956db44c8da4981.jpg?compress=1&resize=320x240&vertical=top' alt=''/>
      <nav>
        <ul className='nav-items'>
       <li><Link to=''>Home</Link></li>
       <li><Link to='/products'>Our products</Link></li> 
        <li> <Link to='/regestration'>Regestration</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/question'>Questions</Link></li>
        </ul>
      </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regestration' element={<Regestration/>}/>
        
        <Route path='/question' element={<Question/>}/>
        <Route path='/*' element={<Errorpage/>}/>
      </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
