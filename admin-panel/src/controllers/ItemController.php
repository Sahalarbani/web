<?php

namespace App\Controllers;

use App\Models\Item;

class ItemController
{
    public function addItem($data)
    {
        $item = new Item();
        $item->name = $data['name'];
        $item->quantity = $data['quantity'];
        $item->save();
    }

    public function getItems()
    {
        return Item::all();
    }
}