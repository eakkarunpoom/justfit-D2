import Footer from "../Footer/Footer";
import NavbarHeader from "../Header/NavbarHeader";
import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Layout = ({children}) => {
    const [user, setUser] = useState();
    const [userLoaded, setUserLoaded] = useState(false)
    useEffect(()=>{
      onAuthStateChanged(auth, (userFirebase) => {
          if (userFirebase) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log('userFirebase', userFirebase)
            const uid = userFirebase.uid;
            // ...
            console.log("uid", uid)
            setUser(userFirebase)
            
          } else {
            // User is signed out
            // ...
            console.log("user is logged out")
          }
          setUserLoaded(true);
        });
       
    }, [])

    return (
        <>
            <NavbarHeader user={user} userLoaded={userLoaded}/>
             {userLoaded ? children : <div style={{height:"500px", backgroundColor:"white"}}>Loading...</div>}
            <Footer />
        </>
    )
}

export default Layout;