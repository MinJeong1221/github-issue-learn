import { useState } from "react";

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
