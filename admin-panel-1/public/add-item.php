<?php
require_once '../config/database.php';
require_once '../src/controllers/ItemController.php';

$itemController = new ItemController();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $itemName = $_POST['item_name'];
    $itemQuantity = $_POST['item_quantity'];
    $itemPrice = $_POST['item_price'];

    $result = $itemController->addItem($itemName, $itemQuantity, $itemPrice);

    if ($result) {
        echo "<script>alert('Item added successfully!'); window.location.href='add-item.php';</script>";
    } else {
        echo "<script>alert('Failed to add item.');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Item</title>
    <?php include 'assets/tailwindcdn.html'; ?>
</head>
<body class="bg-blue-100">
    <div class="container mx-auto p-5">
        <h1 class="text-2xl font-bold mb-5">Add New Item</h1>
        <form method="POST" class="bg-white p-5 rounded shadow-md">
            <div class="mb-4">
                <label for="item_name" class="block text-gray-700">Item Name</label>
                <input type="text" name="item_name" id="item_name" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
            </div>
            <div class="mb-4">
                <label for="item_quantity" class="block text-gray-700">Quantity</label>
                <input type="number" name="item_quantity" id="item_quantity" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
            </div>
            <div class="mb-4">
                <label for="item_price" class="block text-gray-700">Price</label>
                <input type="number" name="item_price" id="item_price" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Item</button>
        </form>
    </div>
</body>
</html>