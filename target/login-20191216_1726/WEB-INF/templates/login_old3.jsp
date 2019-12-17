<!DOCTYPE html>
<html>
<head>
    <title>RenfeLogin</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="admin/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="resources/css/stylesLogin.css">
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