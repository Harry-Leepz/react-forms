import { useState } from "react";

/*
  useIput custom hook, 
  takes one paramenter (function to validate user input)
  returns object {
  1. entered user input value,
  2. does the input value have an error,
  3. changeHandler function to update state with value,
  4. blueHndler to check if input was touched
  }
*/

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // input validation
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // update state
  const valueChangehandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // check if input is touched
  const valueBlurhandler = (event) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError: hasError,
    valueChangehandler: valueChangehandler,
    valueBlurhandler: valueBlurhandler,
  };
};

export default useInput;
