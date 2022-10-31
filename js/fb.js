function Sbemail(){
  var email = document.getElementById('email_fb').value;
  var email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email_pattern.test(email) == false){
    document.getElementById('semail').innerHTML="*please enter valid password!!";
    document.getElementById('email_fb').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    
  }
  else if(email == ""){
    document.getElementById('spass').innerHTML="required!!";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
  }
  else if ((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')) {

    document.getElementById('semail').innerHTML="*please enter valid password!!";
    document.getElementById('email_fb').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
  }
  else {
    document.getElementById('semail').innerHTML="";
    document.getElementById('email_fb').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
  }
  
}

const eye = document.querySelector('#ieye');
  const pass = document.querySelector('#pass');
  
  eye.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

function SBpassword() {

  var pass = document.getElementById('pass').value;
  if(pass == ""){
    document.getElementById('spass').innerHTML="required!!";
    document.getElementById('pass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    
  }else {
    document.getElementById('spass').innerHTML="";
    document.getElementById('pass').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
  }

}


