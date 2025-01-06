import './App.css';
import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";


function App() {
  {/* firstName={"hahaho"} lastName={"Kim"} withImg  */}
  const info = {
    firstName: "hahaho",
    lastName: "Kim",
    withImg: true
  }
  return (
    <div className="App">
      <Header title={"Learn React A"} />
      <Welcome {...info} />
    </div>
  );
}

export default App;
