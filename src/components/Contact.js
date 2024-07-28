import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'
import { toast } from 'react-toastify';
const Contact = () => {
  const [data,setdata] = useState(
    {
      subject :'',
      email:'',
      message:''
    }
  )
  const {subject,email,message} = data

  const changeHandle = (e)=>{
     setdata({...data,[e.target.name]:e.target.value})
  }
 const form = useRef()
  const sendEmail = (e) => {
   
    e.preventDefault();
    emailjs
      .sendForm('service_z4f9pyw', 'template_qnstow9', form.current, {
        publicKey: 'FX1np-8APq7cYt27H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setdata({
        subject:"",
        email:"",
        message:""
      })
      toast.success('Email Sent')
  };
  return (
    <div id='contact'>
      <div className='contact-1'>
        <div className='contact-1-1'>
          <form ref={form} onSubmit={sendEmail} >
          <input type='text' placeholder='subject' name='subject' value={data.subject} onChange={changeHandle} />
          <input type='email' placeholder='email'  name='email' value={data.email}  onChange={changeHandle}/>
<textarea placeholder='how can i help you'  name='message' value={data.message} onChange={changeHandle} ></textarea>
          <button className='contact-1-2-btn' >Get in Touch</button>
          </form>
          
        </div>
      </div>
      <div className='contact-2'>
        <div className='contact-2-1'>Lets Talk For Something Special</div>
        <div className='contact-2-2'>
          I Seek to push the limits of creativity to create high-engaging, user-friendly and memoriable interaction experiences
        </div>
        <div className='contact-2-3'>
          <h3>kumarrajakonna8@gmail.com</h3>
          <h3>9390538304</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact