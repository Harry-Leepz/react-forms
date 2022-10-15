import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const isEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.trim().includes("@");

  // custom hook and object destructuring
  const {
    value,
    isValid,
    hasError,
    valueChangehandler,
    valueBlurhandler,
    reset,
  } = useInput(isEmpty);
  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangehandler: lNameValueChangehandler,
    valueBlurhandler: lNameValueBlurhandler,
    reset: lNameReset,
  } = useInput(isEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangehandler: emailChangeHandler,
    valueBlurhandler: emailBlurhandler,
    reset: emailReset,
  } = useInput(isEmail);

  let isFormValid = false;

  if (isValid && lNameIsValid && emailIsValid) {
    isFormValid = true;
  } else {
    isFormValid = false;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    reset();
    lNameReset();
    emailReset();
  };

  const inputCssClasses = hasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={inputCssClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={valueChangehandler}
            onBlur={valueBlurhandler}
            value={value}
          />
          {hasError && <p>Input is not valid</p>}
        </div>
        <div className={inputCssClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            onChange={lNameValueChangehandler}
            onBlur={lNameValueBlurhandler}
            value={lNameValue}
          />
          {lNameHasError && <p>Input is not valid</p>}
        </div>
      </div>
      <div className={inputCssClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurhandler}
          value={emailValue}
        />
        {emailHasError && <p>Input is not valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
