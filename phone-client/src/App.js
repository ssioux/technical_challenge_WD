import { Route, Routes } from "react-router-dom";
import "./App.css";

import PhoneDetails from "./components/PhoneDetails";
import PhoneList from "./components/PhoneList";

import PrePage from "./components/PrePage";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div>
    <PhoneList />

      </div>

    
      <Routes>
        <Route path="/" element={<PrePage />} />
        <Route path="/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
