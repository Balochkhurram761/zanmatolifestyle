import React, { useEffect, useState } from 'react'
import styles from '../../styles/mobileNavbar/MobileNavbar.module.css'
import { IoMdClose } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const MobileNavbar = ({onclose}) => {
  const [dropdown ,setdropdown]=useState({
    glasses:false,
    jewellery:false,
  })
  const handledrop=(menu)=>{
    setdropdown((prev)=>({
      ...prev,
      [menu]:!prev[menu]
    }))
  }
  return (
    <div className= {`${styles.nav} ${onclose ? styles.show : styles.hide} `}>
      <div className={styles.close} onClick={(()=>onclose(false))}>
        <IoMdClose />
      </div>
      <div className={styles.navlinks}>
        <ul>
         <li><div className={styles.drop}><a href="" onClick={()=>onclose(false)}  >Home</a></div></li><hr />
          <li><div className={styles.drop}><a href="" onClick={()=>onclose(false)} >Glasses</a><div className="list" onClick={()=>handledrop('glasses')} > {dropdown.glasses ? <IoIosArrowUp/> :< IoIosArrowDown/>}</div></div>
          {dropdown.glasses && (
           <ul>
                      <li><a href="" onClick={()=>onclose(false)} >Gents Glasses </a></li>
                      <li><a href="" onClick={()=>onclose(false)} >Ladies Glasses </a></li>
          </ul>
            )}</li> <hr />
          <li><div className={styles.drop}><a href=""onClick={()=>onclose(false)} >Jewellery</a>
          <div className="list" onClick={()=>handledrop('jewellery')} > {dropdown.jewellery ? <IoIosArrowUp/> :< IoIosArrowDown/>}</div>
          </div>
          {dropdown.jewellery && (
           <ul>
                      <li><a href="" onClick={()=>onclose(false)} >Gents Jewellery </a></li>
                      <li><a href="" onClick={()=>onclose(false)} >Ladies Jewellery </a></li>
          </ul>
            )}
          </li> <hr />
          <li><div className={styles.drop}><a href=""onClick={()=>onclose(false)} >Servies</a></div></li> <hr />
          <li><div className={styles.drop}><a href=""onClick={()=>onclose(false)} >Contact</a></div></li> <hr />
        </ul>
      </div>
     
      
    </div>
  )
}

export default MobileNavbar