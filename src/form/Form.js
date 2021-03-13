import React from 'react';
import './form.css';
import useForm from '../utils/useForm';

const Form = () => {
   const [values, handleChange] = useForm();

    const register = e => {
        e.preventDefault();
        console.log(values)
    }
    return (
        <form className="form "
            onSubmit= {register}>

            <div className="form-control ">
                <label>Name*:</label></div>
            <input
                value={values.name || ""}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter name"
                className="form-control--input"
            />
            <div className="form-control ">
                <label >Password*:</label></div>
            <input
                value={values.password || ""}
                name="password"
                type="text"
                onChange={handleChange}
                placeholder="Enter password"
                className="form-control--input"
            />
            <button className="form-control--submit"> Register</button>
        </form>
    )
}
export default Form