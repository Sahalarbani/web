# Admin Panel for Stock Management

This project is an admin panel for managing stock items, processing checkouts, and integrating Bluetooth printing functionality. It is built using PHP and styled with Tailwind CSS.

## Features

- **Add Item**: Easily add new items to the stock with a user-friendly form.
- **Checkout Process**: Scan QR codes to quickly process transactions.
- **Bluetooth Printing**: Print receipts directly to Bluetooth printers.

## Project Structure

```
admin-panel
├── public
│   ├── index.php          # Main entry point for the application
│   ├── add-item.php       # Form for adding new items
│   ├── checkout.php        # Checkout process page
│   ├── assets
│   │   └── tailwindcdn.html # Tailwind CSS CDN link
├── src
│   ├── controllers
│   │   ├── ItemController.php  # Controller for item management
│   │   └── CheckoutController.php # Controller for checkout process
│   ├── models
│   │   └── Item.php           # Item model
│   └── utils
│       └── PrinterBluetooth.php # Utility for Bluetooth printing
├── config
│   └── database.php          # Database connection settings
├── composer.json             # Composer dependencies
└── README.md                 # Project documentation
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
3. Install dependencies using Composer:
   ```
   composer install
   ```
4. Configure your database settings in `config/database.php`.

## Usage

- Access the admin panel by navigating to `public/index.php` in your web browser.
- Use the "Add Item" feature to input new stock items.
- Utilize the checkout page to scan QR codes and complete transactions.
- Ensure your Bluetooth printer is connected to print receipts.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.