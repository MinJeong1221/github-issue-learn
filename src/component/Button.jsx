import React from 'react'
import styles from "../css/component.module.css"

export function ButtonG({children}) {
  return (
    <button className={styles.buttonG}>{children}
   </button>
  )
}
export function ButtonS({children}) {
  return (
    <button className={styles.buttonS1}>{children}</button>
  )
}
export function ButtonSC({children}) {
  return (
    <button className={styles.buttonS1}>{children}
    <div className={styles.circle}>5</div></button>
  )
}
