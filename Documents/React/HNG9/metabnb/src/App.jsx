import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PlacesToStay from "./components/PlacesToStay";
import "./index.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places-to-stay" element={<PlacesToStay />} />
        </Routes>
      </Router>
  );
}

export default App;
