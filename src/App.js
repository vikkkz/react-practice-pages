import "./styles.css";
import Event from "./components/name";
import Events from "./components/new";
// import Previous from "./components/Prevent";
import Namechange from "./components/Previous";
import Both from "./components/Operator";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Event />
      <Events />
      {/* <Previous /> */}
      <Namechange />
      <Both />
    </div>
  );
}
