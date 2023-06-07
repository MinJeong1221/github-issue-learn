import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import styles from "./CreateIssue.module.css";
import TextField from "../components/TextField";
import Button from "../components/Button";

function CreateIssue() {
  const inputRef = useRef();
  const textareaRef = useRef();

  const [inputValues, setInputValues] = useState({ title: "", body: "" });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log({ ref });

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const refs = { title: inputRef, body: textareaRef };

    const errorKeys = Object.keys(validateResult); //[]

    //{ title : 'djdjdjdj}

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(validateResult[key]);
      refs[key].current.focus();
      setIsSubmitting(false);

      //ref control
      return;
    }
    if (errorKeys.length === 0) {
      console.log("submit성공");
    }

    // console.log({ e });
  }

  function onChange(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  // useEffect(() => {
  //   console.log({ inputValues });
  // }, [inputValues]);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="Titel"
            value={inputValues.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            type="textarea"
            ref={textareaRef}
            name="body"
            placeholder="Leace a comment"
            value={inputValues.body}
            onChange={onChange}
            error={errors.body}
          />
          <div className={styles.buttonWrapper}>
            <Button type="submit" color={"green"} disabled={isSubmitting}>
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateIssue;

function validate(values) {
  let errors = {};
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." };
  }
  return errors;
}
