<?php
      session_start();
      if(isset($_SESSION['fname'])){
            header("Location:H_page.php");
      }

      include 'connection.php';
      $Success_err = $Err_msg = '';
      if(isset($_POST['subb'])){
            $email = $_POST['email'];
            $password = $_POST['password'];
            
            $emailquery = "SELECT * FROM `register_form_2` where (email = '".$_POST['email']."') ";
            $query = mysqli_query($conn , $emailquery);
            $eamilcount = mysqli_num_rows($query);
            $result = mysqli_fetch_assoc($query);
            


            $pass_query = "SELECT * FROM `register_form_2` where (password = '".$_POST['password']."') ";
            $query1 = mysqli_query($conn , $pass_query);
            $pass_count = mysqli_num_rows($query1);

            if($eamilcount > 0 and $pass_count > 0){
                  //$_SESSION['id']= $result['id'];
                  $_SESSION['fname']= $result['name'];
                  $_SESSION['id']= $result['id'];
                  
                  // $Success_err = "Welcome ";
                  header("Location:H_page.php?id=$result[id]");
            }else{
                  $Err_msg ="Email or password is wrong!!";
            }              
      }
?>
