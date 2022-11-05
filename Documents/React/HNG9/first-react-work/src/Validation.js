import React from 'react'

const validation = (values) => {

    let errors = {};

    if(!values.firstName) {
        errors.firstName = "First name is required"
    }
    if(!values.lastName) {
        errors.lastName = "Last name is required"
    }
    if(!values.email) {
        errors.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is Invalid"
    }
    if(!values.message) {
        errors.message = "Message is required"
    }
    else if(values.message.length < 70) {
        errors.message = "Message must be more than 70 characters"
    }
    if(!values.checkBox) {
        errors.checkBox = "Agree to the T & C"
    }
    
  return errors;
}

export default validation;