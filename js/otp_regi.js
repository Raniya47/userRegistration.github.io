function name_ss() {
  var name = document.getElementById('fname').value;
  console.log('fname');

  var npattern = /^[A-Za-z]+$/;


  if(npattern.test(name) == false){
    document.getElementById('username').innerHTML="*please enter valid name!!";
    document.getElementById('fname').style.borderColor = "red";
    document.getElementById("btn").disabled = true;


  }else {
    document.getElementById('username').innerHTML="";
    document.getElementById('fname').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
  }
 
}
function validateLname() {
  var lname = document.getElementById('lname').value;
  console.log('lname');

  var lpattern = /^[A-Za-z]+$/;

  if(lpattern.test(lname) == false){
    document.getElementById('lusername').innerHTML="*please enter valid name!!";
    document.getElementById('lname').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    
  }else {

    document.getElementById('lusername').innerHTML="";
    document.getElementById('lname').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
  }
  