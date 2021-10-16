import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('')
  const [enteredNameTouched,setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim().length !== 0;
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control'

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) =>{
    event.preventDefault()

    setEnteredNameTouched(true)

    if(!enteredNameIsValid){
      return
    }
    setEnteredName('')
    setEnteredNameTouched(false)
  }


  const nameInputBlurHandler = () =>{
    setEnteredNameTouched(true);

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
      </div>
      {nameInputIsValid && <p className='error-text'>Name not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
