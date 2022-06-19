import React from 'react'
import styles from '../styles/WatchCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const WatchCard = ({watch}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${watch._id}`} passHref>
      <Image src={watch.img} alt ="" width="500" height = "500"/>
      </Link>
      <h1 className={styles.title}>{watch.name}</h1>
      <span className={styles.price}>${watch.price}</span>
      <p className={styles.desc}>{watch.desc}</p>
    </div>
  )
}

export default WatchCard