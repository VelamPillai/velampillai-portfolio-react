import React from "react";

const Contact = () => {

  return (
    <div
      id="contact"
      className="max-w-full  m-auto  h-screen md-pl-20 p-4 py-10 bg-gradient-to-r from-cyan-200 to-white text-[#001b5e] "
    >
      <h1 className="py-4 text-4xl text-center text-[#001b5e]">Contact</h1>
      <form
        method="POST"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label
            className="uppercase text-sm py-2 text-[#001b5e] "
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border-2 rounded-lg p-3 flex hover:bg-gray-300 bg-[#f12e2e]"
            type="text"
            name="name"
          />
        </div>
        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label
            className="uppercase text-sm text-[#001b5e]  py-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex hover-gray-300 "
            type="email"
            name="email"
          />
        </div>
        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label className="uppercase text-sm py-2 text-[#001b5e] ">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 flex hover-gray-300 "
            name="message"
            cols="30"
            rows="10"
            placeholder="Hello from ..."
          ></textarea>
        </div>
        <button className="bg-cyan-100 grid  md:grid-row-2 gap-4 w-[50%] py-4  mx-auto mt-4 rounded-lg text-[#001b5e] hover:outline" type="submit">
          send Message
        </button>
      </form>
    </div>
  );
}
export default Contact