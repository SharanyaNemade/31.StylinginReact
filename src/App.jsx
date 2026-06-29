import { useState } from "react";
import "./App.css";

function App() {

  // const userData = ['John', 'Jane', 'Alice', 'Bob'];

  const userData = [
    { 
      id: 1,
      name: 'John', 
      age: 25, 
      email: 'john@example.com'   
    },

    {
      id: 2,
      name: 'Jane', 
      age: 30, 
      email: 'jane@example.com'
    },

    {
      id: 3,
      name: 'Alice', 
      age: 28, 
      email: 'alice@example.com'
    },

    {
      id: 4,
      name: 'Bob', 
      age: 35, 
      email: 'bob@example.com'
    }
  ];



  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          {
            userData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }  
        </tbody>  
      </table>

    

      <h1>Dummy Data Without Loop</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>25</td>
            <td>anil@test.com</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Anil</td>
            <td>25</td>
            <td>anil@test.com</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Anil</td>
            <td>25</td>
            <td>anil@test.com</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Anil</td>
            <td>25</td>
            <td>anil@test.com</td>
          </tr>

        </tbody>

      </table>
    </div>
  );
}

export default App;

