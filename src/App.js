import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const counter = useSelector((state) => state.counter);
  const randomColor = useSelector((state) => state.colorGen);
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          {" "}
          Counter : <span style={{ color: randomColor }}>{counter}</span>{" "}
        </h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            if (isAuthenticated) dispatch({ type: "RANDOM_COLOR" });
          }}
        >
          {" "}
          Increment{" "}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
            if (isAuthenticated) dispatch({ type: "RANDOM_COLOR" });
          }}
        >
          {" "}
          Decrement{" "}
        </button>
        <Login />
      </header>
    </div>
  );
}

export default App;
