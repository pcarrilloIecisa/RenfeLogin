<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>RenfeLogin</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="admin/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="admin/resources/css/stylesLogin.css">
</head>
<body>
<main class="login">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7 d-none d-lg-block p-0">
                <div class="backgr-login">
                    <div class="text-log">
                        <h1>Cuadro de mando de seguimiento de Servicio</h1>
                        <h4>Informes PORTAL ANALITICO</h4>
                    </div>
                </div>
            </div>
            <div id="jumbo-login" class="col-lg-5 d-flex login-ave">
                <div id="container-login" class="conten-log">
                    <div class="row pb-5">
                        <div class="col-6 d-flex justify-content-end">
                            <img src="admin/resources/assets/images/renfe-logo.png" alt="">
                        </div>
                        <div class="col-6">
                            <img src="admin/resources/assets/images/play-renfe-logo.png" alt="">
                        </div>
                    </div>
                    <p class="text-center inic-ses pb-2">Inicio de sesión</p>
                    <form class="contras-ave" action='j_security_check' method='post'>
                        <div class="form-row">
                            <label class="mb-0" for="j_username">Usuario</label>
                            <input type="text" class="form-control" id="j_username" name="j_username" required>
                        </div>
                        <div class="form-row pt-4 pb-5">
                            <label class="mb-0" for="j_password">Contraseña</label>
                            <input type="password" class="form-control" id="j_password" name="j_password" required>
                        </div>
                        <div class="w-100  pt-5 d-flex">
                            <button id="login-button" class="btn btn-primary m-auto" type="submit">ACCESO</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
</body>
</html>