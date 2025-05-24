import React, { useState } from 'react'
import styles from '../../styles/login/Login.module.css'
import { BiShowAlt } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";


const Login = ({closelogin}) => {
    const[isRegister,setisRegister]=useState(false)
    const [Password, setPassword]=useState(false)
    const handlepassword=()=>{
        setPassword(!Password)
    }
    const handleregister=()=>{
        setisRegister(!isRegister)
    }
  return (
    <>
    {isRegister ? (
    <div className={`${styles.form} ${closelogin ? styles.show : styles.hide} `}>
       <div className={styles.close}>
        <IoMdClose onClick={()=>closelogin(false)} />

       </div>
        <h1>Register</h1>
        <form action="">
        <div className={styles.inputs}>
            <div className={styles.input}>
                <label htmlFor="">First Name</label>
                <input type="text"  placeholder='Enter your First Name*' name="" id="" />
            </div>
              <div className={styles.input}>
                <label htmlFor="">Last Name</label>
                <input type="text"  placeholder='Enter your Last Name*' name="" id="" />
            </div>
            <div className={styles.input}>
                <label htmlFor="">Email</label>
                <input type="email"  placeholder='example@gmail.com' name="" id="" />
            </div>
             <div className={styles.input}>
                <label htmlFor="">Password</label>
                <input type={Password ? "": 'password'} placeholder='Enter your password'  name="" id="" />
                <div className={styles.show} onClick={handlepassword}>
                  {Password ?   <BiShowAlt />  :  <BiSolidHide />}
                    </div>
            </div>
             <div className={styles.input}>
                <label htmlFor="">Confirm Password</label>
                <input type={Password ? "": 'password'} placeholder='Enter your Confirm password'  name="" id="" />
                <div className={styles.show} onClick={handlepassword}>
                  {Password ?   <BiShowAlt />  :  <BiSolidHide />}
                    </div>
            </div>
           
            
            <div className={styles.input}><button>Register</button></div>
             <div className={styles.input}  onClick={handleregister}>
                 Already have an account? Login here

            </div>
        </div>
        </form>
      </div>
   
   
       ):(
       <div className={`${styles.form} ${closelogin ? styles.show : styles.hide} `}>
       <div className={styles.close}>
        <IoMdClose onClick={()=>closelogin(false)} />

       </div>
        <h1>Login </h1>
        <form action="">
        <div className={styles.inputs}>
            <div className={styles.input}>
                <label htmlFor="">Email</label>
                <input type="email"  placeholder='example@gmail.com' name="" id="" />
            </div>
             <div className={styles.input}>
                <label htmlFor="">Password</label>
                <input type={Password ? "": 'password'} placeholder='Enter your password'  name="" id="" />
                <div className={styles.show} onClick={handlepassword}>
                  {Password ?   <BiShowAlt />  :  <BiSolidHide />}
                    </div>
            </div>
            <div className={styles.input}>
                <a href="">Forget your password</a>

            </div>
          
            <div className={styles.input}><button>Login</button></div>
             <div className={styles.input}  onClick={handleregister}>
                New customer? Create your account

            </div>
        </div>
        </form>
      </div>
       )}
       </>
  
  )
}

export default Login