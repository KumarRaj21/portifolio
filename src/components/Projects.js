import React from 'react'
import { projectsdata } from './Data'
const Projects = () => {
  return (
    <div id='projects'>
      <div className='projects-head'> My Projects</div>
      <div className='projects-body'>
      {
        projectsdata.map((item,index)=>{
          return (
            <div className='projectbox' key={index}>
              {item.id%2 === 1 ?(
              <>
              <div className='projectbox-1'>
                <img src={item.project_img} alt=''/>
              </div>
              <div className='projectbox-2'>
                <h1>{item.id}</h1>
                <div className='project_name'>{item.project_name}</div>
              <div className='project_des'>{item.project_des}</div>
              <button><a href={item.project_demo}>demo</a></button>
              </div></>):(
            <>
            <div className='projectbox-2'>
            <h1>{item.id}</h1>
            <div className='project_name'>{item.project_name}</div>
          <div className='project_des'>{item.project_des}</div>
          <button><a href={item.project_demo}>demo</a></button>
          </div>
 <div className='projectbox-1'>
 <img src={item.project_img} alt=''/>
</div>
            </>
            )}</div>
              
          )
        })
      }
      </div>
      </div>
  )
}

export default Projects