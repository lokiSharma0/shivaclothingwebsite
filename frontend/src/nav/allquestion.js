import React from 'react'
import { useState } from 'react'


export const Allquestion = ({id,question,info}) => {
    const[show,setShow]=useState(false)

  return (
<>
<div>
<h2>{question}</h2>
{show && <p>{info}</p>}
<button onClick={()=>{setShow(!show)}}>{show?'hide':'show'}</button>
</div>

</>
  )
}
