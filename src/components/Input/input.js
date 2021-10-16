import useInput from '../../hooks/use-input';

const Input = (props) =>{

  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.title}</label>
      <input
        type='text'
        id={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      {props.hasError && <p className="error-text">{props.error}</p>}
    </div>
  )
}

export default Input
