import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import Featured from '../components/Featured'
import WatchList from '../components/WatchList'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home({watchList}) {
  return (
    <div className={styles.container}>
      <Head>
      <title>nt watch shop</title>
        <meta name="description" content="best shop in Ha Noi" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
        <Featured/>
        <WatchList watchList={watchList}/>
      <Footer/>
    </div>
  )
}

export const getServerSideProps = async() =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      watchList:res.data,
    },
  };
};