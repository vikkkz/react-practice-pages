import React,{useState} from 'react'

function Friendship() {
  const [name,setName]=useState("vikas")

  function Change(){
    setName("submit")
      }
  return(<div>
  <h1>hello:{name}</h1>
  <button onClick={Change}>click</button>
  </div>)
  
}

export default Friendship 