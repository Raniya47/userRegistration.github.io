const eye = document.querySelector('#ieye');
const pass = document.querySelector('#pass');
const eeye = document.querySelector('#jeye');
const cpass = document.querySelector('#cpass');
const email = document.querySelector('#email');

fname.addEventListener('input', () => {
  if (fname.value.indexOf("  ") != -1) {
    fname.value = fname.value.replace("  ", " ");
  }else if (fname.value.indexOf(".") != -1){
    fname.value = fname.value.replace(".", "");
  }
    fname.value = fname.value ? fname.value.trimStart() : ''; 
    // fname.value = fname.value ? fname.value.trimEnd() : ''
})

email.addEventListener('input', () => {
  email.value = email.value ? email.value.trimStart() : ''; 
})

$(function() {
  $('#email').on('keypress', function(e) {
    if (e.which == 32){
      return false;
    }
  });
});

pass.addEventListener('input', () => {
  pass.value = pass.value ? pass.value.trimStart() : ''; 
})

eye.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
  });

eeye.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = cpass.getAttribute('type') === 'password' ? 'text' : 'password';
    cpass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
  });
//============================forgot eye==============  
function SSphone(){
  var phone_err;
  var phone = document.getElementById('phone').value;
  var pattern = /[6789][0-9]{9}/; 
  if(phone == ""){

    document.getElementById('sphone').innerHTML = "Please fill in this field!";
    document.getElementById("btn").disabled = true;
    document.getElementById('phone').style.borderColor = "red";
    phone_err = false;

    
  } 
  else if(pattern.test(phone) == false){

    document.getElementById('sphone').innerHTML = "Not valid number";
    document.getElementById("btn").disabled = true;
    document.getElementById('phone').style.borderColor = "red";
    phone_err = false;

    
  }
  else{
    document.getElementById('sphone').innerHTML = "";
    document.getElementById('btn').removeAttribute('disabled');
    document.getElementById('phone').style.borderColor = "#ced4da";
    phone_err =true;
  }
  return phone_err;

}

function validateForm() {
  var name_err;
  var name = document.getElementById('fname').value;

  var npattern = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
  if(name == ""){
    document.getElementById('username').innerHTML = "Please fill in this field!";
    document.getElementById("btn").disabled = true;
    document.getElementById('fname').style.borderColor = "red";
    name_err=false;
  } 
  else if(npattern.test(name) == false){
    document.getElementById('username').innerHTML="*please enter valid name!!";
    document.getElementById('fname').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    name_err=false;
  }
  else {
    document.getElementById('username').innerHTML="";
    document.getElementById('fname').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    name_err=true;
  }
 return name_err;
}




//   //----------------------------------
function SSpassword() {
  var passwordError;
  var cpass = document.getElementById('cpass').value;
  var pass = document.getElementById('pass').value;

  var uppe =/(?=.*[A-Z])/;
  var lower =/(?=.*[a-z])/;
  var spe =/(?=.*[@#$!%*?&])/;
  var digit=/(?=.*\d)/;
  var spattern=/^(?=.*[@#$!%*?&])[A-Za-z\d@#$!^%*?&]{8,}$/;
  
  if(pass == ""){
    document.getElementById('spass').innerHTML="required";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    passwordError = false;
  }

  else if(uppe.test(pass)==false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more uppercase";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    passwordError = false;

  }
  else if(lower.test(pass)==false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more lowercase";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    passwordError = false;

  }
  else if(spe.test(pass)==false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more symbol";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    passwordError = false;

  }
   else if(digit.test(pass) == false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more digit";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    passwordError = false;
  }
  else if(spattern.test(pass) == false){
    document.getElementById('spass').innerHTML="must be 8 or more characters in length";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    passwordError = false;
  }
  else {
    document.getElementById('spass').innerHTML="";
    document.getElementById('pass').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    passwordError = true
  }
  // if (pass==cpass) {

  //   document.getElementById("scpass").innerHTML = "";
  //   document.getElementById('cpass').style.borderColor = "#ced4da";
  //   confirmPasswordError=true
  // } else {
  //   document.getElementById('cpass').style.borderColor = 'red';
  //   document.getElementById('scpass').innerHTML="*not match!!";
  //   confirmPasswordError=false;
  // }
  

  return passwordError;
}
//   //--------------------------------------------
function SScpassword() {
  var pass_err1;

  var cpass = document.getElementById('cpass').value;
  var pass = document.getElementById('pass').value;


if(cpass == ""){

    document.getElementById('scpass').innerHTML = "Please fill in this field!";
    document.getElementById("btn").disabled = true;
    document.getElementById('cpass').style.borderColor = "red";
    pass_err1=false;

    
  } 
  else if (cpass != pass){

    document.getElementById('scpass').innerHTML="*not match!!";
    document.getElementById('cpass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    pass_err1=false;

  }
  else {
    document.getElementById("scpass").innerHTML = "";
    document.getElementById('cpass').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    pass_err1=true;

  }
  return pass_err1;
}
//=====
function validate_pass(){
    var password = document.getElementById("pass").value;
    var confirm_password = document.getElementById("cpass").value; 
    if(password == confirm_password || confirm_password == "" ){

      document.getElementById('scpass').innerHTML = "";
      // document.getElementById('cpass').style.borderColor = "red";
      document.getElementById('scpass').style.color = "";
      return true;
    }
    else{
      document.getElementById('scpass').innerHTML = "not match";
      document.getElementById('cpass').style.borderColor = "#ced4da";
      document.getElementById('scpass').style.color = "red";
      return false;
    }
  }
//   //------------------------------------------
function SSemail(){
  var emai_err;
  var email = document.getElementById('email').value;

  var email_pattern = /^[a-z]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email == ""){

    document.getElementById('semail').innerHTML = "Please fill in this field!";
    document.getElementById("btn").disabled = true;
    document.getElementById('email').style.borderColor = "red";
    emai_err=false;

    
  } 
  else if(email_pattern.test(email) == false){
    document.getElementById('semail').innerHTML="*please enter valid email!!";
    document.getElementById('email').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    emai_err=false;
    
  }
 
  else {
    document.getElementById('semail').innerHTML="";
    document.getElementById('email').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    emai_err=true;
  }
  return emai_err;
}

  function submitform() {
    var form = document.getElementById("form");
    console.log('valid', form.checkValidity());
    document.getElementById("btn").disabled = !form.checkValidity();
}


function submittedform() {
  var someerr1 = SSphone(); 
  var someerr2= validateForm();
  
  var someerr4=  SSpassword();
  var someerr5=  SScpassword();
  var someerr6=  SSemail();
  console.log('someerr1',someerr1);
  console.log('someerr2',someerr2);
  console.log('someerr4',someerr4);
  console.log('someerr5',someerr5);
  console.log('someerr6',someerr6);
  
  if (someerr1 ==true && someerr2 == true  && someerr4 == true && someerr5 == true && someerr6 == true )
  {
    document.getElementById('btn').removeAttribute('disabled');
    document.getElementById('myform').submit();
    // window.location='login_go.html';
    
  }
  else {
    document.getElementById("btn").disabled = true;

  }
  }
//-----------------/first method for otp/---------
  // function clickEvent(first,last){
  //     if(first.value.length){
  //       document.getElementById(last).focus();
  //     }
  //   }
  
//-----------------/second yway for otp/---------

//   var myotp =document.querySelectorAll(".otp1");
//   for (var i=0;i<myotp.length; i++){
//     myotp[i].addEventListener("keyup",function(){

//     this.nextElementSibling.focus();
//   })
//   }
//   for (var i=0;i<myotp.length; i++){
//     myotp[i].addEventListener("keyup",function(){

//     this.nextElementSibling.focus();
//   })
//   }
//   if (event.inputType === 'deleteContentBackward' && event.target.value === '') {
//     this.previousElementSibling.focus();
// }
//-----------------/third way for otp/---------

function move(e,prev,cur,next) {
  var length = document.getElementById(cur).value.length;
  var maxlength = document.getElementById(cur).getAttribute("maxlength");
  if(length == maxlength){
    if(next !== ""){
    document.getElementById(next).focus();
    }
  }
  if(e.key == 'Backspace'){
    if(prev !== ""){
    document.getElementById(prev).focus();
    }

  }

}

function for_pass() {
  var phone_err = SSphone();
  var emaill_err=  SSemail();
  if(someerr1 ==true && emaill_err==true){
    return true;
  }
  else{
    return false
  }
  
}

function new_pass() {
    var pass_er=  SSpassword();
  var cpass_er=  SScpassword();
  if(pass_er ==true && cpass_er==true){
    return true;
  }
  else{
    return false
  }
  
}