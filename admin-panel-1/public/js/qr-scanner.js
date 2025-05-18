// This file contains JavaScript code for handling QR code scanning functionality.

const qrScanner = new QrScanner(document.getElementById('qr-video'), result => {
    console.log('QR code scanned:', result);
    // Handle the scanned result (e.g., fetch item details from the server)
    fetchItemDetails(result);
});

function fetchItemDetails(qrCode) {
    // Make an AJAX request to fetch item details based on the scanned QR code
    fetch(`api/get-item.php?code=${qrCode}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Populate the checkout form with item details
                document.getElementById('item-name').innerText = data.item.name;
                document.getElementById('item-price').innerText = data.item.price;
                document.getElementById('item-quantity').value = 1; // Default quantity
            } else {
                alert('Item not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching item details:', error);
        });
}

document.getElementById('start-scan').addEventListener('click', () => {
    qrScanner.start();
});

document.getElementById('stop-scan').addEventListener('click', () => {
    qrScanner.stop();
});