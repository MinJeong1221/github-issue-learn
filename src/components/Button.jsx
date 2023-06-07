import React from "react";
import cx from "clsx";
import styles from "./Button.module.css";

function Button({ children, color, type = "button", disabled }) {
  return (
    <button
      className={cx(styles.button, { [styles.green]: color === "green" })}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
