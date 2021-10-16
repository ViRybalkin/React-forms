import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('')
  const [enteredEmail,setEnteredEmail] = useState('')

  const [enteredNameTouched,setEnteredNameTouched] = useState(false)
  const [enteredEmailTouched,setEnteredEmailTouched] = useState(false)


  const enteredNameIsValid = enteredName.trim().length !== 0;
  const enteredEmailIsValid = enteredEmail.includes('@')

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputIsValid ?'form-control invalid' : 'form-control';

  let formIsValid = false

    if(enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true
    }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const EmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }


  const formSubmissionHandler = (event) =>{
    event.preventDefault()

    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if(!enteredNameIsValid && !enteredEmailIsValid){
      return
    }

    setEnteredName('')
    setEnteredEmail('')

    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }


  const nameInputBlurHandler = () =>{
    setEnteredNameTouched(true);
  }

  const EmailInputBlurHandler = () =>{
    setEnteredEmailTouched(true);
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      {nameInputIsValid  && <p className='error-text'>Name not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onChange={EmailChangeHandler}
          onBlur={EmailInputBlurHandler}
        />
      {emailInputIsValid && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
