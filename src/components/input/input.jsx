import styled from "./input.module.css";


function Input(props) {
    return (
        <div className={styled.inputWrapper}>
            <label>{props.label}</label>
            <input 
            name={props.name}
            placeholder={props.placeHolder}
            onChange={props.handleChange} 
            type="text" />
        </div>
    );
}


export default Input;