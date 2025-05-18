<?php

namespace App\Controllers;

use App\Models\Transaction;
use App\Models\Item;
use App\Utils\PrinterBluetooth;

class CheckoutController
{
    private $transactionModel;
    private $itemModel;
    private $printer;

    public function __construct()
    {
        $this->transactionModel = new Transaction();
        $this->itemModel = new Item();
        $this->printer = new PrinterBluetooth();
    }

    public function checkout($itemId, $quantity)
    {
        // Validate item and quantity
        $item = $this->itemModel->find($itemId);
        if (!$item || $quantity <= 0 || $quantity > $item->stock) {
            return ['error' => 'Invalid item or quantity.'];
        }

        // Update item stock
        $item->stock -= $quantity;
        $this->itemModel->update($item);

        // Create transaction
        $transaction = $this->transactionModel->create([
            'item_id' => $itemId,
            'quantity' => $quantity,
            'total' => $item->price * $quantity,
            'date' => date('Y-m-d H:i:s')
        ]);

        // Print receipt
        $this->printReceipt($transaction, $item);

        return ['success' => 'Checkout successful.', 'transaction' => $transaction];
    }

    private function printReceipt($transaction, $item)
    {
        $receipt = "Toko XYZ\n";
        $receipt .= "Item: " . $item->name . "\n";
        $receipt .= "Quantity: " . $transaction['quantity'] . "\n";
        $receipt .= "Total: " . $transaction['total'] . "\n";
        $receipt .= "Terima kasih!\n";

        $this->printer->print($receipt);
    }
}