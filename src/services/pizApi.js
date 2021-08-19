const pizza = [
    {
      _id: "5eee651f739f8c674fd736ee",
      name: "Margherita",
  
      price: "250",
      size: "small"
    },  {
      _id: "5eee651f739f8c674fd736ef",
      name: "Macchao",
  
      price: "230",
      size: "small"
    },
    {
      _id: "5eee651f739f8c674fd736eg",
      name: "Meua",
  
      price: "650",
      size: "large"
    },
    {
      _id: "5eee6671a27a66807cf2bea3",
      name: "Marinara",
  
      price: "300",
      size: "medium"
    },
    {
      _id: "5eee6692a27a66807cf2bea4",
      name: "Carbonara",
  
      price: "200",
      size: "small"
    },
    {
      _id: "5eee66a5a27a66807cf2bea5",
      name: "Americana",
  
      price: "500",
      size: "large"
    },
    {
      _id: "5eee66eea27a66807cf2bea8",
      name: "Vegies pizza",
  
      price: "600",
      size: "large"
    },
    {
      _id: "5eee6717a27a66807cf2bea9",
      name: "Pepperoni",
  
      price: "500",
      size: "medium"
    },
    {
      _id: "5eee66c4a27a66807cf2bea6",
      name: "Chicken Mushroom",
  
      price: "350",
      size: "medium"
    },
    {
      _id: "5eee66cfa27a66807cf2bea7",
      name: "Paneer pizza",
      
      price: "200",
      size: "small"
    }
  ];
  export function getMovies() {
    return pizza;
  }
  
  export function getMovie(id) {
    return pizza.find((m) => m._id === id);
  }
  