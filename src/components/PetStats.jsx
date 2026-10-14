function PetStats({ hunger, energy, happiness }) {
  const stats=[
    {name: "Hunger", value: hunger},
    {name: "Energy", value: energy},
    {name: "Happiness", value: happiness}
  ];

  return(
    <section className="pet-stats">
       <h2>Stats</h2>
       
      {stats.map((stat)=>(
        <div className="stat" key={stat.name}>
          <div className="stat-label">
            <span>{stat.name}</span>
            <span>{stat.value}</span>
          </div>

          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${stat.value}%` }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PetStats;
