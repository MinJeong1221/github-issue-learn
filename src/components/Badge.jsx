import React from "react";
import styles from "./Badge.module.css";

function Badge({ name, color }) {
  return (
    <span className={styles.badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  );
}

export default Badge;
