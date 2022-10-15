import { useState } from "react";

/*
  A form component with a single input, 
  used to test input capturing and validation
*/

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputIsValid, setinputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  // set state to the target value bound to this function
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // form input validation
    if (enteredName.trim() !== "") {
      setinputIsValid(true);
    }
  };

  const nameinputBlurHandler = (event) => {
    setInputIsTouched(true);
    // form input validation
    if (enteredName.trim() === "") {
      setinputIsValid(false);
    }
  };

  // handler for form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setInputIsTouched(true);
    // form input validation
    if (enteredName.trim() === "") {
      setinputIsValid(false);
      return;
    }
    setinputIsValid(true);
    console.log("state value", enteredName);
    // reset form input fields using two way data binding
    setEnteredName("");
  };

  const nameInputIsInvalid = !inputIsValid && inputIsTouched;

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
