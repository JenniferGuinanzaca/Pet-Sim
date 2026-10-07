function Header({ coins }) {
  return (
    <header className="sim-header">
      <h1>Nook</h1>
      <span className="coin-count">🪙 {coins}</span>
    </header>
  );
}

export default Header;