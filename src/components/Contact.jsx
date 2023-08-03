import './contact.css'
import bookContact from '../bookContact.png'
import { BsTelephoneFill } from 'react-icons/bs';


function Contact() {
    return (  <div className="contact-container">
    <div>
      <img src={bookContact} alt="" id='contact-img' />
    </div>
    <div className="contact-text">
      <h1 className="contact-h1">Contact Us</h1>
      <p className="contact-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam exercitationem consequuntur, culpa voluptates aspernatur. Reiciendis ut tenetur quisquam placeat dolores mollitia! Repudiandae, at veniam doloribus aliquid non sed molestiae!</p>
      <div style={{display:"inline-block",marginTop:"1vh"}}>
        <BsTelephoneFill className='icon'/>        
      </div>
      <div style={{display:"inline-block",marginLeft:"2vw"}}>
        <h1 >Call Us Anytime</h1>
        <p style={{marginTop:"10px",color:"blue"}} className="contact-p">+91 000 000 0000</p>
      </div>

    </div>
  </div> );
}

export default Contact;