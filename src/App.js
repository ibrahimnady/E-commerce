import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import Slider from './components/Slider/Slider';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<><Slider /> <ProductList /></>} />
        <Route path='E-commerce/' element={<><Slider /> <ProductList /></>} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>


    </>
  );
}

export default App;
