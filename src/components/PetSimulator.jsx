import { useState } from "react";
import Header from "./Header";
import PetDisplay from "./PetDisplay";
import PetStats from "./PetStats";

function PetSimulator({ petType, petName }) {
    const [hunger, setHunger] = useState(100);
    const [energy, setEnergy] = useState(100);
    const [happiness, setHappiness] = useState(100);

  return (
    <main className="pet-simulator">
      <Header />

      <PetDisplay
        petType={petType}
        petName={petName}
      />

      <PetStats 
        hunger={hunger}
        energy={energy}
        happiness={happiness}
      />

      <section className="pet-shop">
        <h2>Shop</h2>
      </section>
    </main>
  );
}

export default PetSimulator;
