import React from 'react';
import "./contact.css";
import Map from './map.jpg';
function Contact()
{  
    return(
<div className='bg-light'> 
  <div>
  
<div>
  <div >
    <h2 style={{textAlign:"center"}}>Contact Us</h2>
    
  </div>
  <div className="row">
    <div className="column">
    <img src={Map} alt="Photo" style={{width:"100%"}}/>
      
    </div>
    <div className="column">
      <div>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
        <input type="submit" className='btn-primary' value="Submit"/>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
  );
}


export default Contact;