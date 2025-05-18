<?php

class Item {
    private $db;
    private $table = 'items';

    public function __construct($database) {
        $this->db = $database;
    }

    public function create($data) {
        $query = "INSERT INTO " . $this->table . " (name, quantity, price) VALUES (:name, :quantity, :price)";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':quantity', $data['quantity']);
        $stmt->bindParam(':price', $data['price']);
        return $stmt->execute();
    }

    public function read($id = null) {
        if ($id) {
            $query = "SELECT * FROM " . $this->table . " WHERE id = :id";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $query = "SELECT * FROM " . $this->table;
            $stmt = $this->db->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    public function update($id, $data) {
        $query = "UPDATE " . $this->table . " SET name = :name, quantity = :quantity, price = :price WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':quantity', $data['quantity']);
        $stmt->bindParam(':price', $data['price']);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }

    public function delete($id) {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }
}