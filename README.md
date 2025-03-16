to get the video of this website try with this link >> https://drive.google.com/file/d/167IWZICMI7xfK0fsaON-MCJm0e6vIzxJ/view?usp=sharing

# CodeStorm Restaurant - Online Ordering System

This project is a simple online ordering system for a restaurant, specifically designed with a salad menu in mind. It allows customers to browse the menu, add items to their cart, place orders, and provide feedback.

## Features

* **Menu Browsing:** Displays a list of salad items with images, prices, and "Customize & Order" buttons.
* **Cart Management:** Allows customers to add items to their cart, view the cart, and remove items.
* **Order Placement:** Enables customers to place orders by providing a table number and selecting a payment method (CBE or Telebirr).
* **Order History:** Displays a list of past orders with order details.
* **Feedback Submission:** Provides a form for customers to submit feedback.
* **Payment Simulation:** Simulates payment processing using CBE and Telebirr payment pages.
* **Local Storage:** Uses `localStorage` to store order information and order ID.
* **Session Storage:** Uses `sessionStorage` to store cart and payment method information.
* **Simple CSS:** Uses manual css to make the webpage more attractive.
* **Responsive design:** The pages are responsive to fit most of the screen sizes.

## Project Structure
CodeStorm-Restaurant/
├── index.html
├── menu.html
├── cart.html
├── orders.html
├── feedback.html
├── cbe_payment.html
├── telebirr_payment.html
├── assets/
│   └── images/
│       ├── caesar-salad.jpg
│       ├── greek-salad.jpg
│       ├── chicken-avocado-salad.jpg
│       ├── fruit-salad.jpg
│       ├── caprese-salad.jpg
│       ├── spinach-salad.jpg
│       ├── quinoa-salad.jpg
│       └── cobb-salad.jpg
└── README.md


* `index.html`: The home page of the restaurant.
* `menu.html`: The menu page displaying the salad items.
* `cart.html`: The cart page displaying the selected items.
* `orders.html`: The orders page displaying the order history.
* `feedback.html`: The feedback page for customers to submit feedback.
* `cbe_payment.html`: The simulated CBE payment page.
* `telebirr_payment.html`: The simulated Telebirr payment page.
* `assets/images/`: Contains the images of the salad items.
* `README.md`: This file.

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone [repository_url]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd CodeStorm-Restaurant
    ```
3.  **Start a local web server:**
    ```bash
    python -m http.server
    ```
    or
    ```bash
    python3 -m http.server
    ```
4.  **Open your browser and go to `http://localhost:8000`.**

## Technologies Used

* HTML
* CSS
* JavaScript

## Image

Here is a sample image of the salads:

![Salad Menu](assets/images/cobb-salad.jpg)

## Future Improvements

* Implement a server-side database to store order and feedback data.
* Add user authentication and authorization.
* Enhance the payment processing to integrate with real payment gateways.
* Improve the user interface and user experience.
* Add customize option for each item.
* Add more menu items and categories.
* Add a admin panel.
* Add search functionality.
