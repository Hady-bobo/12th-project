<?php

include "connect.php";

if(isset($_POST['login'])){

    $user = $_POST['username'];

    $pass = $_POST['password'];

    $sql = "SELECT * FROM users
    WHERE username='$user'
    AND password='$pass'";

    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result) > 0){

        header("Location: home.html");

    }

    else{

        echo "Wrong Username or Password";

    }

}

?>

<!DOCTYPE html>

<html>

<head>

<link rel="stylesheet" href="style.css">

</head>

<body>

<form method="POST">

<input type="text" name="username" placeholder="Username">

<input type="password" name="password" placeholder="Password">

<button type="submit" name="login">Login</button>

</form>

</body>

</html>