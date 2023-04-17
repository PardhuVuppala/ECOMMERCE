import { withStyles } from "@mui/material";
import React from "react";
import './About.css';



const About = () => {
  return (

    <>
     <div> 
      <section className="background firstsection">
        <div className="box-main">
            <div className="firstHalf">
                <p className="text-big">About US</p>
                  
                <p className="text-small">
                    Here you will get to know the team
                    members of our company
                </p>
                <br/>
                <p className="center"><a href="#Order" 
                   style={{color:"white"}}> 
                        Below are the people who
                        works in our company</a>
                </p>
            </div>
        </div>
    </section>
    <section className="service">
        <h2 style={{marginTop:"30px", textAlign:"center"}}> 
            Our Team
        </h2>
    <div id="services">
            <div className="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture goes here"/>
              
                <p className="center">
                    <a href="#xyz" style={{color:"black",fontWeight:"bold", fontFamily:"Langer"}}> 
   
                    </a>
                </p>
                <p style={{fontFamily:"sans-serif"}}>CEO and the Founder</p>
            </div>
            <div className="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture goes here"/>
                  
                <p className="center">
                    <a href="#abc" style={{color:"black",fontWeight:"bold", fontFamily:"Langer"}}>
                        abc
                    </a>
                </p>
                  
                <p style={{fontFamily:"sans-serif"}}>co-founder</p>
                <p style={{fontFamily:"sans-serif"}}>Foodscalablility@gmail.com</p>
            </div>
            <div className="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture goes here"/>
                <br/>
                <p className="center">
                    <a href="#xyz" style={{color:"black",fontWeight:"bold", fontFamily:"Langer"}}>
                        asw
                    </a>
                </p>
                <p  style={{fontFamily:"sans-serif"}}>Food Manager of the company </p>
  
            </div>
        </div>
      
    </section>
    </div>
    </>
  );
};

export default About ;
