import React from 'react';
import ReactDOM from 'react-dom';
import FormHooks from './Components/HooksForm';
import Form from './Components/form/Form';
import UseForm from './Components/UseForm';
import Button from './Components/jest/button/button';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseForm/>  */}
    {/* <Form/> */}
    {/* <FormHooks/> */}
    {/* <Home /> */}
<Button label={"Click me"}/>
  </React.StrictMode>,

  document.getElementById('root')
);