<?php
	include('conn.php');
	if(isset($_POST['susername'])){
		$username=$_POST['susername'];
		$password=$_POST['spassword'];

		$query=$conn->query("select * from user where username='$username'");

		if ($query->num_rows>0){
			?>
  				<span>El nombre de usuario ya existe.</span>
  			<?php 
		}

		elseif (!preg_match("/^[a-zA-Z0-9_]*$/",$username)){
			?>
  				<span style="font-size:11px;">Username incorrecto!</span>
  			<?php 
		}
		elseif (!preg_match("/^[a-zA-Z0-9_]*$/",$password)){
			?>
  				<span style="font-size:11px;">Contrasena incorrecta!</span>
  			<?php 
		}
		else{
			$mpassword=md5($password);
			$conn->query("insert into user (username, password) values ('$username', '$mpassword')");
			?>
  				<span>registro exitoso</span>
				
  			<?php 
		}
	}
?>