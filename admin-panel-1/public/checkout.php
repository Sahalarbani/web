<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
    <?php include 'assets/tailwindcdn.html'; ?>
    <script src="js/qr-scanner.js"></script>
</head>
<body class="bg-blue-100">
    <div class="container mx-auto p-5">
        <h1 class="text-2xl font-bold text-blue-800">Checkout</h1>
        <form id="checkout-form" class="mt-5">
            <div>
                <label for="qr-code" class="block text-blue-600">Scan QR Code:</label>
                <input type="text" id="qr-code" name="qr-code" class="mt-1 p-2 border border-blue-300 rounded w-full" placeholder="Scan QR Code" required>
            </div>
            <div class="mt-4">
                <label for="quantity" class="block text-blue-600">Quantity:</label>
                <input type="number" id="quantity" name="quantity" class="mt-1 p-2 border border-blue-300 rounded w-full" min="1" required>
            </div>
            <button type="submit" class="mt-5 bg-blue-600 text-white p-2 rounded">Checkout</button>
        </form>
        <div id="confirmation" class="mt-5 hidden">
            <h2 class="text-xl font-bold text-blue-800">Confirm Checkout</h2>
            <p id="confirm-message" class="text-blue-600"></p>
            <button id="confirm-button" class="mt-2 bg-blue-600 text-white p-2 rounded">Confirm</button>
            <button id="cancel-button" class="mt-2 bg-red-600 text-white p-2 rounded">Cancel</button>
        </div>
    </div>

    <script>
        document.getElementById('checkout-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const qrCode = document.getElementById('qr-code').value;
            const quantity = document.getElementById('quantity').value;
            document.getElementById('confirm-message').innerText = `Are you sure you want to checkout ${quantity} of item with QR code: ${qrCode}?`;
            document.getElementById('confirmation').classList.remove('hidden');
        });

        document.getElementById('confirm-button').addEventListener('click', function() {
            // Handle the checkout process here (e.g., send data to server)
            alert('Checkout confirmed!');
            // Add Bluetooth printing logic here
        });

        document.getElementById('cancel-button').addEventListener('click', function() {
            document.getElementById('confirmation').classList.add('hidden');
        });
    </script>
</body>
</html>