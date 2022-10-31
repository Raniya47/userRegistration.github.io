
const eye = document.querySelector('#ieye');
  const pass = document.querySelector('#pass');
  const email = document.querySelector('#email');


email.addEventListener('input', () => {
  email.value = email.value ? email.value.trimStart() : ''; 
})

  
  eye.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

function Semail(){
  var email_error;
  var email = document.getElementById('email').value;

  var email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  
  if(email == ""){
    document.getElementById('semail').innerHTML="Email must be required";
    document.getElementById('email').style.borderColor = "red";
    // document.getElementById("btn1").disabled = true;

    email_error = false;

  }
  else if(email_pattern.test(email) == false){
    document.getElementById('semail').innerHTML="*please enter valid email!!";
    document.getElementById('email').style.borderColor = "red";
    // document.getElementById("btn1").disabled = true;
    email_error = false;

  }         
  else if ((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')) {

    document.getElementById('semail').innerHTML="*please enter valid email!!";
    document.getElementById('email').style.borderColor = "red";
    email_error = false;

  }
  else {
    document.getElementById('semail').innerHTML="";
    document.getElementById('email').style.borderColor = "#ced4da";
    // document.getElementById('btn1').removeAttribute('disabled');
    email_error = true;


  }
  return email_error;
}

  function spassword() {

    var pass_error;
    var pass = document.getElementById('pass').value;
    if(pass == ""){
      document.getElementById('spass').innerHTML="Password must be required";
      document.getElementById('pass').style.borderColor = "red";
      // document.getElementById("btn1").disabled = true;
      pass_error = false;


    }
    else{
      document.getElementById('spass').innerHTML="";
      document.getElementById('pass').style.borderColor = "#ced4da";
      // document.getElementById('btn1').removeAttribute('disabled');
      pass_error = true;

    }
    return pass_error;
  }

  
 
function submitform(){
    var someerr1 = Semail();
    var someerr2= spassword();
    
    if (someerr1 == true && someerr2 == true){
       document.getElementById('btn1').submit();
       return true;
      

     
    } 
    else{
      // console.log('else');
      // document.getElementById("btn1").disabled = true;
      return false;

    }

   
  }

  