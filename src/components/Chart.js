import React from 'react'
import GitHubCalendar from 'react-github-calendar';
const Chart = () => {
  return (
    <div className='chart-container'>
    <div className='chart-head'>Contribution Chart</div>
    <div className='chart-body'>
        <GitHubCalendar username="KumarRaj21"/>
    </div>
     
    </div>
   
  )
}

export default Chart