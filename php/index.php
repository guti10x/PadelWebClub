
<?php
	session_start();
	if(isset($_SESSION['user'])){
		header('location:../index.html');
		
	}
	

?>
<?php include('header.php'); ?>

<body>

<div class="container">
	<div style="height:200px ;">
	<?php
    echo '<img src="background.jpg";  background-size: cover;
  >';
  ?>
	</div>
    <div class="row" id="loginform">
		
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-primary">
				
                <div class="panel-heading">
                    <h3 class="panel-title"><span class="glyphicon glyphicon-lock"></span> Loguearse
                    	<span class="pull-right"><span class="glyphicon glyphicon-pencil"></span> <a style="text-decoration:none; cursor:pointer; color:white;" id="signup">Registrarse</a></span>
						
                    </h3>
                </div>
            	<div class="panel-body">
                	<form role="form" id="logform">
                    	<fieldset>
                        	<div class="form-group">
                            	<input class="form-control" placeholder="Usuario" name="username" id="username" type="text" autofocus>
                        	</div>
                        	<div class="form-group">
                            	<input class="form-control" placeholder="Contrasena" name="password" id="password" type="password">
                        	</div>
                        	<button type="button" id="loginbutton" class="btn btn-lg btn-primary btn-block"><span class="glyphicon glyphicon-log-in"></span> <span id="logtext">Ingresar</span></button>
                    	</fieldset>
                	</form>
            	</div>
            </div>
        </div>
    </div>

    <div class="row" id="signupform" style="display:none;">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title"><span class="glyphicon glyphicon-pencil"></span> Registrarse
                    	<span class="pull-right"><span class="glyphicon glyphicon-log-in"></span> <a style="text-decoration:none; cursor:pointer; color:white;" id="login">Loguearse</a></span>
                    </h3>
                </div>
            	<div class="panel-body">
                	<form role="form" id="signform">
                    	<fieldset>
                        	<div class="form-group">
                            	<input class="form-control" placeholder="Usuario" name="susername" id="susername" type="text" autofocus>
                        	</div>
                        	<div class="form-group">
                            	<input class="form-control" placeholder="Contrasena" name="spassword" id="spassword" type="password">
                        	</div>
                        	<button type="button" color="red"id="signupbutton" class="btn btn-lg btn-primary btn-block"><span class="glyphicon glyphicon-check"></span> <span id="signtext">Registrarse</span></button>
                    	</fieldset>
                	</form>
            	</div>
            </div>
        </div>
    </div>

    <div id="myalert" style="display:none;">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="alert alert-info">
    			<center><span id="alerttext"></span></center>
    		</div>
   	 	</div>
    </div>
</div>
<script src="custom.js"></script>
</body>
</html>