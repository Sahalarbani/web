# Admin Panel for Inventory Management

This project is an admin panel built with PHP and TailwindCSS for managing inventory, including adding items, checking out items using QR code scanning, and printing receipts via Bluetooth printers.

## Features

- **User Authentication**: Admin users can log in to access the panel.
- **Inventory Management**: Add, update, and delete items in the inventory.
- **Checkout Process**: Scan QR codes to check out items and confirm quantities.
- **Transaction Logging**: All transactions are recorded for tracking purposes.
- **Bluetooth Printing**: Print receipts directly to Bluetooth ESC/POS printers.

## Technologies Used

- PHP
- MySQL
- TailwindCSS
- JavaScript (for QR code scanning)

## Project Structure

```
admin-panel
├── public
│   ├── index.php          # Main entry point
│   ├── login.php          # Admin login page
│   ├── add-item.php       # Form to add new items
│   ├── checkout.php       # Checkout page with QR scanning
│   ├── transactions.php    # List of all transactions
│   ├── assets
│   │   └── tailwindcdn.html # TailwindCSS CDN link
│   └── js
│       └── qr-scanner.js  # QR code scanning functionality
├── src
│   ├── controllers
│   │   ├── AuthController.php      # Handles authentication
│   │   ├── ItemController.php       # Manages item operations
│   │   ├── CheckoutController.php    # Manages checkout process
│   │   └── TransactionController.php # Handles transaction data
│   ├── models
│   │   ├── Item.php                 # Item data structure
│   │   └── Transaction.php           # Transaction data structure
│   └── utils
│       └── PrinterBluetooth.php      # Bluetooth printing utilities
├── config
│   └── database.php                  # Database configuration
├── sql
│   └── init.sql                      # SQL commands to initialize the database
├── .env.example                      # Environment variable template
├── composer.json                     # Composer dependencies
└── README.md                         # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd admin-panel
   ```

3. Set up the database:
   - Create a MySQL database and import the `sql/init.sql` file to create necessary tables.

4. Configure the database connection:
   - Update the `config/database.php` file with your database credentials.

5. Install dependencies using Composer:
   ```
   composer install
   ```

6. Access the application:
   - Open `public/index.php` in your web browser.

## Usage

- Log in using admin credentials.
- Use the navigation to add items, check out items, and view transaction history.
- Ensure your Bluetooth printer is connected for printing receipts.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes. 

## License

This project is licensed under the MIT License.