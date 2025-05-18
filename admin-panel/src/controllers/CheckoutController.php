<?php

namespace App\Controllers;

use App\Models\Item;
use App\Utils\PrinterBluetooth;

class CheckoutController
{
    private $itemModel;
    private $printer;

    public function __construct()
    {
        $this->itemModel = new Item();
        $this->printer = new PrinterBluetooth();
    }

    public function processCheckout($items)
    {
        // Logic to process the checkout with the provided items
        // This could include calculating totals, updating stock, etc.
        
        foreach ($items as $item) {
            $this->itemModel->updateStock($item['id'], -$item['quantity']);
        }

        // Print receipt using Bluetooth printer
        $this->printer->printReceipt($items);
    }

    public function scanQRCode($qrCodeData)
    {
        // Logic to handle QR code scanning
        // This could involve decoding the QR code and retrieving item information
        
        $item = $this->itemModel->getItemByQRCode($qrCodeData);
        return $item;
    }
}