import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../component/Card'
import Navbar from '../component/Navbar'
import { getProduct } from '../store/Data/data.action'
import styles from '../styles/Home.module.css'

const Home = () => {
    const dispatch=useDispatch()
    const dataselector= useSelector((state)=>state.data)
    useEffect(()=>{
     dispatch(getProduct());
    },[])
    // console.log(dataselector)
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.innerdiv}>
        {dataselector.data.map((e) => {
          return <ItemCard key={e.id} {...e}  />;
        })}
      </div>
    </div>
  );
}

export default Home
