<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Admin dashboard</title>
	<style>
		body{
			/*background: #D071f9;*/
			background-image: url("../image/back.jpg");
		}
		table{
			background: white;
		}
		h2{
			color: white;
			text-align: center;
		}
		.update, .delete, .add_user{
			background-color:#3D8361 ;
			color: white;
			border: 0;
			outline: none;
			border-radius: 5px;
			height: 25px;
			width: 88px;
			font-weight: bold;
			cursor: pointer;
		}
		.delete{
			background-color: red;
		}
		.add_user{

			height: 35px;
			width: 120px;
			margin-bottom: 10px;
		}
		.add_btn{
			margin-left: 22px;

		}
	</style>
</head>
<body>

</body>
</html>
<?php
	include 'connection.php';
	error_reporting(0);
	$ID =$_GET['id'];
	$query = "SELECT * FROM `register_form_2`";
	$data = mysqli_query($conn , $query);
	$total = mysqli_num_rows($data);
	//echo $total;
	$result = mysqli_fetch_assoc($data);
	//echo $result['name'];
	//echo $result['id'];

	if($total > 0){
		?>
		
			<h2><u><b>Displaying User details</b></u></h2>
			
			<button type="button" class="add_btn add_user" onclick="location.href='registration1.php'">+ Add new user</button>
			<center>
			<table border="1" cellspacing="7" width="95%">
			<tr>
				<th width="5%">Id</th>
				<th width="10%">Name</th>
				<th width="10%">Gender</th>
				<th width="10%">Phone Number</th>
				<th width="10%">Email</th>
				<th width="10%">Password</th>
				<th width="5%">Address</th>
				<th width="10%">City</th>
				<th width="10%">State</th>
				<th width="10%">Country</th>
				<th width="5%">Created</th>
				<th width="10%">Operation</th>
			</tr>
		<?php
		while($result = mysqli_fetch_assoc($data)){
			echo "
				<tr>
				<td>".$result['id']."</td>
				<td>".$result['name']."</td>
				<td>".$result['gender']."</td>
				<td>".$result['phone_number']."</td>
				<td>".$result['email']."</td>
				<td>".$result['password']."</td>
				<td>".$result['address']."</td>
				<td>".$result['city']."</td>
				<td>".$result['state']."</td>
				<td>".$result['country']."</td>
				<td>".$result['created']."</td>
				<td><a href='update.php?id=$result[id]'><input type='submit' value='Update' class='update'/></a>

					<a href='delete.php?id=$result[id]'><input type='submit' value='Delete' class='delete' onclick = 'return checkdelete()'/></a>
				</td>

				</tr>";
			}
	
	}else{
		echo "No records found.";
	}

?>
</table>
</center>
<script >
	function checkdelete() {
		return confirm('Are you sure you want to delete this record?');
	}
</script>