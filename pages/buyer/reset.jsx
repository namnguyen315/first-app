import React from 'react'
import styles from "../../styles/Reset.module.css"
import {RiArrowGoBackFill} from "react-icons/ri"
import {MdMarkEmailRead} from "react-icons/md"
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

const reset = () => {
    const [email,setEmail] = useState("namnguyen3152001xtnd@gmail.com");
    const [style,setStyle] = useState(styles.hiden);
    const changeStyle = (direction)=>{
        setStyle(style = styles.active)
    }
    return (
        <div className={styles.container}>
      <div className={styles.backgroundImg}></div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="" width="100px" height="100px"/>
        <h1>NT WATCH</h1>
      </div>
      <div className={styles.containerLogin}></div>
      <div className={styles.context}>
        <Link href="/buyer/login">
            <RiArrowGoBackFill className={styles.buttonBack}/>
        </Link>
        <div className={styles.login} onClick = {()=>changeStyle()}>
          ĐẶT LẠI MẬT KHẨU
        </div>
        <span className={style}>
            <MdMarkEmailRead/>
            mã xác minh đã được gửi đến địa chỉ
            {email}
            vui vòng xác minh
        </span>
        <input className={style} type="text" placeholder="  Email/Số điện thoại/Tên đăng nhập"/>
        <div className={styles.buttonLogin}>
          TIẾP THEO
        </div>
      </div>
    </div>
  )
}

export default reset