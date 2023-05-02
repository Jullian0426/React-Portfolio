import React, { useState } from 'react';
import validateEmail from '../utils/helpers';

function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, message, and name
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } else {
            setName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the message is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        function isRequired(variable, fieldName) {
            if (!variable) {
                setErrorMessage(`${fieldName} is required`);
                // We want to exit out of this code block if something is wrong so that the user can correct it
                return;
            }
        }

        isRequired(name, 'Name');
        isRequired(email, 'Email');
        isRequired(message, 'Message');
        alert(`${message}`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setMessage('');
        setName('');
        setEmail('');
    };

    return (
        <form className='container form'>
            <h2>Contact Me</h2>
            <label for="name">Name:</label>
            <div className="input-group mb-3">
                <input
                    value={name}
                    type="text"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Name"
                    name="name"
                />
                {errorMessage === 'Name is required' && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>

            <label for="email">Email:</label>
            <div className="input-group mb-3">
                <input
                    value={email}
                    type="email"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Email"
                    name="email"
                />
                {errorMessage === ('Email is invalid' || 'Email is required') && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>

            <label for="message">Message:</label>
            <div className="input-group">
                <textarea
                    value={message}
                    onChange={handleInputChange}
                    className="form-control"
                    name="message"
                ></textarea>
                {errorMessage === 'Message is required' && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>

            <button type='button' class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
    );
};

export default Form;