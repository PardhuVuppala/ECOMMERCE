//STEP 1 -- IMPORT REACT
import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Logout() {

    sessionStorage.removeItem('Usertype')
    sessionStorage.clear()
    // localStorage.removeItem('Usertype')
    const [refreshed, setRefreshed] = useState(false);

    useEffect(() => {
      if (!refreshed) {
        setRefreshed(true);
        window.location.reload();
      }
    }, [refreshed]);
   


    return (<Navigate to="/" />)
 
}

//STEP 3 -- EXPORT IT TO USE IT
export default Logout;