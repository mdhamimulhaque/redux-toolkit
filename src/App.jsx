import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
