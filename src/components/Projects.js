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
              <a href={item.project_demo}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8333 9.16658L17.6667 2.33325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 5.66675V1.66675H14.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
</a>
              </div></>):(
            <>
            <div className='projectbox-2'>
            <h1>{item.id}</h1>
            <div className='project_name'>{item.project_name}</div>
          <div className='project_des'>{item.project_des}</div>
          <a href={item.project_demo}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8333 9.16658L17.6667 2.33325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 5.66675V1.66675H14.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
</a>
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