const shopItems = [
  {
    id: "treat",
    name: "Treat",
    icon: "🥩",
    price: 5,
    effects: {
      hunger: 2,
      happiness: 5,
      energy: 0,
    },
  },
  {
    id: "toy",
    name: "Toy",
    icon: "🧶",
    price: 15,
    effects: {
      hunger: 0,
      happiness: 15,
      energy: -10,
    },
  },
  {
    id: "bed",
    name: "Bed",
    icon: "🛏️",
    price: 20,
    effects: {
      hunger: 0,
      happiness: 0,
      energy: 20,
    },
  },
];

export default shopItems;