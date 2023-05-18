import React from "react";
import cx from "clsx";
import styles from "./Button.module.css";

function Button({ children, color }) {
  return (
    <button
      className={cx(styles.button, { [styles.green]: color === "green" })}
    >
      {children}
    </button>
  );
}

export default Button;
