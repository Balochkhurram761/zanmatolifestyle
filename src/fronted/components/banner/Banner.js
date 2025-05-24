import React from 'react'
import styles from '../../styles/banner/Banner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {  Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../arrayfolder/BannerArray';
const Banner = () => {
  return (

     <Swiper
        spaceBetween={30}
        centeredSlides={true}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        {banner1.map((item)=>{
            return(
        <SwiperSlide>
 
            <div className={styles.banner}>
       

        
        <div className={styles.img}>
            <img src={item.img1} alt="" />
            <img src={item.img2} alt="" />

        </div>
        <div className={styles.overlay}>
        <div className={styles.cardbody}>
            <h1><span> {item.heading1}</span> <br /> {item.heading2}</h1>
             <h2>{item.heading3} 
            
             </h2>
             <div className={styles.btn}><p><a href="">Shop Now! </a></p></div>
             
        </div>
     </div>
    
    </div>
      
      
        </SwiperSlide>
         )
        })}
      
      </Swiper>
    
  )
}

export default Banner