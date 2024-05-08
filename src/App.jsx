import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Menu } from "./components/MenuComponent/Menu.jsx";
import { Button } from "./components/ButtonComponent/Button.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Menu></Menu>
      <Button></Button>
    </>
  );
}

export default App;
