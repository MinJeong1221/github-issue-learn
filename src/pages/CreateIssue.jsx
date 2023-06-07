import React, { useRef } from "react";
import cx from "clsx";
import styles from "./CreateIssue.module.css";
import Button from "../components/Button";

function CreateIssue() {
  const ref = useRef();

  // console.log({ ref });

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.elements.title.value === "") {
      alert("타이틀을 입력해 주세요");
      ref.current.focus();
    }
    console.log({ e });
  }
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            ref={ref}
            className={cx(styles.input, styles.border)}
            type="text"
            placeholder="Title"
          />
          <textarea
            name="body"
            className={cx(styles.textarea, styles.input, styles.border)}
            placeholder="Leave a comment"
          ></textarea>
          <div className={styles.buttonWrapper}>
            <Button type="submit" color={"green"}>
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateIssue;
