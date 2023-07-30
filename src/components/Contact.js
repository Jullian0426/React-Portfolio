import React, { useState } from 'react';
import validateEmail from '../utils/helpers';
import emailjs from 'emailjs-com';

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
        if (inputType === 'Email') {
            setEmail(inputValue);
        } else if (inputType === 'Message') {
            setMessage(inputValue);
        } else {
            setName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Check for errors first
        if (!validateEmail(email) || !name || !email || !message) {
            alert('Submission failed. Please try again.')
            return;
        }
        
        setErrorMessage('');

        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, { name, email, message }, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message was sent successfully');
                setMessage('');
                setName('');
                setEmail('');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later');
            });
    };


    // Error handling when losing focus
    const handleInputBlur = (event) => {
        if (!event.target.value) {
            setErrorMessage(`${event.target.name} is required`);
        }
    }

    // Email validation when focus is lost
    const handleInputBlurEmail = (event) => {
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
        }
    }

    // Display Contact content to the page with appropriate props and functionality
    return (
        <form className='content form'>
            <h1>Contact Me</h1>
            <label htmlFor="Name">Name:</label>
            <div className="input-group mb-3">
                <input
                    id="input"
                    value={name}
                    type="text"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Name"
                    name="Name"
                    onBlur={handleInputBlur}
                />
                {errorMessage === 'Name is required' && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>

            <label htmlFor="Email">Email:</label>
            <div className="input-group mb-3">
                <input
                    id="input"
                    value={email}
                    type="email"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                    onBlur={handleInputBlurEmail}
                />
                {errorMessage === ('Email is invalid' || 'Email is required') && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>

            <label htmlFor="Message">Message:</label>
            <div className="input-group">
                <textarea
                    id="input"
                    value={message}
                    onChange={handleInputChange}
                    className="form-control"
                    name="Message"
                    onBlur={handleInputBlur}
                ></textarea>
                {errorMessage === 'Message is required' && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>

            <button type='button' className="btn btn-outline-light my-2" onClick={handleFormSubmit}>Submit</button>
        </form>
    );
};

export default Form;