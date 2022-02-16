type Category = {
  id: number;
  title: string;
};

type Product = {
  index: number;
  id: number;
  categories: number[];
  name: string;
  price: number;
  image: NodeRequire;
};

type Shop = {
  categories: Category[];
  products: Product[];
};

export const Shop: Shop = {
  categories: [
    {
      id: 391403045112,
      title: "All Music",
    },
    {
      id: 391403077880,
      title: "Brass Band",
    },
    {
      id: 391403143416,
      title: "Concert Band",
    },
    {
      id: 391403110648,
      title: "Choir",
    },
    {
      id: 391403176184,
      title: "Recordings",
    },
    {
      id: 391403241720,
      title: "Apparel",
    },
  ],
  products: [
    {
      index: 0,
      id: 7584649216248,
      categories: [391403045112, 391403176184],
      name: "behold, the sonic universe - CD",
      price: 15,
      image: require("../assets/products/behold-the-sonic-universe.png"),
    },
    {
      index: 1,
      id: 7584640827640,
      categories: [391403045112],
      name: "behold, the sonic universe",
      price: 45,
      image: require("../assets/products/behold-the-sonic-universe.png"),
    },
    {
      index: 2,
      id: 7584636502264,
      categories: [391403045112, 391403077880, 391403143416],
      name: "Jenny",
      price: 75,
      image: require("../assets/products/jenny.png"),
    },
    {
      index: 3,
      id: 7584641220856,
      categories: [391403045112],
      name: "Pseudopop in Teal",
      price: 20,
      image: require("../assets/products/pseudopop-in-teal.png"),
    },
    {
      index: 4,
      id: 7584642760952,
      categories: [391403045112, 391403110648],
      name: "See How Low the Moon Hangs",
      price: 3,
      image: require("../assets/products/see-how-low-the-moon-hangs.png"),
    },
    {
      index: 5,
      id: 7584644366584,
      categories: [391403045112, 391403077880, 391403143416],
      name: "to be whole",
      price: 100,
      image: require("../assets/products/to-be-whole.png"),
    },
    {
      index: 6,
      id: 7584646660344,
      categories: [391403045112],
      name: "Ward Lock",
      price: 70,
      image: require("../assets/products/ward-lock.png"),
    },
    {
      index: 7,
      id: 7584648331512,
      categories: [391403045112, 391403110648],
      name: "what counts as silence",
      price: 3,
      image: require("../assets/products/what-counts-as-silence.png"),
    },
  ],
};
