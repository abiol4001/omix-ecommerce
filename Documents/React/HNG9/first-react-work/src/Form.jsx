import React, { useState } from 'react'
import Contact from './Contact';
import ContactSuccess from './ContactSuccess';

export const Form = () => {
    const [ formIsSubmitted, setFormIsSubmitted ] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    }

  return (
  <div>
    { !formIsSubmitted ? <Contact submitForm={submitForm} /> : <ContactSuccess />}
    </div>
  );
}


export default Form;