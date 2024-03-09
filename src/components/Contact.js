import React from 'react'
import messengerlogo from '../images/messengerlogo.png'
import twitterlogo from '../images/twitterlogo.png'
import fblogo1 from '../images/fblogo1.png'
import maillogo from'../images/maillogo.png'
const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact-1'>
        <div className='contact-1-1'>
          <input type='text' placeholder='your name'/>
          <input type='email' placeholder='email'/>
          <input type='text' placeholder='your website (if you have)'/>
          <textarea placeholder='how can i help you'></textarea>
        </div>
        <div className='contact-1-2'>
          <button type='submit'>Get in Touch</button>
          <div className='fblogo'>
            <img src={fblogo1} alt=''/>
          </div>
          <div className='linkedinlogo'>
            <img src={twitterlogo} alt=''/>
          </div>
          <div className='githublogo'>
            <img src={messengerlogo} alt=''/>
          </div>
          <div className='maillogo'>
            <img src={maillogo} alt=''/>
          </div>
        </div>
      </div>
      <div className='contact-2'>
        <div className='contact-2-1'>Lets Talk For Something Special</div>
        <div className='contact-2-2'>
          I Seek to push the limits of creativity to create high-engaging, user-friendly and memoriable interaction experiences
        </div>
        <div className='contact-2-3'>
          <h3>konnakumarraja097@gmail.com</h3>
          <h3>9390538304</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact