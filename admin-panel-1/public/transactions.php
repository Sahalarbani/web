<?php
session_start();
require_once '../config/database.php';
require_once '../src/controllers/TransactionController.php';

$transactionController = new TransactionController($db);
$transactions = $transactionController->getAllTransactions();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transactions</title>
    <?php include 'assets/tailwindcdn.html'; ?>
</head>
<body class="bg-blue-100">
    <div class="container mx-auto p-5">
        <h1 class="text-2xl font-bold text-blue-800">Transaction History</h1>
        <table class="min-w-full bg-white border border-blue-300 mt-5">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">Transaction ID</th>
                    <th class="py-2 px-4 border-b">Item Name</th>
                    <th class="py-2 px-4 border-b">Quantity</th>
                    <th class="py-2 px-4 border-b">Date</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($transactions as $transaction): ?>
                    <tr>
                        <td class="py-2 px-4 border-b"><?php echo htmlspecialchars($transaction['id']); ?></td>
                        <td class="py-2 px-4 border-b"><?php echo htmlspecialchars($transaction['item_name']); ?></td>
                        <td class="py-2 px-4 border-b"><?php echo htmlspecialchars($transaction['quantity']); ?></td>
                        <td class="py-2 px-4 border-b"><?php echo htmlspecialchars($transaction['date']); ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>