import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import FloatingButtons from "./components/FloatingButtons";
import PerfumeGrid from "./components/PerfumeGrid";
import PerfumeDetails from "./components/PerfumeDetails"
import Checkout from "./components/Checkout";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div className="text-center pt-14 mb-10">
        <div className="inline-block relative">
          <h1 className="text-4xl font-serif font-medium text-gray-900 tracking-wide">
            F R A G A N
          </h1>
          <h2 className="text-xl font-sans font-light text-gray-600 tracking-widest mt-2">
            S O F T W A R E · A S · A · S E R V I C E
          </h2>
          <FloatingButtons />
        </div>
        {/* <div className="w-full h-full overflow-hidden bg-[black] relative video-banner-ratio sm:pb-[57%]">
          <iframe title="video-banner" id="vimeoPlayer" className="absolute inset-0 w-full h-full" src="https://player.vimeo.com/video/935808557?autoplay=1&amp;controls=0&amp;muted=1&amp;loop=1&amp;title=0&amp;portrait=0&amp;pip=0&amp;byline=0&amp;background=1" allow="autoplay; picture-in-picture" data-ready="true"></iframe>
        </div> */}

      </div>
      <div className="w-full mx-auto px-6 sm:px-12 md:px-[6.25rem] bs:px-[15rem] pb-20 drawer-closed">
        <Routes>
          <Route path="/" element={<PerfumeGrid />} />
          <Route path="/perfume/:id" element={<PerfumeDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
