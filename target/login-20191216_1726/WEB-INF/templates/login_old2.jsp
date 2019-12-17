<!DOCTYPE html>
<html>
<head>
    <title>RenfeLogin</title>
    <meta charset="utf-8">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="resources/css/styles.css">
</head>

<body id="background-login">
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
        <div  id="jumbo-login" class="col-lg-5 d-flex login-ave">
            <div id="container-login" class="conten-log">
                <div class="row pb-5">
                    <div class="col-6 d-flex justify-content-end">
                        <img src="resources/images/renfe-logo.png" alt="">
                    </div>
                    <div class="col-6">
                        <img src="resources/images/play-renfe-logo.png" alt="">
                    </div>
                </div>
                <p class="text-center inic-ses pb-2">Inicio de sesión</p>
                <form class="contras-ave" action='j_security_check' method='post'>

                    <div class="form-row">
                        <label class="mb-0" for="j_username">Usuario</label>
                        <input type="text" class="form-control" id="j_username" name="j_username">
                    </div>
                    <div class="form-row pt-4 pb-5">
                        <label class="mb-0" for="j_password">Contraseña</label>
                        <input type="password" class="form-control" id="j_password" name="j_password">
                    </div>
                    <div class="w-100  pt-5 d-flex">
                        <button id="login-button" class="btn btn-primary m-auto" type="submit">ACCESO</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</body>

</html>