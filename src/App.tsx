import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PerfumeGrid from "./components/PerfumeGrid";
import PerfumeDetails from "./components/PerfumeDetails"
import Checkout from "./components/Checkout";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-full mx-auto px-6 sm:px-12 md:px-[6.25rem] bs:px-[15rem] pb-20 drawer-closed">
        <Routes>
          <Route path="/" element={<PerfumeGrid />} />
          <Route path="/perfume/:id" element={<PerfumeDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<p className="p-8 text-center">Page not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
