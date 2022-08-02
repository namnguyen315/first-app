import React from 'react'
<<<<<<< HEAD
import styles from "../../styles/Signup.module.css"
import {FaFacebook,FaGoogle,FaApple} from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/dist/client/link'

const signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}></div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="" width="100px" height="100px"/>
        <h1>NT WATCH</h1>
      </div>
      <div className={styles.containerLogin}></div>
      <div className={styles.context}>
        <div className={styles.login}>
          ĐĂNG KÝ
        </div>
        <input type="text" placeholder="  Email/Số điện thoại/Tên đăng nhập"/>
        <input type="text" placeholder="  Tên đăng nhập"/>
        <input type="text" placeholder="  Mật khẩu"/>
        <input type="text" placeholder="  Nhập lại mật khẩu"/>
        <div className={styles.buttonLogin}>
          ĐĂNG KÝ
        </div>
        <div className={styles.lineDecorate}>
          <div className={styles.line}></div>
          <span>Hoặc</span>
          <div className={styles.line}></div>
        </div>
        <div className={styles.otherLogin}>
          <div className={styles.facebookButton}>
            <FaFacebook className={styles.icon}/>
            <span>
              Đăng Ký Bằng Facebook
            </span>
          </div>
          <div className={styles.googleButton}>
            <FaGoogle className={styles.icon}/>
            <span>
              Đăng Ký Bằng Google
            </span>
          </div>
          <div className={styles.appleButton}>
            <FaApple className={styles.icon}/>
            <span>
            Đăng Ký Bằng Apple
            </span>
          </div>
        </div>
        <div className={styles.signUp}>
          <span>Bạn đã có tài khoản?</span>
          <Link href="/buyer/login">
            <a>Đăng nhập</a>
          </Link>
        </div>
      </div>
    </div>
=======

const signup = () => {
  return (
    <div>signup</div>
>>>>>>> 7003008e7012f6eaea45229c20f872cab4c0c3bf
  )
}

export default signup