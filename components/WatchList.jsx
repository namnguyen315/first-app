import React from 'react'
import styles from '../styles/WatchList.module.css'
import WatchCard from './WatchCard'

const WatchList = ({watchList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST WATCH SHOP IN TOWN</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate, culpa? Perferendis enim expedita repudiandae amet veniam cumque eius dignissimos quae, sequi adipisci.
            Cum, in illo autem reiciendis soluta perferendis dolor.
        </p>
        <div className={styles.wrapper}>
          {watchList.map((watch) => (
            <WatchCard key={watch._id} watch = {watch}/>
        ))}
        </div>
    </div>
  )
}

export default WatchList