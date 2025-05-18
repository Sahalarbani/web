<?php

namespace App\Controllers;

use App\Models\User;

class AuthController
{
    public function login($request)
    {
        // Validate request data
        $username = $request['username'];
        $password = $request['password'];

        // Check user credentials
        $user = User::findByUsername($username);
        if ($user && password_verify($password, $user->password)) {
            // Start session and set user data
            session_start();
            $_SESSION['user_id'] = $user->id;
            $_SESSION['username'] = $user->username;

            // Redirect to admin panel
            header('Location: /admin-panel/public/index.php');
            exit;
        } else {
            // Invalid credentials
            return 'Invalid username or password';
        }
    }

    public function logout()
    {
        // Destroy session
        session_start();
        session_destroy();

        // Redirect to login page
        header('Location: /admin-panel/public/login.php');
        exit;
    }
}