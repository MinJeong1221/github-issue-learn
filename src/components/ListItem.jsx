import React from 'react'
import styles from './ListItem.module.css'
import ListItemLayout from './ListItemLayout'

export default function ListItem({checked, onChangeCheckBox, onClickTitle}) {
  return (
    <ListItemLayout>
      <div>
        <div role='button' className={styles.title} onClick={onClickTitle} >
          Issue Example
        </div>
        <div className={styles.description}> # Description</div>
      </div>
    </ListItemLayout>
  );
}

