import React, { useState } from "react";
import "./main.scss";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="page-container">
      <header>
        <h2 className="title">Our Pricing</h2>

        <div className="pricing-switch">
          <p className="pricing-switch__annually">Annually</p>
          <input
            id="toggle"
            onChange={() => setToggle(!toggle)}
            type="checkbox"
          />
          <label for="toggle"></label>
          <p className="pricing-switch__monthly">Monthly</p>
        </div>
      </header>

      <main>
        <div className="pricing-container">
          <div className="pricing-container__item">
            <h5>Basic</h5>
            <h1 className="price"> {toggle ? "$19.99" : "$199.99"} </h1>

            <ul className="pricing-container__list">
              <li>500 GB Storage</li>
              <li>2 Users Allowed</li>
              <li>Send up to 3 GB</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="pricing-container__item">
            <h5>Professional</h5>
            <h1 className="price"> {toggle ? "$24.99" : "$249.99"} </h1>

            <ul className="pricing-container__list">
              <li>1 TB Storage</li>
              <li>5 Users Allowed</li>
              <li>Send up to 10 GB</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="pricing-container__item">
            <h5>Master</h5>
            <h1 className="price"> {toggle ? "$39.99" : "$399.99"} </h1>
            <ul className="pricing-container__list">
              <li>2 TB Storage</li>
              <li>10 Users Allowed</li>
              <li>Send up to 20 GB</li>
            </ul>
            <button>Learn More</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
