/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styles from '../styles/CheckOut.module.css'
import Image from 'next/image';
import {AiOutlinePlus,AiOutlineMinus,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useState } from 'react';

const cart = () => {
  const [number, setNumber] = useState ( 1 )
  const [type, setType] = useState ( 0 ) 
  const watch = {
    id: 1,
    code:318366,
    img: "/img/download (2).jpg",
    name: "rolex",
    price: [199],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  };
  const handleArrow = (direction)=>{
    if(direction=="l"){
        setNumber(number !==0 ? number-1 : 0)
    }
    if(direction=="r"){
        setNumber(number !==0 ? number+1 : 1)
    }
  }
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          Giỏ hàng
        </div>
        <div className={styles.cartHead}>
          <span>Tên sản phẩm</span>
          <span>Thông tin sản phẩm</span>
          <span>Số lượng</span>
          <span>Giá</span>
          <span>Thành tiền</span>
        </div>
        <div className={styles.cartProducct}>
          <span className={styles.imgContainer}>
            <Image src={watch.img} alt="" layout="fill"/>
          </span>
          <span className={styles.infProduct}>
            <a className={styles.code}>mã sản phẩm: {watch.code}</a>
            <h1 className={styles.titleProduct}>{watch.name}</h1>
            <p className={styles.desc}>{watch.desc}</p>
          </span>
          <span className={styles.buttonQuantity}>
            <div className={styles.minus} onClick={()=>handleArrow("l")}>
              <AiOutlineMinus size="20px" />
            </div>
              <div className={styles.counterCart}>{number}</div>
              <div className={styles.plus} onClick={()=>handleArrow("r")}>
                <AiOutlinePlus size="20px"/>
              </div>
          </span>
          <span className={styles.price}>
            ${watch.price[type]}
          </span>
          <span className={styles.totalPrice}>
            ${number*watch.price[type]}
          </span>
        </div>
        <div className={styles.cartProducct}>
          <span className={styles.imgContainer}>
            <Image src={watch.img} alt="" layout="fill"/>
          </span>
          <span className={styles.infProduct}>
            <a className={styles.code}>mã sản phẩm: {watch.code}</a>
            <h1 className={styles.titleProduct}>{watch.name}</h1>
            <p className={styles.desc}>{watch.desc}</p>
          </span>
          <span className={styles.buttonQuantity}>
            <div className={styles.minus} onClick={()=>handleArrow("l")}>
              <AiOutlineMinus size="20px" />
            </div>
              <div className={styles.counterCart}>{number}</div>
              <div className={styles.plus} onClick={()=>handleArrow("r")}>
                <AiOutlinePlus size="20px"/>
              </div>
          </span>
          <span className={styles.price}>
            ${watch.price[type]}
          </span>
          <span className={styles.totalPrice}>
            ${number*watch.price[type]}
          </span>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.totalCart}>
            <div>Tổng cộng: </div>
            <div>$199</div>
          </div>
          <div className={styles.buttonPayment}>
            THANH TOÁN
          </div>
        </div>  
    </div>
    )
}

export default cart