export const categories = [
  { id: 1, name: 'Popular', order_num: 1 },
  { id: 2, name: 'Rice', order_num: 2 },
  { id: 3, name: 'Steamed', order_num: 3 },
  { id: 4, name: 'Fried', order_num: 4 },
  { id: 5, name: 'Noodle', order_num: 5 },
];

// Generate random food images
const getRandomFoodImage = () => {
  const imageId = Math.floor(Math.random() * 20) + 1;
  return `https://source.unsplash.com/300x200/?food,asian,noodles&sig=${imageId}`;
};

export const dishes = [
  // 1 - Popular (category_id: 1)
  {
    id: 1,
    name: 'Signature Noodles',
    price: 18.95,
    description:
      'Our famous egg noodles with vegetables and your choice of protein',
    image: getRandomFoodImage(),
    category_id: 1,
    is_hot: 1,
    has_sauce_options: 0,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 2,
    name: 'Pad Thai',
    price: 19.95,
    description:
      'Rice noodles with egg, bean sprouts, peanuts and tamarind sauce',
    image: getRandomFoodImage(),
    category_id: 1,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 1,
    available: 1,
  },
  {
    id: 3,
    name: 'Honey Chicken',
    price: 17.95,
    description: 'Crispy chicken pieces coated in our special honey sauce',
    image: getRandomFoodImage(),
    category_id: 1,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 4,
    name: 'Beef & Black Bean',
    price: 18.95,
    description: 'Tender beef strips with vegetables in black bean sauce',
    image: getRandomFoodImage(),
    category_id: 1,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },

  // 2 - Offers (category_id: 2)
  {
    id: 5,
    name: 'Family Feast',
    price: 49.95,
    description: '4 mains, 2 sides and 2 drinks. Perfect for sharing!',
    image: getRandomFoodImage(),
    category_id: 2,
    is_hot: 0,
    has_sauce_options: 0,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 6,
    name: 'Lunch Special',
    price: 15.95,
    description:
      'Any small wok dish with a spring roll and drink. Available 11am-3pm',
    image: getRandomFoodImage(),
    category_id: 2,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 7,
    name: 'Student Meal',
    price: 14.95,
    description:
      'Show your student ID and get a main dish with rice for a special price',
    image: getRandomFoodImage(),
    category_id: 2,
    is_hot: 0,
    has_sauce_options: 0,
    has_spicy_level: 0,
    available: 1,
  },

  // 3 - Picked for you (category_id: 3)
  {
    id: 8,
    name: 'Value For One',
    price: 23.95,
    description:
      'Choice of 1x Small Wok, 1x Spring Roll with Sweet Chilli Dipping Sauce or Dim Sim with Soy Sauce, 1x Can of Soft Drink',
    image: getRandomFoodImage(),
    category_id: 3,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 9,
    name: 'Create Your Own - Meat',
    price: 20.95,
    description:
      "Choose more of what you like and none what you don't. All dishes can be customized to your taste",
    image: getRandomFoodImage(),
    category_id: 3,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 10,
    name: 'Garlic Prawns',
    price: 20.95,
    description:
      'Thick egg noodles with garlic prawns, onion, snow peas, broccoli + bok choy',
    image: getRandomFoodImage(),
    category_id: 3,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 1,
    available: 1,
  },

  // 4 - NEW (category_id: 4)
  {
    id: 12,
    name: 'Spicy Korean Chicken',
    price: 21.95,
    description: 'Crispy chicken in a spicy Korean sauce with kimchi and rice',
    image: getRandomFoodImage(),
    category_id: 4,
    is_hot: 1,
    has_sauce_options: 1,
    has_spicy_level: 3,
    available: 1,
  },
  {
    id: 13,
    name: 'Plant-Based Noodles',
    price: 18.95,
    description:
      'Egg-free noodles with plant-based protein and seasonal vegetables',
    image: getRandomFoodImage(),
    category_id: 4,
    is_hot: 0,
    has_sauce_options: 0,
    has_spicy_level: 0,
    available: 1,
  },

  // 5 - Specials (category_id: 5)
  {
    id: 16,
    name: "Chef's Special Stir Fry",
    price: 22.95,
    description:
      "Our chef's special combination of seafood, chicken and beef with seasonal vegetables",
    image: getRandomFoodImage(),
    category_id: 5,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 17,
    name: 'Peking Duck Pancakes',
    price: 24.95,
    description:
      'Crispy duck with cucumber, spring onion and hoisin sauce in thin pancakes',
    image: getRandomFoodImage(),
    category_id: 5,
    is_hot: 0,
    has_sauce_options: 0,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 18,
    name: 'Seafood Combination',
    price: 25.95,
    description:
      'Prawns, scallops, squid and fish with vegetables in a light garlic sauce',
    image: getRandomFoodImage(),
    category_id: 5,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 19,
    name: 'Sizzling Mongolian Lamb',
    price: 23.95,
    description:
      'Tender lamb with Mongolian sauce served on a sizzling hot plate',
    image: getRandomFoodImage(),
    category_id: 5,
    is_hot: 0,
    has_sauce_options: 1,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 20,
    name: 'Crispy Whole Fish',
    price: 29.95,
    description:
      'Whole fish deep-fried until crispy, topped with sweet and sour sauce',
    image: getRandomFoodImage(),
    category_id: 5,
    is_hot: 1,
    has_sauce_options: 0,
    has_spicy_level: 1,
    available: 1,
  },
];

export const hotSellingDishes = [
  {
    id: 12,
    name: 'Spicy Korean Chicken',
    price: 21.95,
    description: 'Crispy chicken in a spicy Korean sauce with kimchi and rice',
    image: getRandomFoodImage(),
    category_id: 4,
    is_hot: 1,
    has_sauce_options: 1,
    has_spicy_level: 3,
    available: 1,
  },
  {
    id: 1,
    name: 'Signature Noodles',
    price: 18.95,
    description:
      'Our famous egg noodles with vegetables and your choice of protein',
    image: getRandomFoodImage(),
    category_id: 1,
    is_hot: 1,
    has_sauce_options: 0,
    has_spicy_level: 0,
    available: 1,
  },
  {
    id: 20,
    name: 'Crispy Whole Fish',
    price: 29.95,
    description:
      'Whole fish deep-fried until crispy, topped with sweet and sour sauce',
    image: getRandomFoodImage(),
    category_id: 5,
    is_hot: 1,
    has_sauce_options: 0,
    has_spicy_level: 1,
    available: 1,
  },
];
