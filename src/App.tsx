import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import type { RootState } from "./store";
import { useSelector } from "react-redux";
import PerfumeGrid from "./features/perfumes/PerfumeGrid";
import PerfumeDetails from "./pages/PerfumeDetails"
import Checkout from "./pages/Checkout";
import Register from "./features/auth/RegisterForm";
import Profile from "./pages/Profile";
import Header from "./components/Header";

const App = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => Boolean(state.auth.user)
  );
  return (
    <BrowserRouter>
      <Header />
      <div className="w-full mx-auto px-6 sm:px-12 md:px-[6.25rem] bs:px-[15rem] pb-20 drawer-closed">
        <Routes>
          <Route path="/" element={<PerfumeGrid />} />
          <Route path="/perfume/:id" element={<PerfumeDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
          <Route path="*" element={<p className="p-8 text-center">Page not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
