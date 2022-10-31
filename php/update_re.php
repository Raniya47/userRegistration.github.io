<?php
include 'connection.php';

      $email_err = $phone_err = $name_err = $pass_err = $cpass_err = $sub_msg = $lname_err = $gen_err = $add_err ='';
      $flag = true;
      $ID =$_GET['id'];
      if(isset($_POST['update'])){

         $fname = trim($_POST['fname']);
         $phone = trim($_POST['phone']);
         $email = trim($_POST['email']);
         $password = trim($_POST['password']);
         $cpassword = trim($_POST['cpassword']);

         $emailquery = "SELECT * FROM `register_form_1` where (email = '".$_POST['email']."') ";
         $query = mysqli_query($conn , $emailquery);
         $eamilcount = mysqli_num_rows($query);

         $phonequery = "SELECT * FROM `register_form_1` where (phone_number = '".$_POST['phone']."') ";
         $query1 = mysqli_query($conn , $phonequery);
         $phonecount = mysqli_num_rows($query1);

      if($eamilcount > 0){
         $email_err = "Email already existss.";
         $flag = false;
         echo $email_err;

      } else if($phonecount > 0){
         $phone_err = "Phone_number already existss.";
         $flag = false;
         echo $phone_err;
         
      }
      else {
            if(empty($_POST["fname"])) {
               $name_err = "Name is required";
               $flag = false;
               echo $name_err;  
            }else {
               if (!preg_match("/^[a-zA-Z ]*$/",$fname)) {  
                  $name_err = "Only alphabets and white space are allowed";
                  $flag = false;
                  echo $name_err;
                  } 
            }if(empty($_POST["phone"])) {  
               $phone_err = "Phone no is required";
               $flag = false;
               echo $phone_err;
            }else{ 
               if (!preg_match ("/^[6789][0-9]{9}+$/", $phone) ) {
                  $phone_err = "Not valid number."; 
                  $flag = false; 
                  echo $phone_err;
               }
            }if (empty($_POST["email"])) {
               $email_err = "Email is required";
               $flag = false;
               echo $email_err;
            }else {
               if (!preg_match ("/^[A-Za-z]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $email) ) {  
                  $email_err = "please enter valid email!!";
                  $flag = false;
                  echo $email_err;
                  }  
            }if (empty($_POST["password"])) {  
               $pass_err = "Password is required";
               $flag = false;
               echo $pass_err;
            }else if (!preg_match ("/(?=.*[A-Z])/", $password) ) {  
               $pass_err = "Password must contain 1 or more UPPERCASE."; 
               $flag = false; 
               echo $pass_err;
            }else if (!preg_match ("/(?=.*[a-z])/", $password) ) {  
               $pass_err = "Password must contain 1 or more LOWERCASE.";
               $flag = false;
               echo $pass_err;  
            }else if (!preg_match ("/(?=.*[@#$!%*?&])/", $password) ) {  
               $pass_err = "Password must contain 1 or more SYMBOLS."; 
               $flag = false;
               echo $pass_err; 
            }else if (!preg_match ("/(?=.*\d)/", $password) ) {  
               $pass_err = "Password must contain 1 or more Digit.";
               $flag = false;
               echo $pass_err;  
            }else{ if (!preg_match ("/^(?=.*[@#$!%*?&])[A-Za-z\d@#$!^%*?&]{8,}$/", $password) ) {  
                  $pass_err = "must be 8 or more characters in length";  
                  $flag = false;
                  echo $pass_err;
               }
            }if (empty($_POST["cpassword"])) {  
               $cpass_err = "required";
               $flag = false;
               echo $cpass_err;
            }else {
               if ($_POST["password"] != $_POST["cpassword"]) {  
                  $cpass_err = "Passwords do no match!!"; 
                  $flag = false;
                  echo $cpass_err;
               } 
            }
            if($flag){ 
               $sql = "UPDATE `register_form_1` SET `name`='$fname',`phone_number`='$phone',`email`='$email',`password`='$password' WHERE id = '$ID'"; 
               $res = $conn->query($sql);
               if($res){
                   //echo "<script>alert('Record updated')</script>";
                  echo "Record Update";
                   ?>
                     <meta http-equiv = "refresh" content = "0; url = http://localhost/demo_php/php/display.php" />
                     <!-- <meta http-equiv = "refresh" content = "0; url = https://rani.mimansatech.com/php/display.php" />
 -->

                   <?php
               } else{
                  mysqli_error($conn);
                  echo "failed";
               }
            }
         }

   }
?>