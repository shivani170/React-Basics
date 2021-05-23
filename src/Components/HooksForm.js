import './form/form.css';
import React, {useState} from 'react';

const FormHooks = () => {

   const [name, setName] = useState("");
   const [password, setPassword] = useState("")
   const register = e => {e.preventDefault();
     console.log({name, password})
   }
    return (
        <form className="form "
            onSubmit= {register}>

            <div className="form-control ">
                <label>Name*:</label></div>
            <input
                value={name}
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                placeholder="Enter name"
                className="form-control--input"
            />
            <div className="form-control ">
                <label >Password*:</label></div>
            <input
                value={password}
                name="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                className="form-control--input"
            />
            <button className="form-control--submit"> Register</button>
        </form>
    )
}
export default FormHooks
