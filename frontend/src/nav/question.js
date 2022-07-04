import React from 'react'
import {data} from '../nav/dataquestion'
import { Allquestion } from './allquestion'


export const Question = () => {
  return (
    <div>
   {data.map((mydata)=>{
    return<Allquestion key={mydata.id}{...mydata}/>
   })}
    </div>
  )

}
