<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
    <?php include 'assets/tailwindcdn.html'; ?>
</head>
<body class="bg-blue-100">
    <div class="container mx-auto p-5">
        <h1 class="text-2xl font-bold text-blue-800">Checkout</h1>
        <form action="process_checkout.php" method="POST" class="mt-5">
            <div class="mb-4">
                <label for="qr_code" class="block text-blue-700">Scan QR Code:</label>
                <input type="text" id="qr_code" name="qr_code" class="mt-1 block w-full p-2 border border-blue-300 rounded" required>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Checkout</button>
        </form>
    </div>
</body>
</html>