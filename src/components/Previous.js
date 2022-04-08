import React, { useState } from "react";

function Namechange() {
  const [name, setName] = useState({
    fname: "",
    lname: ""
  });
  function Handlechange(event) {
    const inputValue = event.target.inputValue;
    const inputName = event.target.Namechange;
    setName((preValue) => {
      if (inputName === "fname") {
        return {
          fname: inputValue,
          lname: preValue.lname
        };
      } else {
        return {
          fname: preValue.fname,
          lname: inputValue
        };
      }
    });
  }
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        name="fname"
        placeholder="enter ur fulname"
        onChange={Handlechange}
      />
      <input
        type="text"
        name="lname"
        placeholder="enter ur lastname"
        onChange={Handlechange}
      />
    </div>
  );
}

export default Namechange;
