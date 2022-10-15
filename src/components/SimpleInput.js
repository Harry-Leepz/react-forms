import { useEffect, useState } from "react";

import useInput from "../hooks/useInput";

/*
  A form component with a single input, 
  used to test input capturing and validation
*/

const SimpleInput = (props) => {
  const {
    value,
    isValid,
    hasError,
    valueChangehandler,
    valueBlurhandler,
    reset,
  } = useInput((value) => value.trim() !== "");

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (isValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [isValid]);

  // handler for form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    reset();
  };

  const nameInputCssClasses = hasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputCssClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={valueChangehandler}
          onBlur={valueBlurhandler}
          value={value}
        />
        {hasError && <p className='error-text'>Please input a name!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
