import React from "react";
import cx from "clsx";
import styles from "./CreateIssue.module.css";
import Button from "../components/Button";

function CreateIssue() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <input
          className={cx(styles.input, styles.border)}
          type="text"
          placeholder="Title"
        />
        <textarea
          className={cx(styles.textarea, styles.input, styles.border)}
          placeholder="Leave a comment"
        ></textarea>
        <div className={styles.buttonWrapper}>
          <Button color={"green"}>Submit new issue</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateIssue;
