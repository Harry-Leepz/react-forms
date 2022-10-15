import { useRef, useState } from "react";

/*
  A basic form component used as an example. 
  It is used to show two method of capturing form data,
  1. Using state
  2. Use refs.
*/

const SimpleInput = (props) => {
  // 1. Using state method
  const [enteredName, setEnteredName] = useState("");

  // set state to the target value bound to this function
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // 2. Using refs
  const nameInputRef = useRef();

  // handler for form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("state value", enteredName);

    // get current ref value
    const nameInputRefValue = nameInputRef.current.value;
    console.log("ref value", nameInputRefValue);

    // reset form input fields using two way data binding
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
