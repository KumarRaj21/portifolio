import React from 'react'
import {skillsdata} from './Data'
const Skills = () => {
  return (
    <div id='skills'>
        <div className='skills-header'>My Skills</div>
        <div className='skilss-body'>
         {
          skillsdata.map((item,index)=>{
            return (<div className='box' key={index}>
              <div className='boximgdiv'>
                <img src={item.logo} alt=''/>
              </div>
              <h2>{item.lagunage}</h2>
            </div>)
          })
         }
        </div>
    </div>
  )
}

export default Skills