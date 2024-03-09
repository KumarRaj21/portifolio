import React from 'react'
import { edu_data} from './Data'
const Education = () => {
  return (
    <div id='education'>
      <div className='edu-header'>My Education</div>
      <div className='edu-body'>
        {
           edu_data.map((item,index)=>{
            return (
              <div className='edu-card' key={index}>
                <div className='edu-card-head'>{item.name}</div>
                <div className='edu-card-loc'>Location : {item.location}</div>
                <div className='edu-card-duration'>{item.Duration}</div>
                <div className='edu-card-course'>{item.course}</div>
                <div className='edu-card-cgpa'>CGPA : {item.cgpa}</div>
                <div className='edu-card-des'> des : {item.des}</div>
              </div>
            )
           })
        }
      </div>
    </div>
  )
}

export default Education