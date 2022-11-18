import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'

const Home = () => {
    const dispatch=useDispatch()
    const selector= useSelector((state)=>state)
    console.log(selector)
  return (
    <div className={styles.home}>
      Home
    </div>
  )
}

export default Home
