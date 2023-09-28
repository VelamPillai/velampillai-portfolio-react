import React from "react";

const Contact = () => {

  return (
    <div className="w-full h-full relative bg-gradient-to-r from-pink-200 to-[#123456]">

    <div
      id="contact"
        className="max-w-[1040px]  m-auto  md-pl-20 p-4 py-10  text-[#123456] "
    >
        <h1 className="py-4 text-4xl text-center ">Contact</h1>
      <form
        method="POST"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label
            className="uppercase text-sm py-2  "
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border-2 rounded-lg p-3 flex hover-gray-300 "
            type="text"
            name="name"
          />
        </div>
        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label
            className="uppercase text-sm   py-2"
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
          <label className="uppercase text-sm py-2  ">
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
          <button className=" grid  md:grid-row-2 gap-4 w-[50%] py-4  mx-auto mt-4 rounded-lg hover:outline bg-gradient-to-r  from-pink-200 to-[#123456] text-white" type="submit">
          send Message
        </button>
      </form>
      </div>
      </div>
  );
}
export default Contact