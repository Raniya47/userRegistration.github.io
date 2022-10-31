<!DOCTYPE html>
<html lang="en">
    <head>
        <title>login page</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="../css/login.css">
    </head>
    <body>
       <?php include 'login.php';?>
       <div class="login-form">
            <div class="container d-flex align-items-center justify-content-center">
                <div class="row no-gutters align-item-center">
                    <div class="col-md-6 col-xl-6 col-lg-6  col-sm-6 ">
                        <img src="../image/dim.jpg" class="img-fluid">
                    </div>
                    <div class="col-md-6 col-xl-6 col-lg-6 col-sm-6 ">
                        <div class="card p-3 p-md-5 text-center">  
                            <h1 class="text-center lg">Login</h1>
                            <hr>
                            <form id="form" name="myForm" method="post">
                                <div class="position-relative ">
                                    <span class="text-danger span21"><?php echo $Err_msg; ?></span>
                                </div>
                                <div class="form-group position-relative mt-3">
                                    <input type="email  " name="email" id="email" class="form-control pl-5" onkeyup="Semail()" placeholder="E-mail" required>
                                    <i class="fa fa-envelope icon1" aria-hidden="true"></i>
                                    <span id="semail" class=" text-dengar span1 "></span>
                                </div>
                                <div class="form-group position-relative  ">
                                    <i class="fa fa-eye iconposition " aria-hidden="true" id="ieye"></i>
                                    <input type="password" name="password" id="pass" class="form-control pl-5" onkeyup="spassword()" placeholder="Password" required>
                                    <i class=" fa fa-lock icon1" aria-hidden="true"></i>
                                    <span id="spass" class=" text-dengar span1 "></span>
                                    <a href="forget.html" class="d-block text-right mt-2 mm">Forgot password?</a>
                                </div>
                                <input type="submit" name="subb" class="btn btn-primary shadow w-100 mt-2" id="btn1" onclick="submitform()" value="Submit">
                                <!-- <button type="submit" class="btn btn-primary shadow w-100 mt-2" id="btn1" name="subb" onclick="return submitform()">Submit </button> -->
                                <p class="mt-2 mb-0">Or</p>
                                <div class="position-relative google-btn">
                                    <button class="btn shadow w-100 mt-1" disabled>Log in with Google</button>
                                    <i class="fa fa-google" aria-hidden="true"></i>
                                </div>
                                <div class="not_register text-right mt-3 aa ">Not registered yet? <a href="registration1.php" class="bb">Create an account</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="../js/rani.js"></script>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
    </body>
</html>