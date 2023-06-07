import React, { forwardRef } from "react";
import cx from "clsx";
import styles from "./TextField.module.css";

export default forwardRef(function TextField(
  { type = "input", name, placeholder },
  ref,
) {
  return type === "input" ? (
    <input
      ref={ref}
      name={name}
      className={cx(styles.input, styles.border)}
      type="text"
      placeholder={placeholder}
    />
  ) : (
    <textarea
      ref={ref}
      name="body"
      className={cx(styles.textarea, styles.input, styles.border)}
      placeholder={placeholder}
    ></textarea>
  );
});
