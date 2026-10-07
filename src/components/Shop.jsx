import shopItems from "../data/shop";
import ShopItem from "./ShopItems";

function Shop({ coins, setCoins, inventory, setInventory }) {
  function buyItem(item) {
        if (coins < item.price) {
        return;
  }

  setCoins(coins - item.price);

  const existingItem = inventory.find(
    (inventoryItem) => inventoryItem.id === item.id
  );

  if (existingItem) {setInventory(inventory.map((inventoryItem) =>
    inventoryItem.id === item.id? { ...inventoryItem, quantity: inventoryItem.quantity + 1 }: inventoryItem));
  } else {
    setInventory([...inventory, { ...item, quantity: 1 }]);
  }
}

  return (
    <section className="pet-shop">
      <h2>Shop</h2>

      <div className="shop-items">
        {shopItems.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
            onBuy={buyItem}
          />
        ))}
      </div>
    </section>
  );
}

export default Shop;