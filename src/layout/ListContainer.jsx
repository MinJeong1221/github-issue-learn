import React, { Children } from 'react'
import styles from "../css/layout.module.css"
import {ButtonG} from '../component/Button'

function ListContainer(style) {
  return (
    <div className={styles.listContainer}>
      <ButtonG>New Issue</ButtonG>        
    </div>
  )
}



export default ListContainer