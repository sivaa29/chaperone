Overview
This React-based E-commerce application allows users to browse products, add them to a cart, and view a confirmation page upon interaction. The application features a responsive design, modals for adding products to the cart, and a thank-you page for user feedback.

Components
1. CartModal
A modal that appears when a user clicks "Add to Cart". It displays the product details and offers options to confirm or cancel the action.

Props
product: The product object containing details like name, price, and image.
isOpen: Boolean to control the visibility of the modal.
onClose: Function to close the modal.
onConfirm: Function to execute when confirming the addition to the cart.

2. Header
The header component features a logo, a search bar, and icons for user profile and cart functionalities.

Key Features
Logo with title "Chaperone".
Search bar for product searching.
Icons for user profile and cart.

3. ProductCard
This component displays individual product details, including an image, name, price, and buttons to view the product or add it to the cart.

Props
product: The product object containing details like name, text, price, image, and rating.

4. ProductList
The main product listing component that handles pagination and renders multiple ProductCard components based on the current page.

Features
Pagination to navigate through product listings.
Displays a set number of products per page (3 in this implementation).

5. ThankYou
A simple thank-you page displayed when a user clicks "View Product". It acknowledges the user’s interest.

Features
Displays a congratulatory message.
Option to continue shopping.

Installation
Navigate to the project directory.

3.Install dependencies:
npm install

4.Start the application:
npm start

Routing

This application uses React Router for navigation:
The main product listing is accessible at the root path /.
The thank-you page is accessible at /thank-you.

Styling
Styling is managed through CSS files located in the same directory as each component. Ensure to customize styles as needed to match your design requirements.

Conclusion
This E-commerce application provides a user-friendly interface for browsing and managing products. Each component is designed for reusability and maintainability.
