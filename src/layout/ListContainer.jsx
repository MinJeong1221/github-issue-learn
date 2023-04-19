import React, { Children, useEffect, useState } from 'react'
import styles from "./ListContainer.module.css"
import Button from "../components/Button"

function ListContainer() {
  const [inputValue, setInputValue] =  useState('is:pr id:open');

//   useEffect(()=> {
//     console.log({inputValue});
// }, [inputValue]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input 
          className={styles.input} 
          value={inputValue}
          onChange={(e)=> setInputValue(e.target.value)}
        />
        <Button style={{backgroundColor: 'green', color:'#FFF'}}>New Issue</Button>        
      </div>
    </div>
  )
}



export default ListContainer