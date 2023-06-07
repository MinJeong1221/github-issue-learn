import React, { forwardRef } from "react";
import cx from "clsx";
import styles from "./TextField.module.css";

export default forwardRef(function TextField(
  { type = "input", name, placeholder, onChange, value, error },
  ref,
) {
  return type === "input" ? (
    <input
      onChange={onChange}
      value={value}
      ref={ref}
      name={name}
      className={cx(styles.input, styles.border, {
        [styles.error]: Boolean(error),
      })}
      type="text"
      placeholder={placeholder}
    />
  ) : (
    <textarea
      onChange={onChange}
      value={value}
      ref={ref}
      name="body"
      className={cx(styles.textarea, styles.input, styles.border, {
        [styles.error]: Boolean(error),
      })}
      placeholder={placeholder}
    ></textarea>
  );
});
