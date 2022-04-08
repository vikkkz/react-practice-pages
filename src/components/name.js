import { useState } from "react";
import React from "react";

function Event() {
  const [ismouseover, setMouseOver] = useState(false);

  const [HeadingText, setHeadingText] = useState("hello");
  const [name, setName] = useState();

  function Handleheading() {
    setHeadingText("submitted");
  }
  function handlemouseover() {
    setMouseOver(true);
  }
  function handlemouseout() {
    setMouseOver(false);
  }
  // function handlechange(event){
  //   setName(event.target.value)
  // }

  return (
    <div>
      {/* <marquee behaviour="scroll" onMouseOut="this.start();" onMouseOver="this.stop();" direction='left'>this head tag</marquee> */}
      <h1>{HeadingText}</h1>
      <h1>hello{name}</h1>
      <form>
        {/* <input type='text'name='fulname'
  placeholder='enter ur name'
  onChange={handlechange}/> */}
        <button
          onClick={Handleheading}
          onMouseOver={handlemouseover}
          onMouseOut={handlemouseout}
          style={{ backgroundColor: ismouseover ? "red" : "green" }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Event;
