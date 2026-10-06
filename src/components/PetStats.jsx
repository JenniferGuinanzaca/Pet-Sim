
function PetStats({ hunger, energy, happiness }){
    return(
        <section className="pet-stats">
            <h2>Stats</h2>
            <p>Hunger: {hunger}</p>
            <p>Energy: {energy}</p>
            <p>Happiness: {happiness}</p>
        </section>
    );
}

export default PetStats;