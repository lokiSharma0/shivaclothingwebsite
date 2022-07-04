import React from 'react'
import img2 from '../images/img2.png'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'


export const Home = () => {
  return (
    <main >
    
    <div className='container'>
    <img className='img' src={img2} alt="" />
      <h4><a href='./products'>Man'products</a></h4>

      <p>Designed for the jet-setter in mind, our shirt is the ideal blend of comfort and style.<br></br> Built for the man who’s in demand, this classic design will keep you looking presentable on the go, with a gentle fabric for all-day comfort.<br></br> Because you won’t perform at your best if you’re irritated by your clothing.<br></br> Our shirt is a sleek take on a well-loved classic featuring a tried-and-tested spread collar and a slim fit styling.</p>
     
    </div>
    <div className='container'>
    <img className='img' src={img3} alt="" />
    <h4><a href='./products'>Sleepwear</a></h4>
      <p>Getting a full 8-hours can feel near-impossible. From comfort to warmth, what you wear in<br></br>bed is essential for improving your quality of sleep. With a silky fabric and elegant, airy fit, our sleepwear gives you space to breathe.<br></br> Our superior comfort puts you on the right track for incredible sleep. <br></br>Emphasizing your shape in all the right places, with our sleepwear, you don’t have to sacrifice style for comfort – to us, it’s the same thing.</p>
    </div>
    <div className='container'>
    <img className='img' src={img4} alt="" />
      <h4><a href='./products'>Shoes</a></h4>
      <p>Shoes are the ultimate addition to your look. Without stealing the show, this pair can give you the presence you need.<br></br> With a mid-rise platform heel and commanding pointed toe, this shoe allows you to stand upright, projecting confidence.<br></br>
         Everyone knows posture is essential to your image –<br></br> and this heel gives you the proper support to be seen.
       stark contrast of a sleek, black toe and white upper allows this shoe to <br></br>be worn with almost anything from the office and beyond.</p>
    </div>
    <div className='container'>
    <img className='img' src={img5} alt="" />
    <h4><a href='./products'>Evening Dress</a></h4>
     <p>Evening events are prime time for fashion. You look your best when you feel your best, and our dress can inspire confidence in anyone.<br></br> We’ll put you at the center of the action without upstaging anyone. Classy and understated, our dress ensures you feel at your best<br></br> – ready to show off and turn some heads. Made from premium silk, the delicate and flowing construction gives you space to move freely without compromising on elegance.</p>
    </div>
    </main>
  )
}
