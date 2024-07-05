import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SliderSelect/>
      <TenureSelect/>
      <Result/>
    </div>
  );
}

export default App;
