import React from 'react'
import styles from './ListItem.module.css'
import ListItemLayout from './ListItemLayout'
import Badge from './Badge';

export default function ListItem({checked, onChangeCheckBox, onClickTitle, badges}) {
  return (
    <ListItemLayout>
      <div>
        <div role='button' className={styles.title} onClick={onClickTitle} >
          Issue Example
          {badges && badges.map((badgeProps, idx) => <Badge key={idx} {...badgeProps}/>)}
        </div>
        <div className={styles.description}> # Description</div>
      </div>
    </ListItemLayout>
  );
}

