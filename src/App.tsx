import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__Selects">
        <select className="App__Select">
          <option>Hound</option>
        </select>
        <select className="App__Select">
          <option>Basset</option>
        </select>
        <select className="App__Select">
          <option>3</option>
        </select>
        <button className="App__Button" disabled={true}>
          View Images
        </button>
      </div>
      <div className="App__Results">
        <div
          className="App__Result"
          style={{
            backgroundImage:
              "url(https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg)",
          }}
        ></div>
        <div
          className="App__Result"
          style={{
            backgroundImage:
              "url(https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg)",
          }}
        ></div>
        <div
          className="App__Result"
          style={{
            backgroundImage:
              "url(https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
