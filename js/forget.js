
const eye = document.querySelector('#feye');
const pass = document.querySelector('#pass');
const eeye = document.querySelector('#fjeye');
const cpass = document.querySelector('#cpass');

email.addEventListener('input', () => {
  email.value = email.value ? email.value.trimStart() : ''; 
})
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
   console.log("hekko",phone)
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

    
  }else{
    document.getElementById('sphone').innerHTML = "";
    document.getElementById('btn').removeAttribute('disabled');
    document.getElementById('phone').style.borderColor = "#ced4da";
    phone_err =true;
  }
  return phone_err;

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

  if(uppe.test(pass)==false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more uppercase";
    document.getElementById('pass').style.borderColor = "red";
    // document.getElementById("btn").disabled = true;
    passwordError = false;

  }
  else if(lower.test(pass)==false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more lowercase";
    document.getElementById('pass').style.borderColor = "red";
    // document.getElementById("btn").disabled = true;
    passwordError = false;

  }
  else if(spe.test(pass)==false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more symbol";
    document.getElementById('pass').style.borderColor = "red";
    // document.getElementById("btn").disabled = true;
    passwordError = false;

  }
   else if(digit.test(pass) == false){
    document.getElementById('spass').innerHTML="Password must contain 1 or more digit";
    document.getElementById('pass').style.borderColor = "red";
    // document.getElementById("btn").disabled = true;
    passwordError = false;
  }
  else if(spattern.test(pass) == false){
    document.getElementById('spass').innerHTML="must be 8 or more characters in length";
    document.getElementById('pass').style.borderColor = "red";
    // document.getElementById("btn").disabled = true;
    passwordError = false;
  }
  else {
    document.getElementById('spass').innerHTML="";
    document.getElementById('pass').style.borderColor = "#ced4da";
    // document.getElementById('btn').removeAttribute('disabled');
    passwordError = true
  }

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
function validatec_pass(){
    var password = document.getElementById("pass").value;
    var confirm_password = document.getElementById("cpass").value; 
    if(password == confirm_password || confirm_password == "" ){

      document.getElementById('scpass').innerHTML = "";
      document.getElementById('cpass').style.borderColor = "red";
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
  var email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(email == ""){

    document.getElementById('semail').innerHTML = "Please fill in this field!";
    document.getElementById("btn").disabled = true;
    document.getElementById('email').style.borderColor = "red";
    emai_err=false;

    
  } 
  else if(email_pattern.test(email) == false){
    document.getElementById('semail').innerHTML="*please enter valid password!!";
    document.getElementById('email').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    emai_err=false;
    
  }
  else if ((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')) {

    document.getElementById('semail').innerHTML="*please enter valid password!!";
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