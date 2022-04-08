import React, { useState } from "react";

function Events() {
  const [name, setName] = useState();
  const [textheading, setHeadingText] = useState();

  function handlechange(event) {
    setName(event.target.value);
  }

  function clickchange() {
    setHeadingText(name);
  }

  return (
    <div>
      <h1>hello:{textheading}</h1>
      <form>
        <input
          type="text"
          name="fulname"
          placeholder="enter ur name"
          onChange={handlechange}
        />
        <button onClick={clickchange}>submit</button>
      </form>
    </div>
  );
}

export default Events;
