import PerfumeGrid from "./components/PerfumeGrid";
import FloatingButtons from "./components/FloatingButtons";

const App = () => {
  return (
    <>
      <div className="text-center pt-14 mb-10">
        <div className="inline-block relative">
          <h1 className="text-4xl font-serif font-medium text-gray-900 tracking-wide">
            F R A G A N
          </h1>
          <h2 className="text-xl font-sans font-light text-gray-600 tracking-widest mt-2">
            S O F T W A R E · A S · A · S E R V I C E
          </h2>
          <div className="absolute -bottom-2 left-1/4 w-1/2 h-px bg-gradient-to-right from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>
      <PerfumeGrid />
      <FloatingButtons />
    </>
  );
}

export default App;
