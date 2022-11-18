import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../component/Card'
import Loading from '../component/Loading'
import Navbar from '../component/Navbar'
import { getProduct } from '../store/Data/data.action'
import styles from '../styles/Home.module.css'

const Home = () => {
    const radio=["electronics", "jewelery", "men's clothing", "women's clothing"];
    const dispatch=useDispatch()
    const dataselector= useSelector((state)=>state.data)
    const [value,setValue]=useState("")
    useEffect(()=>{
     dispatch(getProduct(value));
    },[value])

  return (
    <div className={styles.home}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "10%", height: "100vh", border: "1px solid black" }}
        >
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column">
              {radio.map((e) => {
                return (
                  <Radio key={e} value={e}>
                    {e}
                  </Radio>
                );
              })}
            </Stack>
          </RadioGroup>
        </div>

        {dataselector.loading ? (
          <Loading />
        ) : (
          <div className={styles.innerdiv}>
            {dataselector.data.map((e) => {
              return <ItemCard key={e.id} {...e} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home
