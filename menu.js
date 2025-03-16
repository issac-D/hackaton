document.addEventListener('DOMContentLoaded', function() {
    const itemModal = new bootstrap.Modal(document.getElementById('itemModal'));
    let selectedItemId = null;

    // Menu Item Data (Replace with your actual data)
    const menuItems = {
        'garlic-bread': {
            name: 'Garlic Bread with Cheese',
            price: 85,
            image: 'assets/images/Garlic.png'
        },
        'chicken-wings': {
            name: 'Crispy Chicken Wings',
            price: 120,
            image: 'assets/images/cryspe.png'
        },
        'caesar-salad': {
            name: 'Caesar Salad',
            price: 100,
            image: 'assets/menu/caesar-salad.jpg'
        },
        'greek-salad': {
            name: 'Greek Salad',
            price: 110,
            image: 'assets/menu/greek-salad.jpg'
        },
        'chicken-avocado-salad': {
            name: 'Chicken Avocado Salad',
            price: 150,
            image: 'assets/menu/chicken-avocado-salad.jpg'
        },
        'fruit-salad': {
            name: 'Fruit Salad',
            price: 90,
            image: 'assets/menu/fruit-salad.jpg'
        },
        'caprese-salad': {
            name: 'Caprese Salad',
            price: 120,
            image: 'assets/menu/caprese-salad.jpg'
        },
        'spinach-salad': {
            name: 'Spinach Salad',
            price: 130,
            image: 'assets/menu/spinach-salad.jpg'
        },
        'quinoa-salad': {
            name: 'Quinoa Salad',
            price: 140,
            image: 'assets/menu/quinoa-salad.jpg'
        },
        'cobb-salad': {
            name: 'Cobb Salad',
            price: 160,
            image: 'assets/menu/cobb-salad.jpg'
        },
        'chicken-noodle-soup': {
            name: 'Chicken Noodle Soup',
            price: 80,
            image: 'assets/menu/chicken-noodle-soup.jpg'
        },
        'tomato-basil-soup': {
            name: 'Tomato Basil Soup',
            price: 70,
            image: 'assets/menu/tomato-basil-soup.jpg'
        },
        'lentil-soup': {
            name: 'Lentil Soup',
            price: 90,
            image: 'assets/menu/lentil-soup.jpg'
        },
        'seafood-chowder': {
            name: 'Seafood Chowder',
            price: 160,
            image: 'assets/menu/seafood-chowder.jpg'
        },
        'grilled-chicken-rice': {
            name: 'Grilled Chicken with Rice',
            price: 180,
            image: 'assets/menu/grilled-chicken-rice.jpg'
        },
        'spaghetti-bolognese': {
            name: 'Spaghetti Bolognese',
            price: 150,
            image: 'assets/menu/spaghetti-bolognese.jpg'
        },
        'beef-steak-mashed-potatoes': {
            name: 'Beef Steak with Mashed Potatoes',
            price: 250,
            image: 'assets/menu/beef-steak-mashed-potatoes.jpg'
        },
        'vegetable-stir-fry': {
            name: 'Vegetable Stir-Fry',
            price: 160,
            image: 'assets/menu/vegetable-stir-fry.jpg'
        },
        'bbq-ribs': {
            name: 'BBQ Ribs',
            price: 230,
            image: 'assets/menu/bbq-ribs.jpg'
        },
        'roast-chicken': {
            name: 'Roast Chicken',
            price: 190,
            image: 'assets/menu/roast-chicken.jpg'
        },
        'lamb-chops': {
            name: 'Lamb Chops',
            price: 260,
            image: 'assets/menu/lamb-chops.jpg'
        },
        'pork-tenderloin': {
            name: 'Pork Tenderloin',
            price: 210,
            image: 'assets/menu/pork-tenderloin.jpg'
        },
        'coffee': {
            name: 'Coffee',
            price: 30,
            image: 'assets/menu/coffee.jpg'
        },
        'tea': {
            name: 'Tea',
            price: 25,
            image: 'assets/menu/tea.jpg'
        },
        'soda': {
            name: 'Soft Drink (Soda)',
            price: 35,
            image: 'assets/menu/soda.jpg'
        },
        'fresh-juice': {
            name: 'Fresh Juice',
            price: 50,
            image: 'assets/menu/fresh-juice.jpg'
        },
        'cocktail': {
            name: 'Cocktail',
            price: 100,
            image: 'assets/menu/cocktail.jpg'
        },
        'wine': {
            name: 'Wine',
            price: 150,
            image: 'assets/menu/wine.jpg'
        }
    };

    document.querySelectorAll('.item-card .btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            selectedItemId = this.closest('.item-card').dataset.itemId;
            const item = menuItems[selectedItemId];
            if (item) {
                document.getElementById('modalItemName').textContent = item.name;
                document.getElementById('modalItemPrice').textContent = `${item.price} ETB`;
                itemModal.show();  // <--- Check this line
            }
        });
    });

    document.getElementById('addToCartBtn').addEventListener('click', function() {
        if (selectedItemId) {
            const item = menuItems[selectedItemId];
            if (item) {
                const instructions = document.getElementById('specialInstructions').value;
                const cartItem = {
                    name: item.name,
                    price: item.price,
                    image: document.querySelector(`.item-card[data-item-id="${selectedItemId}"] .card-img-top`).src,
                    instructions: instructions,
                };

                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));

                alert(`${item.name} added to cart!`);
                itemModal.hide();
                document.getElementById('specialInstructions').value = '';
            } else {
                alert('Item not found.');
            }
        }
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let resultsFound = false;

        document.querySelectorAll('.item-card').forEach(card => {
            const itemName = card.querySelector('.card-title').textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                card.style.display = 'block';
                resultsFound = true;
            } else {
                card.style.display = 'none';
            }
        });

        document.getElementById('noResults').style.display = resultsFound ? 'none' : 'block';
    });
});
console.log("Showing modal for item:", item.name);
itemModal.show();