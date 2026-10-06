
function AdoptionScreen({
  petType,
  setPetType,
  petName,
  setPetName,
  onAdopt,
}) {

    return (
        <main className="adoption-screen">
        <header className="site-header">
            <h1>nook</h1>
        </header>

        <section className="welcome">
           <p className="eyebrow">WELCOME TO NOOK!</p>
           <h2> Choose a companion</h2>
        </section>

        <section className="pet-choices">
            <button className={`pet-card ${petType === "cat" ? "selected" : ""}`} onClick={() => setPetType("cat")}>
            <span className="pet-icon">🐱</span>
            <span className="pet-type">cat</span>
            </button>

            <button className={`pet-card ${petType === "dog" ? "selected" : ""}`} onClick={() => setPetType("dog")}>
            <span className="pet-icon">🐶</span>
            <span className="pet-type">dog</span>
            </button>
        </section>

        <section className="pet-name">
            <label htmlFor="pet-name">Name Your Pet</label>
            <input
                id="pet-name"
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Enter a name"
            />
        </section>

       <button className="adopt-button" disabled={!petType || !petName.trim()} onClick={onAdopt}>
            Adopt {petName || "your pet"}
        </button>
     </main>
    );
}

export default AdoptionScreen;