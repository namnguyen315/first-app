import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiOutlineMan,AiOutlineWoman, AiFillPhone, AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai';
import { BsSearch ,BsPerson} from 'react-icons/bs'
import {TiChartBarOutline} from 'react-icons/ti'
import {MdSupportAgent} from 'react-icons/md'
import { useSelector } from 'react-redux';
import Link from 'next/dist/client/link';

const Navbar = () => {
  const [count,setCount] = useState(0);
  const [style,setStyle] = useState(styles.icon);
  const quantity = useSelector((state) => state.cart.quantity);
  const handleArrow = (direction)=>{
    if(direction=="h"){
      setCount(count +1)
    }
  }
const changeStyle = (direction)=>{
  if(direction%2==1){
      setStyle(style = styles.hiden)
  }
  if(direction%2==0){
      setStyle(style = styles.active)
  }
}

  return (
    <div className={styles.container}>
      <div className={styles.containerFront}>
        <div className={styles.frontLeft}>
          <AiFillPhone className={styles.phone} size = "20px"/>
          <a className={styles.textButtonPhone} href="tel:+84977xxxx">hotline: 0977.xxx.xxx</a>
        </div>
        <div className={styles.logoNavbarContainer}>
          <Image src="/logo.png" alt="" width="100px" height="100px"/>
        </div>
        <div className={styles.frontRight}>
          <AiOutlineSearch className={styles.search} size="22px"/>
          <Link href="/checkout">
            <AiOutlineShoppingCart className={styles.shoppingCart} size="22px"/>
          </Link>
          <div className={styles.counterCart}>{quantity}</div>
          <AiOutlineHeart className={styles.heart} size = "22px"/>
          <BsPerson className={styles.person} size="22px"/>
        </div>
      </div>
      <div className={styles.containerUnder}>
        <div className={style}>
          <AiOutlineMenu className={styles.buttonMenu} onClick={()=>handleArrow("h")& changeStyle(count)}/>
          <AiOutlineClose className={styles.buttonMenuClose} onClick={()=>handleArrow("h")& changeStyle(count)}/>
          <div className={styles.menuBar}>
            <li>
              <TiChartBarOutline className={styles.buttonMenuBar}/>
              <a className={styles.text1} href="#">TOP</a></li>
            <li>
              <AiOutlineMan className={styles.buttonMenuBar}/>
              <a className={styles.text1} href="#">NAM</a>
            </li>
            <li>
              <AiOutlineWoman className={styles.buttonMenuBar}/>
              <a className={styles.text1} href="#">NỮ</a>
            </li>
            <li>
              <MdSupportAgent className={styles.buttonMenuBar}/>
              <a className={styles.text1} href="#">HỖ TRỢ</a>
            </li>
          </div>
        </div>
        <div className={styles.buttonTextLeft} >
          <a className={styles.text1} href="#">TOP BÁN CHẠY</a>
          <a className={styles.text1} href="#">THƯƠNG HIỆU</a>
          <a className={styles.text1} href="#">NAM</a>
          <a className={styles.text1} href="#">NỮ</a>
        </div>
        <div className={styles.buttonTextRight}>
          <a className={styles.text1} href="#">ĐÔI</a>
          <a className={styles.text1} href="#">TREO TƯỜNG</a>
          <a className={styles.text1} href="#">SỬA CHỮA</a>
          <a className={styles.text1} href="#">LIÊN HỆ</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar