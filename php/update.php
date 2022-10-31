<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Update data</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" ></script>
      <link rel="stylesheet" href="../css/regifb.css">
      <style>
      </style>
   </head>
   <body>
      <?php include 'update_re.php';
         error_reporting(0);
         //echo $_GET['id'];
         $ID = $_GET['id'];
         $query = "SELECT * FROM `register_form_1` where id='$ID'";
         $data = mysqli_query($conn , $query);
         $total = mysqli_num_rows($data);
         $result = mysqli_fetch_assoc($data);


      ?>
      <div class="login-form">
      <div class="container d-flex align-items-center justify-content-center">
         <div class="row no-gutters align-item-center">
            <div class="col-md-6 col-xl-6 col-lg-6  col-sm-6 ">
               <img src="../image/dim.jpg" class="img-fluid">
            </div>
            <div class="col-md-6 col-xl-6 col-lg-6 col-sm-6 ">
               <div class="card p-3 text-center">
                  <h2 class="text-left mt-5 font-weight-bold text-center">Update</h2>
                  <p class="ml-0 text-left mb-0 text-center">Update your info</p>
                  <hr>
                  <form id="myform" method="POST" onpaste="return false" autocomplete="off">
                     <div class="form-group position-relative">
                        <input type="text" id="fname" value="<?php echo $result['name'];?>" name="fname" class="form-control pl-5 int" onkeyup="validateForm()" placeholder="Name" maxlength="100" minlength="3" required onkeypress = "return  (event.charCode > 96 && event.charCode < 123) || (event.charCode > 64 && event.charCode < 91) || (event.charCode == 32)" pattern="^[A-Za-z\s]+$"/>
                        <i class=" icn fa fa-user-circle-o icon1" aria-hidden="true"></i>
                        <span id="username" class=" text-dengar span1">
                        <?php echo $name_err; ?>
                        </span>
                     </div>
                     <div class="form-group position-relative ">
                        <input type="phone" name="phone" value="<?php echo $result['phone_number'];?>" id="phone" class="form-control  pl-5 int" onkeyup="SSphone()" placeholder="Phone" maxlength="10" required onkeypress = "return  (event.charCode > 46 && event.charCode <= 57)" pattern="[6789][0-9]{9}">
                        <i class=" icn fa fa-phone icon1"></i>
                        <span id="sphone" class=" text-dengar span1">
                        <?php echo $phone_err; ?>
                        </span>
                     </div>
                     <div class="form-group position-relative mt-3">
                        <input type="email" value="<?php echo $result['email'];?>" name="email" maxlength="50" id="email" class="form-control  pl-5 int" onkeyup="SSemail()" placeholder="E-mail" pattern='^[A-Za-z]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' required>
                        <i class=" icn fa fa-envelope icon1"></i>
                        <span id="semail" class=" text-dengar span1">
                        <?php echo $email_err; ?>
                        </span>
                     </div>
                     <div class="form-group position-relative mt-3">
                        <i class="fa fa-eye icon2 " aria-hidden="true" id="ieye" ></i>
                        <input type="password" maxlength="40" name="password" value="<?php echo $result['password'];?>" id="pass" class="form-control  pl-5 int" onkeyup="SSpassword();validate_pass()" placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!^%*?&]{8,}$" required>
                        <i class=" icn fa fa-lock icon1"></i>
                        <span id="spass" class=" text-dengar span1">
                        <?php echo $pass_err; ?>
                        </span>
                     </div>
                     <div class="form-group position-relative mt-3">
                        <i class="fa fa-eye icon2 " aria-hidden="true" id="jeye" ></i>
                        <input type="password" value="<?php echo $result['password'];?>" name="cpassword" id="cpass" class="form-control  pl-5 int" onkeyup="SScpassword()" placeholder="Confirm Password"  required>
                        <i class="icn fa fa-lock icon1"></i>
                        <span id="scpass" class=" text-dengar span1">
                        <?php echo $cpass_err; ?>
                        </span>
                     </div>
                     <input type="submit" name="update" class="btn btn-primary shadow w-100 mt-3" id="btn" onclick="submittedform()" value="Update">
                  </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script src="../js/registration1.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" ></script>
   </body>
</html>