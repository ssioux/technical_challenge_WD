import { Route, Routes } from "react-router-dom";
import "./App.css";

import PhoneDetails from "./components/PhoneDetails";
import PhoneList from "./components/PhoneList";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
  
  
     <div>
      <PhoneList />
      </div>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<PhoneDetails />} />

      </Routes>
     
    </div>
  );
}

export default App;
