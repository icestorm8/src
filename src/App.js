import "./App.css";
import ApiFoods from "./components/ApiFoods";
import Children from "./components/Children";
import Counter from "./components/Counter";
import Message from "./components/Message";
import Parent from "./components/Parent";
import Value from "./components/Value";

function App() {
  return (
    <div className="container">
      {/* parent and child */}
      <Parent>
        <Children />
      </Parent>
      <hr />
      {/* fetching from api's, useEffect */}
      <ApiFoods />
      <hr />
      {/* getting form values, useState, useRef */}
      <Value />
      {/* props */}
      <hr />
      <Message txt="hello" />
      <Message txt="bye" />
      <hr />
      {/* state, onClick  */}
      <Counter />
    </div>
  );
}

export default App;
