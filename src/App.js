import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <TextForm />
      </div>
    </div>
  );
}

export default App;
