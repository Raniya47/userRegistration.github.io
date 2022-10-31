<?php
    session_start();
    error_reporting(0);
	if(!isset($_SESSION['fname'])){
		header("Location:login_go.php");
	}
    include 'connection.php';
    $id=$_SESSION['id'];
    $emailquery = "SELECT * FROM `register_form_2` where id = '$id' ";
    $query = mysqli_query($conn , $emailquery);
    $eamilcount = mysqli_num_rows($query);
    $result = mysqli_fetch_assoc($query);
 
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

    <title>Dashboard page </title>
  </head>
  <body>
  <section class="vh-100" style="background-color: #508bfc;">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>     
    </ul>
  
      <button class="btn btn-outline-success my-2 my-sm-0" onclick="location.href='logout1.php'" type="submit">Logout</button>
   
  </div>
</nav>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 ">

            <h4 class="mb-3 text-left">Welcome <?php echo $_SESSION['fname']; ?></h4>
            <hr class="my-4">

             <table>
            <tr>
                <th>Name :</th>
                <td><?php echo $result['name'];?></td>
            </tr>
            <tr>
                <th>Gender :</th>
                <td><?php echo $result['gender'];?></td>
            </tr>
            <tr>
                <th>Phone Number :</th>
                <td><?php echo $result['phone_number'];?></td>
            </tr>
            <tr>
                <th>Password :</th>
                <td><?php echo $result['password'];?></td>
            </tr>
            <tr>
                <th>Email :</th>
                <td><?php echo $result['email'];?></td>
            </tr>
            <tr>
                <th>Address :</th>
                <td><?php echo $result['address'];?></td>
            </tr>
            <tr>
                <th>City :</th>
                <td><?php echo $result['city'];?></td>
            </tr>
            <tr>
                <th>State :</th>
                <td><?php echo $result['state'];?></td>
            </tr>
            <tr>
                <th>Country :</th>
                <td><?php echo $result['country'];?></td>
            </tr>
            <tr>
                <th>Pincode :</th>
                <td><?php echo $result['pincode'];?></td>
            </tr>
            <tr>
                <th>Created :</th>
                <td><?php echo $result['created'];?></td>
            </tr>
            <tr>
                <th>Updated :</th>
                <td><?php echo $result['updated'];?></td>
            </tr>

    </table>

            <hr class="my-4">
            <a href='registration1.php?id=<?php echo $result['id'] ?>'><input type='submit' class="btn btn-primary btn-lg btn-block" value='Update' name="update" class='update'/></a>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" ></script>

  </body>
</html>

