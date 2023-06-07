import React, { useRef } from "react";
import cx from "clsx";
import styles from "./CreateIssue.module.css";
import TextField from "../components/TextField";
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
          <TextField ref={ref} name="title" placeholder="Titel" />
          <TextField
            type="textarea"
            name="body"
            placeholder="Leace a comment"
          />
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
