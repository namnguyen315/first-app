import   React,{ useState } from 'react'
import styles from '../styles/Featured.module.css'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import Image from 'next/image'

const Featured = () => {
    const [index, setIndex] = useState( 0 )
    const images = [
        "/img/feature1.jpg",
        "/img/feature2.jpg",
        "/img/feature3.jpg",
    ];
    const handleArrow = (direction)=>{
        if(direction=="l"){
            setIndex(index !==0 ? index-1 : 2)
        }
        if(direction=="r"){
            setIndex(index !==2 ? index+1 : 0)
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((img, i) => (
            <div className={styles.imgContainer}  key={i}>
                <Image src={img} alt='' layout='fill' objectFit='fill'/>
            </div>
        ))}
        </div>
        <div className={styles.arrowContainer}>
            <div className={styles.arrowBackground}>
                <IoIosArrowBack className={styles.arrowButtonLeft} size="100px" onClick={()=>handleArrow("l")}/>
            </div>
            <div className={styles.arrowBackground}>
                <IoIosArrowForward className={styles.arrowButtonRight} size="100px" onClick={()=>handleArrow("r")}/>
            </div>
        </div>
    </div>
  )
}

export default Featured