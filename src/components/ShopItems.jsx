function ShopItems({ item, onBuy }) {
  return (
    <article className="shop-item">
      <span className="shop-item-icon">{item.icon}</span>

      <h3>{item.name}</h3>

      <p>{item.price} coins</p>
    
      <button onClick={() => onBuy(item)}> Buy </button>
    </article>
  );
}

export default ShopItems;
