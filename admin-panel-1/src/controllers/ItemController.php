<?php

namespace App\Controllers;

use App\Models\Item;
use App\Models\Transaction;

class ItemController
{
    protected $itemModel;

    public function __construct()
    {
        $this->itemModel = new Item();
    }

    public function addItem($data)
    {
        // Validate and add item to the database
        if ($this->itemModel->create($data)) {
            return ['status' => 'success', 'message' => 'Item added successfully.'];
        }
        return ['status' => 'error', 'message' => 'Failed to add item.'];
    }

    public function updateItem($id, $data)
    {
        // Validate and update item in the database
        if ($this->itemModel->update($id, $data)) {
            return ['status' => 'success', 'message' => 'Item updated successfully.'];
        }
        return ['status' => 'error', 'message' => 'Failed to update item.'];
    }

    public function deleteItem($id)
    {
        // Delete item from the database
        if ($this->itemModel->delete($id)) {
            return ['status' => 'success', 'message' => 'Item deleted successfully.'];
        }
        return ['status' => 'error', 'message' => 'Failed to delete item.'];
    }

    public function getAllItems()
    {
        // Retrieve all items from the database
        return $this->itemModel->getAll();
    }
}