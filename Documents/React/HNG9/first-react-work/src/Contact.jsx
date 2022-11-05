import React, { useState, useEffect } from 'react'
import "./index.css"
import { Footer } from './Footer';
import validation from './Validation'

function Contact({submitForm}) {

  const name = "Oyewale Abdullah";
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    checkBox: false
  })

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    console.log({[e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(values))
    setDataIsCorrect(true)
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true)
      
    }

  }, [errors])

  return (
    <div className="w-[100%] h-screen md:px-[100px] px-2 pt-[30px]">
      <div className="py-8 px-3 max-w-[700px] mx-auto">
        <h1 className="text-[34px] font-bold font-[inter] mb-8">Contact Me</h1>
        <p className="text-[15px] text-gray-500 mb-9">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form>
          <div className="md:flex w-[100%] gap-[20px] mb-4">
            <div className="flex flex-col flex-auto mb-4">
              <label
                className="text-gray-700 text-[13px] font-[500]"
                htmlFor="fName"
              >
                First name
              </label>
              <input
                type="text"
                className="border-solid border-[1px] border-[#D0D5DD] rounded-md h-[40px] pl-3 placeholder:text-gray-400 placeholder:text-[14px]"
                placeholder="Enter your first name"
                name="firstName"
                id="first_name"
                value={values.firstName}
                onChange={handleChange}
                required
                minLength={4}
              />
              {errors.firstName && (
                <p className="m-0 flex text-rose-500 text-[12px] pl-3">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="flex flex-col flex-auto">
              <label
                className="text-gray-700 text-[13px] font-[500]"
                htmlFor="lName"
              >
                Last name
              </label>
              <input
                type="text"
                className="border-solid border-[1px] border-[#D0D5DD] rounded-md h-[40px] pl-3 placeholder:text-gray-400 placeholder:text-[14px]"
                placeholder="Enter your last name"
                name="lastName"
                id="last_name"
                value={values.lastName}
                onChange={handleChange}
                required
                minLength={4}
              />
              {errors.lastName && (
                <p className="flex text-rose-500 text-[12px] pl-3">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-[13px] font-[500]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="border-solid border-[1px] border-[#D0D5DD] rounded-md h-[40px] pl-3 placeholder:text-gray-400 placeholder:text-[14px]"
              placeholder="youremail@email.com"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="flex text-rose-500 text-[12px] pl-3">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <label
              className="text-gray-700 text-[13px] font-[500]"
              htmlFor="lName"
            >
              Message
            </label>
            <textarea
              className="border-solid border-[1px] border-[#D0D5DD] rounded-mdh-[130px] pl-3 placeholder:text-gray-400 placeholder:text-[14px]"
              name="message"
              value={values.message}
              onChange={handleChange}
              id="message"
              cols="10"
              rows="6"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
              minLength={70}
            ></textarea>
            {errors.message && (
              <p className=" m-0 flex text-rose-500 text-[12px] pl-3">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex items-start gap-3 mt-6 ">
            <div>
              <input
                type="checkbox"
                name="checkBox"
                id=""
                value={values.checkBox}
                className="mt-1"
                required
              />
            </div>
            <p className="text-[14px] text-gray-500 leading-5">
              You agree to providing your data to <b>{name}</b> who may contact
              you.
            </p>
          </div>
          <button
            onClick={handleSubmit}
            id="btn__submit"
            className="bg-[#1570EF] text-slate-200 text-[13] mt-8 w-[100%] text-center py-2 rounded-md"
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact