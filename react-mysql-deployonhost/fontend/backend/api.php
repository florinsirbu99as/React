<?php
// Establish database connection
$servername = "";
$username = "";
$password = "";
$dbname = "";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$sql = "SELECT * FROM Rezepte";
$result = $conn->query($sql);

// Process and format the data
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Send the response
header('Content-Type: application/json');
echo json_encode($data);

// Close the database connection
$conn->close();
?>
