import "./App.css";
import PhoneDetails from "./components/PhoneDetails";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div>
        <PhoneList />
      </div>
      <div>
        <PhoneDetails />
      </div>
    </div>
  );
}

export default App;
