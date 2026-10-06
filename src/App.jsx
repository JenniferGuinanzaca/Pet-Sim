import { useState } from "react";
import AdoptionScreen from "./components/AdoptionScreen";
import "./App.css";

function App() {
  const [isAdopted, setIsAdopted] = useState(false);
  return (
    <>
      {!isAdopted ? (
        <AdoptionScreen onAdopt={() => setIsAdopted(true)} />
      ) : (
        <h1></h1>
      )}
    </>
  );
}
export default App;
