import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { AiOutlineMenu, AiFillPhone, AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai';
import { BsSearch ,BsPerson} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import Link from 'next/dist/client/link';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.containerFront}>
        <AiFillPhone className={styles.phone} size = "20px"/>
        <a className={styles.textButtonPhone} href="tel:+84977xxxx">hotline: 0977.xxx.xxx</a>
        <div className={styles.logoNavbarContainer}>
          <Image src="/logo.png" alt="" width="100px" height="100px"/>
        </div>
        <BsSearch className={styles.search} size="16px"/>
        <AiOutlineShoppingCart className={styles.shoppingCart} size="22px"/>
        <Link href="/checkout">
          <div className={styles.counterCart}>{quantity}</div>
        </Link>
        <AiOutlineHeart className={styles.heart} size = "22px"/>
        <BsPerson className={styles.person} size="22px"/>
      </div>
      <div className={styles.containerUnder}>
        <AiOutlineMenu className={styles.buttonMenu}/>
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