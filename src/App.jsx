import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Header from "./components/header";
import Test from "./pages/test";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Product />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
