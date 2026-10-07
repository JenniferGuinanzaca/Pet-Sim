function Inventory({ inventory, setInventory, hunger,energy,happiness, setHunger, setEnergy, setHappiness }) {

 function useItem(item){
    if (item.id === "treat") {
        setHunger(Math.min(hunger + 2, 100));
        setHappiness(Math.min(happiness + 5, 100));
    }

    if (item.id === "toy") {
        setEnergy(Math.max(energy - 10, 0));
        setHappiness(Math.min(happiness + 5, 100));
    }

    if (item.id === "brush") {
        setHappiness(Math.min(happiness + 5, 100));
    }

    setInventory(inventory.filter((inventoryItem) => inventoryItem !== item));
 }

 if (inventory.length === 0) {
    return (
      <section className="inventory">
        <h2>Inventory</h2>
        <p>Your inventory is empty.</p>
      </section>
    );
  }

  return (
    <section className="inventory">
        <h2>Inventory</h2>

        {inventory.map((item) => (
            <div key={item.id}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
                <button onClick={() => useItem(item)}>Use</button>
            </div>
        ))} 
    </section>
  );
}

export default Inventory;