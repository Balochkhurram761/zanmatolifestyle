  import React, { useEffect, useState } from 'react'
  import { CiUser } from "react-icons/ci";
  import { CiHeart } from "react-icons/ci";
  import { IoBagOutline } from "react-icons/io5";
  import styles from '../../styles/navbar/Navbar.module.css'
  import { Link } from 'react-router-dom';
  import { CiMenuBurger } from "react-icons/ci";
  import MobileNavbar from '../mobileNavbar/MobileNavbar';
import Login from '../login/Login';


  const Navbar = () => {
      const [currentnavbar,setcurrentnavbar]=useState("Home");
            const [navbartoggle,setnavbartoggle]=useState(false)
const [loginToggle,setloginToggle]=useState(false)
      const handlecurrentnavbar=(item)=>{
          setcurrentnavbar(item)
      }

      const handlenavbar=()=>{
          setnavbartoggle(!navbartoggle);
        
      }
      const handlelogintoggle=()=>{
       setloginToggle(!loginToggle)
      }
    
     
    return (
      <div className={styles.Navbar}>
          <div className={styles.menu } onClick={handlenavbar} >
            {navbartoggle ? <CiMenuBurger />  : <CiMenuBurger /> } 


          </div>
          <div className={styles.image}>
              <img src="/AssestImage/logo (3).png" alt="" />
          </div>

          <div className={styles.navlinks}>
              <ul>
                  <li><a href=""  className={currentnavbar==="Home" ? styles.active :""} onClick={()=>handlecurrentnavbar("Home")} >Home</a></li>
                  <li><a href="" className={currentnavbar==="Glasses" ? styles.active :""} onClick={()=>handlecurrentnavbar("Glasses")} >Glasses</a>
                    <ul>
                      <li><a href="">Gents Glasses </a></li>
                      <li><a href="">Ladies Glasses </a></li>

                  </ul>
                  </li>
                  <li><a href=""className={currentnavbar==="Jewellery" ? styles.active :""} onClick={()=>handlecurrentnavbar("Jewellery")} >Jewellery</a>
                  <ul>
                      <li><a href="">Gents  Jewellery </a></li>
                      <li><a href="">Ladies Jewellery </a></li>

                  </ul>
                  </li>
                  <li><a href="" className={currentnavbar==="Services" ? styles.active :""} onClick={()=>handlecurrentnavbar("Contact")} > Services</a></li>
                  <li><Link to="https://wa.me/923001234567" className={currentnavbar==="Contact" ? styles.active :""} onClick={()=>handlecurrentnavbar("Contact")} >  Contact</Link></li>
                  
              </ul>
              
          </div>
          <div className={styles.soicallink}>
              <CiUser onClick={handlelogintoggle} />
            <CiHeart />
            <IoBagOutline />


              </div>
                        {navbartoggle && (

            
            
                  <MobileNavbar onclose={()=>handlenavbar(false)} />
                    

                )}

                
             {loginToggle && (
               <Login closelogin={handlelogintoggle} />
             )}
            

      </div>
    )
  }

  export default Navbar