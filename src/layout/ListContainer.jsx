import React, { useState } from 'react'
import styles from "./ListContainer.module.css"
import Button from "../components/Button"
import ListItem from '../components/ListItem';
import ListItemLayout from '../components/ListItemLayout';

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
      <ListItemLayout 
        style={{background: 'rgb(246, 248, 250)', padding:'16px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', marginTop: '20px'}} >
        <div className={styles.filterLists}>
          <span>Author</span>
          <span>Lable</span>
          <span>Project</span>
          <span>Milestones</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
      </ListItemLayout>
      <div className={styles.itemContainer}>
        <ListItem/>
      </div>
    </div>
  )
}



export default ListContainer