<?php
session_start();

// Include database configuration
require_once '../config/database.php';

// Include controllers
require_once '../src/controllers/AuthController.php';
require_once '../src/controllers/ItemController.php';
require_once '../src/controllers/CheckoutController.php';
require_once '../src/controllers/TransactionController.php';

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit();
}

// Initialize controllers
$authController = new AuthController();
$itemController = new ItemController();
$checkoutController = new CheckoutController();
$transactionController = new TransactionController();

// Handle routing
$page = isset($_GET['page']) ? $_GET['page'] : 'dashboard';

switch ($page) {
    case 'add-item':
        include 'add-item.php';
        break;
    case 'checkout':
        include 'checkout.php';
        break;
    case 'transactions':
        include 'transactions.php';
        break;
    default:
        include 'dashboard.php';
        break;
}
?>