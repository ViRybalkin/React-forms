import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName,setEnteredName] = useState('')
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched,setEnteredNameTouched] = useState(false)

  const nameChangeHandler = (event) =>{
    setEnteredName(event.target.value)

    if(enteredName.trim().length !== 0){
      setEnteredNameIsValid(true)
      return
    }
  }

  const formSubmissionHandler = (event) =>{
    event.preventDefault()

    setEnteredNameTouched(true)

    if(enteredName.trim().length === 0){
      setEnteredNameIsValid(false)
      return
    }
    const enteredValue = nameInputRef.current.value;
    setEnteredName('')
  }

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

  useEffect(() =>{
    if(enteredNameIsValid){
      console.log('kek');
    }
  },[enteredNameIsValid])

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control'

  const nameInputBlurHandler = () =>{
    setEnteredNameTouched(true);

    if(enteredName.trim().length === 0){
      setEnteredNameIsValid(false)
      return
    }
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
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
