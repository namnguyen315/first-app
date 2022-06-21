import React from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react';
import {AiOutlinePlus,AiOutlineMinus,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { BsTelephoneInbound,BsCartCheck } from'react-icons/bs'
import { MdOutlineFavoriteBorder }from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlide';
import { useSelector } from 'react-redux';

const Product = ({watch}) => {
    const heart = useSelector((state) => state.cart.heart);
    const [type, setType] = useState(0)
    const [number, setNumber] = useState( 0 )
    const [style,setStyle] = useState(styles.icon)
    const [count,setCount] = useState(0)
    const [countLike,setCountLike] = useState(1000)
    const dispatch = useDispatch();

    const handleArrow = (direction)=>{
        if(direction=="l"){
            setNumber(number !==0 ? number-1 : 0)
        }
        if(direction=="r"){
            setNumber(number !==0 ? number+1 : 1)
        }
        if(direction=="h"){
            setCount(count +1)
        }
    }
    const handleClick = () =>{
        dispatch(addProduct({...watch}))
    }
    const changeNumberLike = (direction)=>{
        if(direction==styles.icon){
            setCountLike(countLike-1)
        }
        if(direction==styles.icon1){
            setCountLike(countLike+1)
        }
    }
    const changeStyle = (direction)=>{
        if(direction%2==1){
            setStyle(style = styles.icon)
        }
        if(direction%2==0){
            setStyle(style = styles.icon1)
        }
    }
    return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={watch.img} layout="fill" alt=''/>
            </div>
        </div>
        <div className={styles.right}>
            <a className={styles.code}>mã sản phẩm: {watch.code}(đọc mã này cho nhân viên tư vấn)</a>
            <h1 className={styles.title}>{watch.name}</h1>
            <p className={styles.desc}>{watch.desc}</p>
            <span className={styles.price}>price: ${watch.price[type]}</span>
            <h3 className={styles.chose}>Choose the type</h3>
            <div className={styles.number}>
                <div className={styles.minus} onClick={()=>handleArrow("l")}>
                    <AiOutlineMinus size="20px" />
                </div>
                <div className={styles.counterCart}>{number}</div>
                <div className={styles.plus} onClick={()=>handleArrow("r")}>
                    <AiOutlinePlus size="20px"/>
                </div>
            </div>
            <div className={styles.contact}>
                <div className={styles.iconButton}>
                    <AiFillHeart className={style} size="35px" onClick={()=>handleArrow("h")& changeStyle(count)&changeNumberLike(style)}/>
                    <div className={styles.counterLike}>{heart}</div>
                    Yêu thích
                </div>
                <div className={styles.iconButton}>
                    <BsTelephoneInbound className={styles.icon3} size="35px"/>
                    <a href='tel:0847807xxx'>084780XXX</a>
                </div>
                <div className={styles.iconButton}>
                    <BsCartCheck className={styles.icon3} size="35px" onClick={handleClick}/>
                    <a>thêm vào giỏ hàng</a>
                </div>
            </div>
            <div className={styles.buttonPay}>
                <div className={styles.buttonPayment}>
                    <a>THANH TOÁN NGAY</a>
                </div>
                <div className={styles.buttonPayment}>
                    <a>TRẢ GÓP 0%</a>
                </div>
            </div>
            <div className={styles.buttonSupport}>
                <a>NHẬN TƯ VẤN</a>
            </div>
        </div>
    </div>
  )
}
export const getServerSideProps = async({params}) =>{
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return{
      props:{
        watch:res.data,
      },
    };
  };

export default Product;