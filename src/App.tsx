import React from "react";
import "./App.scss";
import { Main } from "./components/Main";

function App() {
  if (window.location.host.endsWith("cobular.gay")) {
    document.body.classList.add("gay")
  }

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
