<?php

include "connect.php";

if(isset($_POST['submit'])){

    $user = $_POST['username'];

    $pass = $_POST['password'];

    $sql = "INSERT INTO users(username,password)
    VALUES('$user','$pass')";

    mysqli_query($conn,$sql);

    echo "Account Created";

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

<button type="submit" name="submit">Sign Up</button>

</form>

</body>

</html>