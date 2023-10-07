import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Slider from "./components/slider";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="product/:productId"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
