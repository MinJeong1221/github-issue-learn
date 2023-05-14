import React from "react";
import styles from "./ListItemLayout.module.css";

export default function ListItemLayout({ children, style }) {
  return (
    <div className={styles.wrapper} style={style}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />

      {children}
    </div>
  );
}
