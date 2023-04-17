import React from "react";
import './Registration.css';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";


function Registration()
   {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/")
    }


    return(
        <div onSubmit={handleSubmit}>
             <div className="container" >
    <h1 style={{textAlign:"center"}}>Register</h1>
    <p style={{textAlign:"center"}}>Please fill in this form to create an account.</p>


    <label for="email" style={{display:"flex", justifyContent:"center"}} ><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw" style={{display:"flex", justifyContent:"center"}} ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat" style={{display:"flex", justifyContent:"center"}} ><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
     <div  style={{textAlign:"center"}}> 
    <button type="submit" className='btn-primary' value="Submit"><Link to={"/"}>Login</Link></button>
    </div>
  </div>
      <br/>
  <div style={{textAlign:"center"}}>
    <p>Already have an account? <Link to={"/Login"}>Click Here</Link>.</p>
  </div>
        </div>
    )
}
export default Registration;