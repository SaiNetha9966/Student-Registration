import "./App.css";
import Registration from "./Components/Registration";
import LogIn from "./Components/LogIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route exact path="login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
