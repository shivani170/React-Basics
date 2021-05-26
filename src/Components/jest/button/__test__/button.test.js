import React from 'react';
import ReactDom from 'react-dom';
import Button from './../button';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button />, div)
})

it("renders button correctly", () => {
    const { getByTestId} = render(<Button label="Click me"/>)
    expect(getByTestId('button')).toHaveTextContent("Click me")
})

it("renders button save correctly", () => {
    const { getByTestId} = render(<Button label="Save"/>)
    expect(getByTestId('button')).toHaveTextContent("Save")
})

// it("matches snapshot", ()=>{
//     const tree = renderer.create(<Button  label="Please Save"/>).toJSON()
//     expect(tree).toMatchSnapshot()
// })