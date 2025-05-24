import React from 'react'
import styles from '../../styles/banner/Banner.module.css'
const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.img}>
            <img src="/AssestImage/jewellery.jpg" alt="" />
            <img src="/AssestImage/jewellery2.jpg" alt="" />

        </div>
        <div className={styles.overlay}>
        <div className={styles.cardbody}>
            <h1><span> Welcome To </span> <br /> Zanmato  LifeStyle</h1>
             <h2>New Collection Jewellery 
             
             </h2>
             <div className={styles.btn}><p><a href="">Shop Now! </a></p></div>
             
        </div>
     </div>
    </div>
  )
}

export default Banner