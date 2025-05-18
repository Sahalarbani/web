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
        <h1 class="text-2xl font-bold text-blue-800">Add New Item</h1>
        <form action="" method="POST" class="mt-5">
            <div class="mb-4">
                <label for="name" class="block text-blue-700">Item Name:</label>
                <input type="text" id="name" name="name" required class="mt-1 block w-full p-2 border border-blue-300 rounded">
            </div>
            <div class="mb-4">
                <label for="quantity" class="block text-blue-700">Quantity:</label>
                <input type="number" id="quantity" name="quantity" required class="mt-1 block w-full p-2 border border-blue-300 rounded">
            </div>
            <button type="submit" name="add_item" class="bg-blue-600 text-white px-4 py-2 rounded">Add Item</button>
        </form>

        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['add_item'])) {
            require_once '../src/controllers/ItemController.php';
            $itemController = new ItemController();
            $name = $_POST['name'];
            $quantity = $_POST['quantity'];
            $itemController->addItem($name, $quantity);
            echo '<p class="mt-4 text-green-600">Item added successfully!</p>';
        }
        ?>
    </div>
</body>
</html>