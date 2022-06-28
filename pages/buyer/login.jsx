import React from 'react'
import styles from "../../styles/Login.module.css"
import {FaFacebook,FaGoogle,FaApple} from "react-icons/fa"



const login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <h1>ĐĂNG NHẬP</h1>
        <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập"/>
        <input type="text" placeholder="Mật khẩu"/>
        <div>
          ĐĂNG NHẬP
        </div>
        <a>Quên mật khẩu</a>
        <p>Hoặc</p>
        <div>
          <div>
            <FaFacebook/>
          </div>
          <div>
            <FaGoogle/>
          </div>
          <div>
            <FaApple/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login