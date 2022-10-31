<?php
   include 'connection.php';
   $email_err = $phone_err = $name_err = $pass_err = $cpass_err = $sub_msg = $lname_err = $gen_err = $add_err = $pin_err = $city_err = $country_err =$state_err = '';

   $ID =$_GET['id'];
   $flag = true;
   if(isset($_POST['sub1'])){
      $fname = trim($_POST['fname']);
      $lname = trim($_POST['lname']);
      $gender = trim($_POST['gender']);
      $phone = trim($_POST['phone']);
      $email = trim($_POST['email']);
      $password = trim($_POST['password']);
      $cpassword = trim($_POST['cpassword']);
      $address = trim($_POST['address']);
      $pincode = trim($_POST['pin']);
      $city = trim($_POST['city']);
      $state = trim($_POST['state']);
      $country = trim($_POST['country']);

      $emailquery = "SELECT * FROM `register_form_2` where (email = '".$email."') ";
      $query = mysqli_query($conn , $emailquery);
      $eamilcount = mysqli_num_rows($query);

      $phonequery = "SELECT * FROM `register_form_2` where (phone_number = '".$phone."') ";
      $query1 = mysqli_query($conn , $phonequery);
      $phonecount = mysqli_num_rows($query1);

      if($eamilcount > 0){
         $email_err = "Email already existss.";
         $flag = false;
         echo $email_err;
      }else if($phonecount > 0){
         $phone_err = "Phone_number already existss.";
         $flag = false;
         echo $phone_err;
      }
      else {
            if(empty($_POST["fname"])) {
               $name_err = "first name is required";
               $flag = false;  
               echo $name_err;
            }else {
               if (!preg_match("/^[a-zA-Z ]*$/",$fname)) {  
                  $name_err = "Only alphabets and white space are allowed";
                  $flag = false;  
                  echo $name_err;
               }
            }
            if(empty($_POST["lname"])) {
               $lname_err = "last name is required"; 
               $flag = false; 
               echo $lname_err;
            }else {
               if (!preg_match("/^[a-zA-Z ]*$/",$lname)) {  
                  $lname_err = "Only alphabets and white space are allowed"; 
                  $flag = false; 
                  echo $lname_err;
               }
            }
            if (empty($_POST["gender"])) {  
               $gen_err = "Gender is required";
               $flag = false; 
               echo $gen_err;
            }else{
               if ($gender != "Male" && $gender != "Female" && $gender != "Other") {  
               $gen_err = "Gender ds is required";
               $flag = false; 
               echo $gen_err;
            }
            }
            if(empty($_POST["phone"])) {  
               $phone_err = "Phone no is required";
               $flag = false;
               echo $phone_err;
            }else{ 
               if (!preg_match ("/^[6789][0-9]{9}+$/",$phone) ) {
                  $phone_err = "Not valid number."; 
                  $flag = false;
                  echo $phone_err; 
               }
            }
            if (empty($_POST["email"])) {
               $email_err = "Email is required";
               $flag = false;
               echo $email_err;
            }else{ 
               if (!preg_match ("/^[a-z]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",$email) ) {  
                  $email_err = "please enter valid email!!"; 
                  $flag = false; 
                  echo $email_err;
               }
            }
            if (empty($_POST["password"])) {  
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
            }else {
               if (!preg_match ("/^(?=.*[@#$!%*?&])[A-Za-z\d@#$!^%*?&]{8,}$/", $password) ) {  
                  $pass_err = "must be 8 or more characters in length"; 
                  $flag = false; 
                  echo $pass_err;
               }
            }
            if (empty($_POST["cpassword"])) {  
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
            if(empty($_POST["address"])) {
               $add_err = "last name is required";
               $flag = false;
               echo $add_err;
            }
            if(empty($_POST["pin"])) {
                  $pin_err = "*required"; 
                  $flag = false; 
                  echo $pin_err;
            }else{
               if (!preg_match("/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/",$pincode)) {  
                  $pin_err = "Not valid pincode"; 
                  $flag = false; 
                  echo $pin_err;
                  }  
            }
            if(empty($_POST["city"])) {
               $city_err = "*required"; 
               $flag = false; 
               echo $city_err;
            }else {
               if (!preg_match("/^[a-zA-Z ]*$/", $city)) {  
                  $city_err = "Not valid city"; 
                  $flag = false; 
                  echo $city_err;
                  }  
            }
            if(empty($_POST["state"])) {
               $state_err = "*required"; 
               $flag = false; 
               echo $state_err;
            }else{
               if (!preg_match("/^[a-zA-Z ]*$/",$state)) {  
                  $state_err = "Not valid state name"; 
                  $flag = false; 
                  
                  echo $state_err;
                  }  
            }
            if(empty($_POST["country"])) {
               $country_err = "*required"; 
               $flag = false; 
               echo $country_err;
            }else{ 
               if (!preg_match("/^[a-zA-Z ]*$/",$country)) {  
                  $country_err = "Not valid country name"; 
                  $flag = false; 
                  echo $country_err;
               }  
            }
            if($flag){
               if(isset($_GET['id']) && isset($_POST['sub1'])){
                  $sql1 = "UPDATE `register_form_2` SET `name`='$fname' ' ' '$lname',`gender`='$gender',`phone_number`='$phone',`password`='$password',`email`='$email',`address`='$address',`pincode`='$pincode',`city`='$city',`state`='$state',`country`='country' WHERE id = '$ID'";
                  $res1 = $conn->query($sql1);
                     if($res1){
                        header("Location:H_page.php");
                     
                     } else{
                        mysqli_error($conn);
                        echo "failed";
                     }
               }
               else{
                  $sql1 = "INSERT INTO `register_form_2`(`name`, `gender`, `phone_number`, `password`, `email`, `address`, `pincode`, `city`, `state`, `country`) VALUES ('$fname' ' ' '$lname','$gender','$phone', '$password', '$email', '$address', '$pincode', '$city', '$state', '$country')";
               
   
                  $res1 = $conn->query($sql1); 
                  if($res1){
                      header("Location:login_go.php");
                    
                  } else{
                     mysqli_error($conn);
                  }

               }  
         }
      }
   }

?>

