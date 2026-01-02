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
          <FloatingButtons />
        </div>
      </div>
      <div className="w-full mx-auto px-6 sm:px-12 md:px-[6.25rem] bs:px-[15rem] pb-20 drawer-closed">
        <PerfumeGrid />
      </div>
    </>
  );
}

export default App;
