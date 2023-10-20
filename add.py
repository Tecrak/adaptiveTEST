$servername = "localhost";
$username = "root";
$password = "28080303sTss$!M";
$database = "form_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
