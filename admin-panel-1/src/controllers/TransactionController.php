<?php

namespace App\Controllers;

use App\Models\Transaction;
use App\Models\Item;

class TransactionController
{
    protected $transactionModel;
    protected $itemModel;

    public function __construct()
    {
        $this->transactionModel = new Transaction();
        $this->itemModel = new Item();
    }

    public function recordTransaction($itemId, $quantity, $type)
    {
        // Validate item and quantity
        $item = $this->itemModel->find($itemId);
        if (!$item) {
            return ['status' => 'error', 'message' => 'Item not found.'];
        }

        if ($type === 'checkout' && $quantity > $item->stock) {
            return ['status' => 'error', 'message' => 'Insufficient stock.'];
        }

        // Record transaction
        $transactionData = [
            'item_id' => $itemId,
            'quantity' => $quantity,
            'type' => $type,
            'created_at' => date('Y-m-d H:i:s'),
        ];

        $this->transactionModel->create($transactionData);

        // Update item stock if checkout
        if ($type === 'checkout') {
            $this->itemModel->updateStock($itemId, -$quantity);
        }

        return ['status' => 'success', 'message' => 'Transaction recorded successfully.'];
    }

    public function getTransactions()
    {
        return $this->transactionModel->getAll();
    }
}