export const groupNames = [
  "Popular Items",
  "Offers",
  "Picked for you",
  "NEW",
  "Specials",
];

// Generate random food images
const getRandomFoodImage = () => {
  const imageId = Math.floor(Math.random() * 20) + 1;
  return `https://source.unsplash.com/300x200/?food,asian,noodles&sig=${imageId}`;
};

export const mockData = [
  // Popular Items
  {
    id: 1,
    title: "Signature Noodles",
    price: 18.95,
    description:
      "Our famous egg noodles with vegetables and your choice of protein",
    rating: { percentage: 94, count: 45 },
    calories: "1850 kJ",
    image: getRandomFoodImage(),
    group: "Popular Items",
  },
  {
    id: 2,
    title: "Pad Thai",
    price: 19.95,
    description:
      "Rice noodles with egg, bean sprouts, peanuts and tamarind sauce",
    rating: { percentage: 88, count: 32 },
    calories: "1950 kJ",
    image: getRandomFoodImage(),
    group: "Popular Items",
  },
  {
    id: 3,
    title: "Honey Chicken",
    price: 17.95,
    description: "Crispy chicken pieces coated in our special honey sauce",
    rating: { percentage: 91, count: 38 },
    calories: "2200 kJ",
    image: getRandomFoodImage(),
    group: "Popular Items",
  },
  {
    id: 4,
    title: "Beef & Black Bean",
    price: 18.95,
    description: "Tender beef strips with vegetables in black bean sauce",
    rating: { percentage: 86, count: 28 },
    calories: "1750 kJ",
    image: getRandomFoodImage(),
    group: "Popular Items",
  },

  // Offers
  {
    id: 5,
    title: "Family Feast",
    price: 49.95,
    description: "4 mains, 2 sides and 2 drinks. Perfect for sharing!",
    rating: { percentage: 95, count: 52 },
    image: getRandomFoodImage(),
    group: "Offers",
  },
  {
    id: 6,
    title: "Lunch Special",
    price: 15.95,
    description:
      "Any small wok dish with a spring roll and drink. Available 11am-3pm",
    rating: { percentage: 89, count: 34 },
    image: getRandomFoodImage(),
    group: "Offers",
  },
  {
    id: 7,
    title: "Student Meal",
    price: 14.95,
    description:
      "Show your student ID and get a main dish with rice for a special price",
    rating: { percentage: 87, count: 41 },
    image: getRandomFoodImage(),
    group: "Offers",
  },

  // Picked for you
  {
    id: 8,
    title: "Value For One",
    price: 23.95,
    description:
      "Choice of 1x Small Wok, 1x Spring Roll with Sweet Chilli Dipping Sauce or Dim Sim with Soy Sauce, 1x Can of Soft Drink",
    rating: { percentage: 72, count: 25 },
    image: getRandomFoodImage(),
    group: "Picked for you",
  },
  {
    id: 9,
    title: "Create Your Own - Meat",
    price: 20.95,
    description:
      "Choose more of what you like and none what you don't. All dishes can be customized to your taste",
    image: getRandomFoodImage(),
    group: "Picked for you",
  },
  {
    id: 10,
    title: "Garlic Prawns",
    price: 20.95,
    description:
      "Thick egg noodles with garlic prawns, onion, snow peas, broccoli + bok choy",
    rating: { percentage: 82, count: 17 },
    calories: "2100 kJ",
    image: getRandomFoodImage(),
    group: "Picked for you",
  },
  {
    id: 11,
    title: "Mongolian Beef",
    price: 19.95,
    description:
      "Tender beef strips with Mongolian sauce, served with vegetables and rice",
    rating: { percentage: 79, count: 22 },
    calories: "1950 kJ",
    image: getRandomFoodImage(),
    group: "Picked for you",
  },

  // NEW
  {
    id: 12,
    title: "Spicy Korean Chicken",
    price: 21.95,
    description: "Crispy chicken in a spicy Korean sauce with kimchi and rice",
    rating: { percentage: 93, count: 15 },
    calories: "2250 kJ",
    image: getRandomFoodImage(),
    group: "NEW",
  },
  {
    id: 13,
    title: "Plant-Based Noodles",
    price: 18.95,
    description:
      "Egg-free noodles with plant-based protein and seasonal vegetables",
    rating: { percentage: 84, count: 12 },
    calories: "1650 kJ",
    image: getRandomFoodImage(),
    group: "NEW",
  },
  {
    id: 14,
    title: "Mango Chicken",
    price: 19.95,
    description:
      "Chicken pieces with fresh mango, capsicum and onion in a sweet sauce",
    rating: { percentage: 91, count: 18 },
    calories: "1850 kJ",
    image: getRandomFoodImage(),
    group: "NEW",
  },
  {
    id: 15,
    title: "Laksa Soup",
    price: 17.95,
    description:
      "Spicy coconut soup with noodles, bean sprouts, tofu and your choice of protein",
    rating: { percentage: 88, count: 14 },
    calories: "1950 kJ",
    image: getRandomFoodImage(),
    group: "NEW",
  },

  // Specials
  {
    id: 16,
    title: "Chef's Special Stir Fry",
    price: 22.95,
    description:
      "Our chef's special combination of seafood, chicken and beef with seasonal vegetables",
    rating: { percentage: 96, count: 28 },
    calories: "2100 kJ",
    image: getRandomFoodImage(),
    group: "Specials",
  },
  {
    id: 17,
    title: "Peking Duck Pancakes",
    price: 24.95,
    description:
      "Crispy duck with cucumber, spring onion and hoisin sauce in thin pancakes",
    rating: { percentage: 92, count: 31 },
    calories: "1850 kJ",
    image: getRandomFoodImage(),
    group: "Specials",
  },
  {
    id: 18,
    title: "Seafood Combination",
    price: 25.95,
    description:
      "Prawns, scallops, squid and fish with vegetables in a light garlic sauce",
    rating: { percentage: 89, count: 24 },
    calories: "1750 kJ",
    image: getRandomFoodImage(),
    group: "Specials",
  },
  {
    id: 19,
    title: "Sizzling Mongolian Lamb",
    price: 23.95,
    description:
      "Tender lamb with Mongolian sauce served on a sizzling hot plate",
    rating: { percentage: 91, count: 19 },
    calories: "2200 kJ",
    image: getRandomFoodImage(),
    group: "Specials",
  },
  {
    id: 20,
    title: "Crispy Whole Fish",
    price: 29.95,
    description:
      "Whole fish deep-fried until crispy, topped with sweet and sour sauce",
    rating: { percentage: 87, count: 16 },
    calories: "2350 kJ",
    image: getRandomFoodImage(),
    group: "Specials",
  },
];
