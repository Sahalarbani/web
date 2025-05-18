<?php
session_start();

// Include database configuration
require_once '../config/database.php';

// Check if the user is already logged in
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    header("location: index.php");
    exit;
}

// Define variables and initialize with empty values
$username = $password = "";
$username_err = $password_err = "";

// Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username is empty
    if (empty(trim($_POST["username"]))) {
        $username_err = "Please enter your username.";
    } else {
        $username = trim($_POST["username"]);
    }

    // Check if password is empty
    if (empty(trim($_POST["password"]))) {
        $password_err = "Please enter your password.";
    } else {
        $password = trim($_POST["password"]);
    }

    // Validate credentials
    if (empty($username_err) && empty($password_err)) {
        // Prepare a select statement
        $sql = "SELECT id, username, password FROM admins WHERE username = :username";

        if ($stmt = $pdo->prepare($sql)) {
            // Bind variables to the prepared statement as parameters
            $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
            $param_username = $username;

            // Attempt to execute the prepared statement
            if ($stmt->execute()) {
                // Check if username exists, if yes then verify password
                if ($stmt->rowCount() == 1) {
                    if ($row = $stmt->fetch()) {
                        $id = $row["id"];
                        $hashed_password = $row["password"];
                        if (password_verify($password, $hashed_password)) {
                            // Password is correct, so start a new session
                            session_start();

                            // Store data in session variables
                            $_SESSION["admin_logged_in"] = true;
                            $_SESSION["admin_id"] = $id;
                            $_SESSION["username"] = $username;

                            // Redirect to admin panel
                            header("location: index.php");
                        } else {
                            // Password is not valid
                            $password_err = "The password you entered was not valid.";
                        }
                    }
                } else {
                    // Username doesn't exist
                    $username_err = "No account found with that username.";
                }
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }
        }

        // Close statement
        unset($stmt);
    }

    // Close connection
    unset($pdo);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Admin Panel</title>
    <link href="assets/tailwindcdn.html" rel="stylesheet">
</head>
<body class="bg-blue-100 flex items-center justify-center h-screen">
    <div class="bg-white p-6 rounded shadow-md w-96">
        <h2 class="text-2xl font-bold mb-4 text-center text-blue-600">Admin Login</h2>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="mb-4">
                <label class="block text-gray-700" for="username">Username</label>
                <input type="text" name="username" class="border rounded w-full py-2 px-3" value="<?php echo $username; ?>">
                <span class="text-red-500"><?php echo $username_err; ?></span>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700" for="password">Password</label>
                <input type="password" name="password" class="border rounded w-full py-2 px-3">
                <span class="text-red-500"><?php echo $password_err; ?></span>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded">Login</button>
            </div>
        </form>
    </div>
</body>
</html>