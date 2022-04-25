import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard classes="App flex justify-between" />}
      />
    </Routes>
  );
}

export default App;
