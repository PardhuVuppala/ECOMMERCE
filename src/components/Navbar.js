import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  let usertp = sessionStorage.getItem('Usertype')
  if(usertp==='USER')
  {
    return(
      <>
       <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
            <h2 >
              ECOMMERCE
            </h2>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li>
          </Link>
          <Link to={"/About"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              About
            </li>
          </Link>
          <Link to={"/Contact"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Contact Us
            </li>
          </Link>
        
          <Link to={"/Log"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
        Logout            </li>
          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
              
            </div>
          </Link>
        </div>
      </nav>
      </>
    )
  }
  else{
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
            <h2 >
              ECOMMERCE
            </h2>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li>
          </Link>
          <Link to={"/About"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              About
            </li>
          </Link>
          <Link to={"/Contact"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Contact Us
            </li>
          </Link>
          <Link to={"/Login"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Login
            </li>
          </Link>
          <Link to={"/Reg"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Registration
            </li>
          </Link>
         

           
           
        </div>
      </nav>
    </>
  );
              }
};

export default Navbar;
