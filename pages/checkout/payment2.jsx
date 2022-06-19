import React from 'react'
import styles from '../../styles/Payment2.module.css'
import Image from 'next/image';
import { useState } from 'react';

const payment2 = () => {
    const watch = {
        id: 1,
        code:318366,
        img: "/img/download (2).jpg",
        name: "rolex",
        price: [199],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      };
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          Thanh toán
        </div>
        <div className={styles.paymentContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.formInf}>
                        <div className={styles.titleInf}>THÔNG TIN KHÁCH HÀNG</div>
                        <input className={styles.inputInf} type = "text" placeholder='Nhập họ và tên' name="customer_input_name" autoFocus maxLength={"160"}/>
                        <input className={styles.inputInf} type = "text" placeholder='Nhập số điện thoại' name="customer_input_phone" required autoComplete='off' maxLength="10"/>
                        <input className={styles.inputInf} type = "text" placeholder='Nhập địa chỉ' name="customer_input_address" maxLength={"160"}/>
                        <input className={styles.inputInf} type = "text" placeholder='Nhập email' name="customer_input_email" maxLength={"160"}/>
                        <input className={styles.inputInf} type = "text" placeholder='ghi chú' name="ghi_chu" autoFocus maxLength={"190"}/>
                </div>
                <div className={styles.formInf}>
                        <div className={styles.titleInf}>THÔNG TIN ĐƠN HÀNG</div>
                        <div className={styles.paymentRadio} >
                            <input id = "pay1" type="radio" name="payment" value="COD"/>
                            <label htmlFor = "pay1">THANH TOÁN COD</label>
                        </div>
                        <div className={styles.paymentRadio} >
                            <input id = "pay2" type="radio" name="payment" value="ALEPAY"/>
                            <label htmlFor = "pay2">THANH TOÁN ONLINE QUA CỔNG ALEPAY</label>
                        </div>
                        <div className={styles.paymentRadio} >
                            <input id = "pay3" type="radio" name="payment" value="COD"/>
                            <label htmlFor = "pay3">CHUYỂN KHOẢN NGÂN HÀNG</label>
                        </div>
                        
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.poductContainer}>
                    <div className={styles.imgContainer}>
                        <Image src={watch.img} alt="" layout="fill"/>
                    </div>
                    <div className={styles.infProduct}>
                        <a className={styles.code}>mã sản phẩm: {watch.code}</a>
                        <h1 className={styles.titleProduct}>{watch.name}</h1>
                        <p className={styles.desc}>{watch.desc}</p>
                    </div>
                </div>
                <div className={styles.poductContainer}>
                    <div className={styles.imgContainer}>
                        <Image src={watch.img} alt="" layout="fill"/>
                    </div>
                    <div className={styles.infProduct}>
                        <a className={styles.code}>mã sản phẩm: {watch.code}</a>
                        <h1 className={styles.titleProduct}>{watch.name}</h1>
                        <p className={styles.desc}>{watch.desc}</p>
                    </div>
                </div>
                <div className={styles.poductContainer}>
                    <div className={styles.imgContainer}>
                        <Image src={watch.img} alt="" layout="fill"/>
                    </div>
                    <div className={styles.infProduct}>
                        <a className={styles.code}>mã sản phẩm: {watch.code}</a>
                        <h1 className={styles.titleProduct}>{watch.name}</h1>
                        <p className={styles.desc}>{watch.desc}</p>
                    </div>
                </div>
                <div className={styles.discountContainer}>
                    <div className={styles.boxDiscount}>
                        <input className={styles.inputDiscount} type = "text" placeholder="MÃ GIẢM GIÁ" maxLength="120"/>
                    </div>
                    <div className={styles.buttonDiscount}>
                        ÁP DỤNG
                    </div>
                </div>
                <div className={styles.paymentBoxTotal}>
                    <div className={styles.paymentText}>TẠM TÍNH</div>
                    <div className={styles.price}>$597</div>
                </div>
                <div className={styles.paymentFooter}>
                    <div className={styles.paymentTotal}>TỔNG CỘNG</div>
                    <div className={styles.TotalPrice}>$597</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default payment2