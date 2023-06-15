import React, { useContext, useRef } from "react";
import cx from "clsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./CreateIssue.module.css";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useForm } from "../hooks";
import { GITHUB_API } from "../api";
import { UserContext } from "../context/UserContext";

function CreateIssue() {
  const inputRef = useRef();
  const textareaRef = useRef();
  const navigate = useNavigate();
  const data = useContext(UserContext);

  // console.log({ data });

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValuese: { title: "", body: "" },
      onSubmit: async () =>
        await axios.post(
          `${GITHUB_API}/repos/MinJeong1221/github-issue-learn/issues`,
          inputValues,
          {
            headers: {
              Authorization: process.env.REACT_APP_GITHUB_TOKEN,
              "Content-Type": "applications/json",
            },
          },
        ),
      validate,
      onErrors: () => console.log(errors),
      refs: { title: inputRef, body: textareaRef },
      onSuccess: (result) => {
        console.log({ result });
        navigate("/", { replace: true });
      },
    },
  );

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
