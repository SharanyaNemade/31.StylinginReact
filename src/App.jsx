import { useState } from "react";
import "./App.css";
import ReuseComponent from "./ReuseComponent";

function App() {

  const userData = [
  { id: 1, name: "John", age: 25, email: "john@example.com" },
  { id: 2, name: "Jane", age: 30, email: "jane@example.com" },
  { id: 3, name: "Alice", age: 28, email: "alice@example.com" },
  { id: 4, name: "Bob", age: 35, email: "bob@example.com" }
];


  return (
    <div>
      <h1>Reuse Component In Loop</h1>
      {
         userData.map((user) => (
          <ReuseComponent key={user.id}
              user={user}/>
        ))
      }
    </div>
  );
}

export default App;

