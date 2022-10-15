import { useEffect, useState } from "react";

/*
  A form component with a single input, 
  used to test input capturing and validation
*/

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  // boolean values used for validation
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && inputIsTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]);

  // set state to the target value bound to this function
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameinputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  // handler for form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    // reset form input fields using two way data binding
    setEnteredName("");
    setInputIsTouched(false);
  };

  const nameInputCssClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputCssClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameinputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Please input a name!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
