const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    {
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    {
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}

//1. Modify the route
// Now modify the existing route that handles the homepage / request. 
// Update this route to render the home.ejs template in response to a request.

// app.get('/', (req, res) => {
//   res.render('home.ejs');
// });

// Send data to view
// Using the locals object, send the RESTAURANT data from server.js to the home.ejs view.

// server.js

app.get('/', (req, res) => {
  res.render('home.ejs', { restaurant: RESTAURANT });
});

// Using the locals object, pass the menu array data from server.js to the menu.ejs view.


app.get('/menu', (req, res) => {
  res.render('menu.ejs', { menuItems: RESTAURANT.menu });
});
//chatGPT assistance used for finding filter()
app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const categoryMenuItems = RESTAURANT.menu.filter(item => item.category === category);

  res.render('category.ejs', { category, menuItems: categoryMenuItems });
});



