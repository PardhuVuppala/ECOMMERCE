//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Login.css';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Login() 
{
    
    const [eemail,setPatientUserId]=useState("");
    const [epass, setPatientPassword] = useState("");
    // const [msg, setMessage] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`Patient Email:${eemail}`);
      console.log(`Password:${epass}`);
      sessionStorage.setItem("Usertype", 'USER');
      navigate("/");
        window.location.reload();
    
       
    setPatientUserId('')
    setPatientPassword('')
    
}


    
    return (
            <div className="App123">
            <div className="wrapper">
            <form onSubmit={handleSubmit}>
            <div className="header-text">Login Here</div>
            <h3 style={{textAlign:"center"}}></h3>
            <input type="text" placeholder="Enter your Email id" value={eemail} onChange={(e)=>setPatientUserId(e.target.value)}/>
            <input type="password" placeholder="Enter Your Password" value={epass}
            onChange={(e)=>setPatientPassword(e.target.value)}/>
            <input type="checkbox" />
            <label for="terms"></label><span>Agree with <Link to="/aboutus">terms and conditions</Link><Link to="#">forget password</Link></span>
            <br></br>
          
        
             {/* <button type="submit"  style={{marginLeft:"160px" ,color:"white",borderBlockColor:"aliceblue",backgroundColor:"aliceblue"}}>Login</button> */}
             <input type='submit' className='btn-primary' value="Login"></input>
             </form>
           </div>
           </div>
       )
 }
        


//STEP 3 -- EXPORT IT TO USE IT
export default Login;