<!DOCTYPE html>
<html>
<head>
    <title>RenfeLogin</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="resources/images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="resources/css/stylesLogin.css">
    <style>
        .login .backgr-login {
            background-image:url('resources/images/background-login.png');
            background-size:cover;
            background-position:center center;
            background-repeat:no-repeat;
            width:100%;
            height:100vh;
            position:relative;
        }
        .login .backgr-login .text-log {
            position:absolute;
            width:50%;
            bottom:20%;
            right:5%;
        }
        .login .backgr-login .text-log h1 {
            font-weight:500;
            font-size:24px;
            color:#f0e8c0;
            text-align:right;
        }
        .login .backgr-login .text-log h4{
            font-weight:500;
            font-size:24px;
            color:#f0e8c0;
            text-align:right
        }
        @media only screen and (max-width:1640px){
            .login .backgr-login .text-log{width:70%}
        }
        @media only screen and (max-width:1200px){
            .login .backgr-login .text-log{width:90%;bottom:10%}
        }
    </style>
</head>
<body class="login" id="backgr-login" >
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-7 d-none d-lg-block p-0">
            <div class="backgr-login">
                <div class="text-log">
                    <h1>Cuadro de mando de seguimiento de Servicio</h1>
                    <h4>Informes PORTAL ANAL&Iacute;TICO</h4>
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
                <p class="text-center inic-ses pb-2">Inicio de sesi&oacute;n</p>
                <form class="contras-ave" action='j_security_check' method='post'>
                    <div class="form-row">
                        <label class="mb-0" for="j_username">Usuario</label>
                        <input type="text" class="form-control" id="j_username" name="j_username" required>
                    </div>
                    <div class="form-row pt-4 pb-5">
                        <label class="mb-0" for="j_password">Contrase&ntilde;a</label>
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
</body>
</html>