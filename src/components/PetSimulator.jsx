import Header from "./Header";
import PetDisplay from "./PetDisplay";

function PetSimulator({ petType, petName }) {
  return (
    <main className="pet-simulator">
      <Header />

      <PetDisplay
        petType={petType}
        petName={petName}
      />

      <section className="pet-stats">
        <h2>Stats</h2>
      </section>

      <section className="pet-shop">
        <h2>Shop</h2>
      </section>
    </main>
  );
}

export default PetSimulator;
