import React, { useState } from 'react'

import styles from './Tabs.module.css'
import cx from 'clsx'

const tabList = ['Code', 'Issues', 'Pull requests', 'Actions', 'Project', 'Wiki', 'Security', 'Insights', 'Setting']

function Tabs({title, number}) {
  const [selectedTapIdx, setSelectedTapIdx] = useState(0)
  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab
          key={`${idx}`} 
          title={tab} 
          onClick={()=> setSelectedTapIdx(idx)} 
          selected ={selectedTapIdx ===idx}
        />
      ))}
    </ul>
  )
}
function Tab({title, selected, onClick, number}) {
  return (
    <li>
      <button onClick={onClick} className={cx(styles.tab, {[styles.selected]: selected})}>
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  )
}

export default Tabs