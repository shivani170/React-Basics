import React from 'react'
import './button.css';
export default function Button({ label }) {
    return (
        <div className={""}>
            <h2 className="my-counter">My Counter</h2>
            <div data-testid="button" className="button-style">
                {label}
            </div>
        </div>
    )
}
