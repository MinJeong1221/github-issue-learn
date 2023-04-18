import React from 'react'
import styles from "../css/layout.module.css"
import { ButtonS, ButtonSC} from '../component/Button'

function Header() {
  return (
    <div className={styles.header}>
        <ButtonS>Watch</ButtonS> 
        <ButtonSC >Fork</ButtonSC> 
        <ButtonSC >Star</ButtonSC> 
    </div>
  )
}

export default Header