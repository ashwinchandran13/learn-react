import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from './data.js';

function App() {
  const cardComponent = data.map((item) => <Card key={item.title} {...item}/>); 
  return (
    <div className="App">
      <Navbar />
      {cardComponent}
    </div>
  );
}

export default App;
