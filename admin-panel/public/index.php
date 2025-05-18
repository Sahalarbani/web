<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <?php include 'assets/tailwindcdn.html'; ?>
</head>
<body class="bg-blue-100">
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-blue-800">Admin Panel</h1>
        <nav class="mt-4">
            <ul class="flex space-x-4">
                <li><a href="add-item.php" class="text-blue-600 hover:underline">Add Item</a></li>
                <li><a href="checkout.php" class="text-blue-600 hover:underline">Checkout</a></li>
            </ul>
        </nav>
        <div class="mt-6">
            <h2 class="text-2xl font-semibold text-blue-700">Welcome to the Admin Panel</h2>
            <p class="mt-2 text-blue-600">Use the navigation above to manage stock and process checkouts.</p>
        </div>
    </div>
</body>
</html>