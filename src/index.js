import React from 'react';
import ReactDOM from 'react-dom';
import FormHooks from './Components/HooksForm';
import Form from './Components/form/Form';
import UseForm from './Components/UseForm';
import Button from './Components/jest/Button/button';
import Counter from './Components/jest/Counter/Counter';
import { SearchBox } from './Components/jest/SearchBox/Searchbox';

ReactDOM.render(
  <React.StrictMode>
    <SearchBox requestSearch={console.log}/>
    {/* <Counter /> */}
    {/* <UseForm/>  */}
    {/* <Form/> */}
    {/* <FormHooks/> */}
    {/* <Home /> */}
    {/* <Button label={"Click me"}/> */}
  </React.StrictMode>,

  document.getElementById('root')
);