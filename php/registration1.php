<!DOCTYPE html>
<html lang="en">
   <head>
      <title><?php error_reporting(0); echo ($_GET['id'])  ? "Update -Form" : "Registration-Form";  ?></title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
      <link rel="stylesheet" href="../css/login1.css">
      <style>
      </style>
   </head>
   <body>
      <?php include 'register2.php';
         error_reporting(0);
         $ID = $_GET['id'];
         $query = "SELECT * FROM `register_form_2` where id='$ID'";
         $data = mysqli_query($conn , $query);
         $total = mysqli_num_rows($data);
         $result = mysqli_fetch_assoc($data);
      ?>
      <div class="login-form">
         <div class="container d-flex align-items-center justify-content-center dsa">
            <div class="row no-gutters align-item-center">
               <div class="col-md-6 col-xl-6 col-lg-6  d-md-block d-lg-block d-xl-block d-sm-none ">
                  <img src="../image/dim.jpg" class="img-fluid">
               </div>
               <div class="col-md-6 col-xl-6 col-lg-6 col-sm-12 nee">
                  <div class="card p-3 text-center position-relative">
                     <h1 class="text-left mt-3 font-weight-bold text-center"><?php echo ($_GET['id'])  ? "Update-form" : "Sign-up";  ?></h1>
                     <p class="ml-0 text-left mb-0 text-center "><?php echo ($_GET['id'])  ? "Update your info" : "Please fill in this form to create an account";  ?></p>
                     <hr>
                     <form  name="form" id="myForm" method="post" autocomplete="off" onpaste="return false">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <input type="text" value="<?php echo $result['name'];?>" id="fname"  onkeyup="validateForm()" class="form-control input-field pl-5 int" placeholder="First Name" required="" minlength="3" maxlength="50" name="fname" pattern="^[A-Za-z\s]+$" onkeypress="return  (event.charCode > 96 &amp;&amp; event.charCode < 123) || (event.charCode > 64 &amp;&amp; event.charCode < 91) || (event.charCode == 32)" />
                                 <i class="icn icn fa fa-user-circle-o icon1" aria-hidden="true"></i>
                                 <span id="username" class=" text-dengar span1">
                                 <?php echo $name_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <input type="text" id="lname"  onkeyup="validateLname()" class="form-control input-field pl-5 int" placeholder="Last Name" required="" minlength="3" maxlength="50"  name="lname" pattern="^[A-Za-z\s]+$" onkeypress = "return  (event.charCode > 96 && event.charCode < 123) || (event.charCode > 64 && event.charCode < 91) || (event.charCode == 32)"/>
                                 <i class="icn fa fa-user-circle-o icon1" aria-hidden="true"></i>
                                 <span id="lusername" class=" text-dengar span1">
                                 <?php echo $lname_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <select class="form-control pl-5 int " onchange="SSgender()" id="gen_font" required="" name="gender" >
                                    <option selected disabled value="" >Select gender</option>
                                    <option  value="Male" <?php 
                                       if($result['gender']=='Male')
                                       {
                                          echo "selected";
                                       }  
                                       ?>
                                       >Male</option>
                                    <option  value="Female" <?php 
                                       if($result['gender']=='Female')
                                       {
                                          echo "selected";
                                       }
                                       ?>
                                       >Female</option>
                                    <option  value="Other" <?php 
                                       if($result['gender']=='Other')
                                       {
                                          echo "selected";
                                       }
                                       ?>
                                       >Other</option>
                                 </select>
                                 <i class="icn fa fa-venus-mars icon1" aria-hidden="true"></i>
                                 <span id="sgender" class=" text-dengar span1">
                                 <?php echo $gen_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <input type="text" id="phone" value="<?php echo $result['phone_number'];?>" onkeyup="SSphone()" class="form-control input-field pl-5 int inp" maxlength="10" placeholder="Phone" maxlength="10" required="" name="phone" pattern="[6789][0-9]{9}" />
                                 <i class="icn fa fa-phone icon1" aria-hidden="true"></i>
                                 <span id="sphone" class=" text-dengar span1 ">
                                 <?php echo $phone_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container position-relative">
                                 <i class="fa fa-eye iconposition " aria-hidden="true" id="ieye" ></i>
                                 <input type="password" value="<?php echo $result['password'];?>" maxlength="40" id="pass" onkeyup="SSpassword();validate_pass()"  class="form-control input-field pl-5 int" placeholder="Password" name="password" required="" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!^%*?&]{8,}$" />
                                 <i class="icn fa fa-lock icon1" aria-hidden="true"></i>
                                 <span id="spass" class=" text-dangar span1 ">
                                 <?php echo $pass_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <!-- <i class="fa fa-eye iconposition " aria-hidden="true" id="jeye" ></i> -->
                                 <input type="password" value="<?php echo $result['password'];?>" id="cpass" name="cpassword" onkeyup="SScpassword()" class="form-control input-field pl-5 int" placeholder="Confirm Password" required=""/>
                                 <i class="icn fa fa-lock icon1" aria-hidden="true"></i>
                                 <span id="scpass" class=" text-dengar span1 ">
                                 <?php echo $cpass_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group position-relative">
                                 <input type="email" maxlength="50" id="email" name="email" value="<?php echo $result['email'];?>" onkeyup="SSemail()" class="form-control pl-5 int" placeholder="E-mail" required=""  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" />
                                 <i class="icn fa fa-envelope icon1" aria-hidden="true"></i>
                                 <span id="semail" class=" text-dengar span1 ">
                                 <?php echo $email_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group position-relative">
                                 <input type="text" value="<?php echo $result['address'];?>" id="add" onkeyup="Validate_add()" class="form-control pl-5 int" placeholder="Address" required="" maxlength="100"  name="address" />
                                 <i class="icn fa fa-home icon1" aria-hidden="true"></i>
                                 <span id="sadd" class=" text-dengar span1 ">
                                 <?php echo $add_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group position-relative">
                                 <input type="text" value="<?php echo $result['pincode'];?>" id="pin" onfocusout ="getData()" onkeyup="SSpin()" class="form-control pl-5 int" placeholder="Pincode" required="" maxlength="6" name="pin" pattern="^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$" />
                                 <i class="icn fa fa-map-marker icon1" aria-hidden="true"></i>
                                 <span id="spin" class=" text-dengar span1 ">
                                 <?php echo $pin_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <input type="text" value="<?php echo $result['city'];?>" id="city" maxlength="90" class="form-control input-field pl-5 int" placeholder="City" required="" readonly name="city"/>
                                 <i class="icn fa fa-map-marker icon1" aria-hidden="true"></i>
                                 <span id="scity" class=" text-dengar span1  ">
                                 <?php echo $city_err; ?>
                                 </span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <input type="text" value="<?php echo $result['state'];?>" name="state" id="state" maxlength="55" class="form-control input-field pl-5 int" placeholder="State" required="" readonly />
                                 <i class="icn fa fa-map-marker icon1" aria-hidden="true"></i>
                                 <span id="state1" class=" text-dengar span1 "></span>
                                 <?php echo $state_err; ?>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group input-container">
                                 <input type="text" value="<?php echo $result['country'];?>" name="country" id="country" maxlength="60" class="form-control input-field pl-5 int" placeholder="Country" required="" readonly />
                                 <i class="icn fa fa-map-marker icon1" aria-hidden="true"></i>
                                 <span id="scountry" class=" text-dengar span1 "></span>
                                 <?php echo $country_err; ?>
                              </div>
                           </div>
                        </div>
                        <input type="submit" name="sub1" class="btn btn-primary shadow w-100 mt-3" id="btn" onclick="submit_form()" value=<?php echo ($_GET['id'])  ? "UPDATE" : "REGISTER";  ?>>
                        <div class="not_register text-right mt-2 mb-2 aa ">Already have an account? <a href="login_go.php" class="bb">Login</a></div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script src="../js/registration.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>
   </body>
</html>