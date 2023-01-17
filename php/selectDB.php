<?php include('session.php'); ?>
<?php include('header.php'); ?>


<?php
  // Test if connection succeeded
  if(mysqli_connect_errno()) {
    die("Database connection failed: " . 
         mysqli_connect_error() . 
         " (" . mysqli_connect_errno() . ")"
    );
  }
?>


<?php
	/* Ver toda la tabla */ 
	echo "<b>Ver toda la tabla </b> <br>";
	
	$query=$conn->query("select * from user where userid='".$_SESSION['user']."'");
	
	$result = mysqli_query($connection, $query);

	if ($result) {
		// Success
		// redirect_to("somepage.php");
		echo "Success!";
	} else {
		// Failure
		// $message = "Subject creation failed";
		die("Database query failed. " . mysqli_error($connection));
	}
	echo "<BR>";
	if ($result->num_rows > 0) {
    // output data of each row
    	while($row = $result->fetch_assoc()) {
        	echo "Usuario: " . $row["username"] ." - Contrasena: " . $row["password"];
    	}
	} else {
    	echo "0 results";
	}
echo "<br><br>";
?>

<?php
	
	/* Ver la tabla especificando las columnas */ 
	
	echo "<b>Ver la tabla especificando las columnas </b> <br>";
	
	$query = "SELECT ID, nombre, email FROM `$tablename` ";
	echo $query;
	
	$result = mysqli_query($connection, $query);

	if ($result) {
		// Success
		// redirect_to("somepage.php");
		echo "Success!";
	} else {
		// Failure
		// $message = "Subject creation failed";
		die("Database query failed. " . mysqli_error($connection));
	}
	echo "<BR>";
	if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo " - Name: " . $row["nombre"]. " " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}
echo "<br><br>";
?>

<?php
	


  // 5. Close database connection
  mysqli_close($connection);
?>