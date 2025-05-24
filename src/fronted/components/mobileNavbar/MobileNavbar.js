import React, { useEffect } from 'react'
import styles from '../../styles/mobileNavbar/MobileNavbar.module.css'
import { IoMdClose } from "react-icons/io";

const MobileNavbar = ({onclose}) => {
 
  return (
    <div className= {`${styles.nav} ${onclose ? styles.show : styles.hide} `}>
      <div className={styles.close} onClick={(()=>onclose(false))}>
        <IoMdClose />
      </div>
      <div className={styles.navlinks}>
        <ul>
         <li> <a href="" onClick={()=>onclose(false)}  >Home</a></li><hr />
          <li><a href="" onClick={()=>onclose(false)} >Glasses</a></li> <hr />
          <li><a href=""onClick={()=>onclose(false)} >Jewellery</a></li> <hr />
          <li><a href=""onClick={()=>onclose(false)} >Servies</a></li> <hr />
          <li><a href=""onClick={()=>onclose(false)} >Contact</a></li> <hr />
        </ul>
      </div>
      
    </div>
  )
}

export default MobileNavbar