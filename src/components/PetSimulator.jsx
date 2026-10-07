import { useState } from "react";
import Header from "./Header";
import PetDisplay from "./PetDisplay";
import PetStats from "./PetStats";
import Actions from "./Actions";
import Shop from "./Shop";
import Inventory from "./Inventory";

function PetSimulator({ petType, petName }) {
    const [hunger, setHunger] = useState(35);
    const [energy, setEnergy] = useState(50);
    const [happiness, setHappiness] = useState(60);
    const [coins, setCoins] = useState(50);
    const [inventory, setInventory] = useState([]);

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
            inventory={inventory}
            setInventory={setInventory}
     />
     
     <Inventory 
            inventory={inventory}
            setInventory={setInventory}
            hunger={hunger}
            energy={energy}
            happiness={happiness}
            setHunger={setHunger}
            setEnergy={setEnergy}
            setHappiness={setHappiness}
     />
    </main>
  );
}

export default PetSimulator;
