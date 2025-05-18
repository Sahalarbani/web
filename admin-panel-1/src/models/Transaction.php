<?php

class Transaction {
    private $db;

    public function __construct($database) {
        $this->db = $database;
    }

    public function createTransaction($items, $totalAmount) {
        $stmt = $this->db->prepare("INSERT INTO transactions (items, total_amount, created_at) VALUES (?, ?, NOW())");
        $stmt->bind_param("sd", json_encode($items), $totalAmount);
        return $stmt->execute();
    }

    public function getAllTransactions() {
        $result = $this->db->query("SELECT * FROM transactions ORDER BY created_at DESC");
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getTransactionById($id) {
        $stmt = $this->db->prepare("SELECT * FROM transactions WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
}