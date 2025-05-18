<?php

class Item {
    private $id;
    private $name;
    private $quantity;

    public function __construct($id, $name, $quantity) {
        $this->id = $id;
        $this->name = $name;
        $this->quantity = $quantity;
    }

    public function getId() {
        return $this->id;
    }

    public function getName() {
        return $this->name;
    }

    public function getQuantity() {
        return $this->quantity;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function setQuantity($quantity) {
        $this->quantity = $quantity;
    }

    public function save() {
        // Logic to save the item to the database
    }

    public static function getAllItems() {
        // Logic to retrieve all items from the database
    }

    public static function findItemById($id) {
        // Logic to find an item by its ID
    }
}