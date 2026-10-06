import { useState } from "react";
import AdoptionScreen from "./components/AdoptionScreen";
import PetSimulator from "./components/PetSimulator";
import "./App.css";

function App() {
  const [isAdopted, setIsAdopted] = useState(false);
  const [petType, setPetType] = useState("");
  const [petName, setPetName] = useState("");

  return (
    <>
      {!isAdopted ? (
        <AdoptionScreen
          petType={petType}
          setPetType={setPetType}
          petName={petName}
          setPetName={setPetName}
          onAdopt={() => setIsAdopted(true)}
        />
      ) : (
        <PetSimulator petType={petType} petName={petName} />
      )}
    </>
  );
}

export default App;
