import './App.css';
import Header from './Components/Header'; 
import Product from './Components/Product';
import OtherProducts from './Components/OtherProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <OtherProducts/>
      <Footer/>
    </div>

  );
}

export default App;
