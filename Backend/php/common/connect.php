<?php

$host = "localhost"; 
$username = ""; 
$password = ""; 
$database = "zens"; 

// Kết nối cơ sở dữ liệu
$conn = new mysqli($host, $username, $password, $database);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>