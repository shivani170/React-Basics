import React , { Component } from 'react';
import Form from './form/Form';
export default class UseForm extends Component{
    render(){
        return(<main className="container">
        <section>
            <article>
                <Form/>
            </article>
        </section>
    </main>);
    }
}