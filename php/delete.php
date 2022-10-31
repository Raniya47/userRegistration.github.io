<?php
	include 'connection.php';
	$ID =$_GET['id'];
	$query = "DELETE FROM `register_form_1` WHERE id=$ID";
	$data = mysqli_query($conn,$query);
	if($data){
		echo "Record Deleted";
		?>
           <meta http-equiv = "refresh" content = "0; url = http://localhost/demo_php/php/display.php" />
                     <!-- <meta http-equiv = "refresh" content = "0; url = https://rani.mimansatech.com/php/display.php" /> -->
        <?php
	}
	else{
		echo "Failed to Delete";
	}
?>