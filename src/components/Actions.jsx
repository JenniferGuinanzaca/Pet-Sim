function Actions({ hunger, energy, happiness, setHunger, setEnergy, setHappiness}){

    function feedPet(){
        setHunger(Math.min(hunger + 20, 100));
    }

    function playWithPet(){
        setEnergy(Math.max(energy - 10, 0));
        setHappiness(Math.min(happiness + 20, 100));
    }

    function putToSleep(){
        setEnergy(Math.min(energy + 20, 100));
    }

    return(
        <section className="pet-actions">
            <h2>Actions</h2>
            <button onClick={feedPet}>Feed</button>
            <button onClick={playWithPet}>Play</button>
            <button onClick={putToSleep}>Sleep</button>
        </section>
    )
}

export default Actions;