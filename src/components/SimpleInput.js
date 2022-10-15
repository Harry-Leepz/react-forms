import { useState } from "react";

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

  // handler for form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
