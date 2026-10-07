import { useState } from "react";
import Header from "./Header";
import PetDisplay from "./PetDisplay";
import PetStats from "./PetStats";
import Actions from "./Actions";
import Shop from "./Shop";

function PetSimulator({ petType, petName }) {
    const [hunger, setHunger] = useState(100);
    const [energy, setEnergy] = useState(100);
    const [happiness, setHappiness] = useState(100);
    const [coins, setCoins] = useState(100);

  return (
    <main className="pet-simulator">
      <Header
            coins={coins}
      />

      <PetDisplay
            petType={petType}
            petName={petName}
      />

      <PetStats 
            hunger={hunger}
            energy={energy}
            happiness={happiness}
      />

      <Actions 
            hunger={hunger}
            energy={energy}
            happiness={happiness}
            setHunger={setHunger}
            setEnergy={setEnergy}
            setHappiness={setHappiness}
      />
      
     <Shop 
            coins={coins}
            setCoins={setCoins}
     />
     
    </main>
  );
}

export default PetSimulator;
