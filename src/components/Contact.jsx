import React from "react"

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px]  m-auto  md-pl-20 p-4 py-10 bg-gradient-to-r from-cyan-200 to-white"
    >
      <h1 className="py-4 text-4xl text-center text-[#001b5e]">Contact</h1>
      <form action="" method="POST" encType="mutipart/form-data">
        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label className="uppercase text-sm py-2" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 rounded-lg p-3 flex hover-gray-300 "
            type="text"
            name="name"
          />
        </div>
        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label className="uppercase text-sm py-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="border-2 rounded-lg p-3 flex hover-gray-300 "
            type="text"
            name="phone"
          />
        </div>
        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label className="uppercase text-sm py-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex hover-gray-300 "
            type="email"
            name="email"
          />
        </div>
        <div className="grid md:grid-row-2 gap-4 w-[50%] py-2  m-auto">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex hover-gray-300 "
            name="message"
            cols="30"
            rows="10"
            placeholder="Hello from ..."
          ></textarea>
        </div>
      </form>
    </div>
  );
}
export default Contact