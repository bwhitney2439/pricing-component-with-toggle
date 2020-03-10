import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";

import "./main.scss";

const App = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 5000 }
  });

  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 }
  });

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

            <div className="price-wrapper">
              {transitions.map(({ item, key, props }) =>
                item ? (
                  <animated.h1 style={props}>$19.99</animated.h1>
                ) : (
                  <animated.h1 style={props}>$199.99</animated.h1>
                )
              )}
            </div>

            <ul className="pricing-container__list">
              <li>500 GB Storage</li>
              <li>2 Users Allowed</li>
              <li>Send up to 3 GB</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="pricing-container__item">
            <h5>Professional</h5>
            <div className="price-wrapper">
              {transitions.map(({ item, key, props }) =>
                item ? (
                  <animated.h1 style={props}>$24.99</animated.h1>
                ) : (
                  <animated.h1 style={props}>$249.99</animated.h1>
                )
              )}
            </div>

            <ul className="pricing-container__list">
              <li>1 TB Storage</li>
              <li>5 Users Allowed</li>
              <li>Send up to 10 GB</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="pricing-container__item">
            <h5>Master</h5>
            <div className="price-wrapper">
              {transitions.map(({ item, key, props }) =>
                item ? (
                  <animated.h1 style={props}>$39.99</animated.h1>
                ) : (
                  <animated.h1 style={props}>$399.99</animated.h1>
                )
              )}
            </div>
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
