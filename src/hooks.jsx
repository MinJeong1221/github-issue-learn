import { useState, useEffect } from "react";
import axios from "axios";
import { GITHUB_API } from "./api";
import { useQuery } from "react-query";

export function useForm({
  initialValuese,
  validate,
  refs,
  onSuccess, //성공했을때
  onErrors, //에러났을때
  onSubmit, //값이 전달될때 어떤 함수/네트워크 호출
}) {
  const [inputValues, setInputValues] = useState(initialValuese);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const errorKeys = Object.keys(validateResult); //[]

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(validateResult[key]);
      // onErrors();
      refs[key].current.focus();
      //ref control
      setIsSubmitting(false);

      return;
    }
    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch (e) {
        // console.log({ e });
        onErrors();
      }
      return;
    }
  }
  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
}

async function getUserInfo() {
  const data = await axios.get(`${GITHUB_API}/user`, {
    headers: {
      Authorization: process.env.REACT_APP_GITHUB_TOKEN,
      "Content-Type": "applications/json",
    },
  });
  return data.data;
}

export function useUser() {
  return useQuery(["userInfo"], () => getUserInfo(), { staleTime: "Infinity" });
}

// 쿼리 인스턴스가 mount
// userInfo라는 쿼리키로 캐싱 => fetch => stale => 인스턴스 unmount
// 불필요한 네이트 콜을 방지할수 있음
