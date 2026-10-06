function petDisplay ({petType, petName}){
    return (
        <section className="pet-area">
            <span className="pet-icon">
                {petType === "cat" ? "🐱" : "🐶"}
            </span>

            <h2>{petName}</h2>
            <p>{petType}</p>
        </section>
    );
}

export default petDisplay;