import shopItems from "../data/shop";
import ShopItem from "./ShopItems";

function Shop({ coins, setCoins }) {
  function buyItem(item) {
    if (coins < item.price) {
      return;
    }

    setCoins(coins - item.price);
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