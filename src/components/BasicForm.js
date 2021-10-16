import Input from './Input/input';
import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim().length !== 0)

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim().length !== 0)


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ?'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ?'form-control invalid' : 'form-control';

  let formIsValid = false
  if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (event) =>{
    event.preventDefault()

    if(!enteredNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid){
      return
    }

    resetNameInput()
    resetLastNameInput()
    resetEmailInput()
  }



  const input = [
    {
      title: 'First Name',
      htmlFor: 'name',
      name: 'name',
      error: 'Name not be empty',
      value: enteredName,
      onChange: nameChangeHandler,
      onBlur: nameInputBlurHandler,
      class: nameInputClasses,
      hasError: nameInputHasError

    },
    {
      title: 'Last Name',
      htmlFor: 'lastName',
      name: 'lastName',
      error: 'Last name not be empty',
      value: enteredLastName,
      onChange: lastNameChangeHandler,
      onBlur: lastNameInputBlurHandler,
      class: lastNameInputClasses,
      hasError: lastNameInputHasError
    },
    {
      title: 'Email',
      htmlFor: 'email',
      name: 'email',
      error: 'Invalid email',
      value: enteredEmail,
      onChange: emailChangeHandler,
      onBlur: emailInputBlurHandler,
      class: emailInputClasses,
      hasError: emailInputHasError
    },
  ]


  return (
    <form onSubmit={formSubmissionHandler}>
        <ul className='control-group'>
          {input.map((el,index) => {
            return <li key={index} className='control-group__item'>
              <Input
                title={el.title}
                htmlFor={el.htmlFor}
                name={el.name}
                error={el.error}
                hasError={el.hasError}
                onChange={el.onChange}
                onBlur={el.onBlur}
                className={el.class}
                value={el.value}
              />
            </li>
          })}
        </ul>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
