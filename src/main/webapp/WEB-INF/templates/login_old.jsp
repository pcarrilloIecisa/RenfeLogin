<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta charset="utf-8">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="admin/resources/css/styles.a9e726e99285e5511939.css" rel="stylesheet">
</head>
<body id="background-login">	
		<div class="col-md-6 col-xs-6 col-sm-6 col-xl-6 col-md-offset-4 col-xs-offset-4 col-sm-offset-4 col-xl-offset-4">
			<div class="jumbotron" id="jumbo-login">
				<br>
				<div class="container" id="container-login">
					<form action='j_security_check' method='post' class="mt">

						<label for="" class="text-uppercase text-sm">Usuario</label>
						<input type="text" placeholder="Usuario" name='j_username'
							class="form-control mb" autofocus>
						<br>
						<label for="" class="text-uppercase text-sm">Contraseña</label>
						<input type="password" placeholder="Contraseña" name='j_password'
							class="form-control mb">
						<button class="btn btn-primary btn-block" type="submit">LOGARSE</button>
					</form>
				</div>
			</div>
		</div>
</body>
</html>