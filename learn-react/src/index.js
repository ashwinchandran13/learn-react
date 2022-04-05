import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src={require('./react.png')} width={40} alt="react logo"/>
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));