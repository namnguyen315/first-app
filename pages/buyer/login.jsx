import React from 'react'
import { useRef } from 'react'
import styles from "../../styles/Login.module.css"
import {FaFacebook,FaGoogle,FaApple} from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/link';


const login = () => {
  const email = useRef();
  const password = useRef();
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(email.current.value)
    console.log(password.current.value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}></div>
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/logo.png" alt="" width="100px" height="100px"/>
          <h1>NT WATCH</h1>
        </div>
      </Link>
      <div className={styles.containerLogin}></div>
      <div className={styles.context}>
        <div className={styles.login}>
          ĐĂNG NHẬP
        </div>
        <form onSubmit={handleClick}>

        <input
          type="email" 
          required
          placeholder="  Email/Số điện thoại/Tên đăng nhập"
          ref={email}
        />
        <input
          type="password"
          required placeholder="  Mật khẩu" 
          minLength="6"
          ref={password}
          />
        <button className={styles.buttonLogin}>
          ĐĂNG NHẬP
        </button>
          </form>
        <Link href="/buyer/reset">
          <a>Quên mật khẩu?</a>
        </Link>
        <div className={styles.lineDecorate}>
          <div className={styles.line}></div>
          <span>Hoặc</span>
          <div className={styles.line}></div>
        </div>
        <div className={styles.otherLogin}>
          <div className={styles.facebookButton}>
            <FaFacebook className={styles.icon}/>
            <span>
              Đăng Nhập Bằng Facebook
            </span>
          </div>
          <div className={styles.googleButton}>
            <FaGoogle className={styles.icon}/>
            <span>
              Đăng Nhập Bằng Google
            </span>
          </div>
          <div className={styles.appleButton}>
            <FaApple className={styles.icon}/>
            <span>
            Đăng Nhập Bằng Apple
            </span>
          </div>
        </div>
        <div className={styles.signUp}>
          <span>Bạn mới biết đến NT Watch?</span>
          <Link href="/buyer/signup">
            <a>Đăng ký</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default login