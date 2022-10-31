
$(function() {
  $("input[name='fname']").on('input', function(e) {
    $(this).val($(this).val().replace(/[^A-Za-z]/g, ''));
  });
});



$(function() {
  $("input[name='phone']").on('input', function(e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
});


$(function() {
  $("input[name='pin']").on('input', function(e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
});
//-------address-----
$(function() {
    $("input[id='add']").on('input', function(e) {
        console.log('==>', $(this).val().charAt(3))
        if ($(this).val().indexOf("  ") != -1) {
            $(this).val($(this).val().replace("  ", " "));
            // $(this).val($(this).val().replace(".", ""));
        } else {
            $(this).val($(this).val().replace(".", ""));
        }
        
    });
});

//------------------
$(function() {
    $("input[id='lname']").on('input', function(e) {
        // console.log('==>', $(this).val().charAt(3))
        if ($(this).val().indexOf("  ") != -1) {
            $(this).val($(this).val().replace("  ", " "));
            // $(this).val($(this).val().replace(".", ""));
        } else {
            $(this).val($(this).val().replace(".", ""));
        }
        
    });
});


const eye = document.querySelector('#ieye');
const pass = document.querySelector('#pass');

const lname = document.querySelector('#lname');
const fname = document.querySelector('#fname');
const email = document.querySelector('#email');
const state = document.querySelector('#state');
const add = document.querySelector('#add');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const phone = document.querySelector('#phone');


phone.addEventListener('input', () => {
  phone.value = phone.value ? phone.value.trimStart() : ''; 
})

pass.addEventListener('input', () => {
  pass.value = pass.value ? pass.value.trimStart() : ''; 
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
state.addEventListener('input', () => {
  state.value = state.value ? state.value.trimStart() : ''; 
})
add.addEventListener('input', () => {
  add.value = add.value ? add.value.trimStart() : ''; 
})
city.addEventListener('input', () => {
  city.value = city.value ? city.value.trimStart() : ''; 
})
country.addEventListener('input', () => {
  country.value = country.value ? country.value.trimStart() : ''; 
})

lname.addEventListener('input', () => {
  lname.value = lname.value ? lname.value.trimStart() : ''; 
})

fname.addEventListener('input', () => {
  fname.value = fname.value ? fname.value.trimStart() : ''; 
  fname.value = fname.value ? fname.value.trimEnd() : ''
})

eye.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
  });


//=====================================


  // ---------------------------------------phone validation----------------------------------------//
  function SSphone(){
    var phoneError;
    var phone = document.getElementById('phone').value;
    var pattern = /[6789][0-9]{9}/;
    
     if(phone==""){

      document.getElementById('sphone').innerHTML = "@required";
      document.getElementById("btn").disabled = true;
      document.getElementById('phone').style.borderColor = "red";
      phoneError = false;
      
    }

    else if(pattern.test(phone) == false){

      document.getElementById('sphone').innerHTML = "Not valid number";
      document.getElementById("btn").disabled = true;
      document.getElementById('phone').style.borderColor = "red";
      phoneError = false;

      
    }
    else{
      document.getElementById('sphone').innerHTML = "";
    document.getElementById('btn').removeAttribute('disabled');
    document.getElementById('phone').style.borderColor = "#ced4da";
    phoneError = true;
  }
  return phoneError;
}

function validateForm() {
  var usernameError;
  var name = document.getElementById('fname').value;
  var npattern = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
  
  if(name==""){
    document.getElementById('username').innerHTML="*required!!";
    document.getElementById('fname').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    usernameError = false;
  }
  else if(npattern.test(name) == false){
    document.getElementById('username').innerHTML="*please enter valid name!!";
    document.getElementById('fname').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    usernameError = false;


  }
  else {
    document.getElementById('username').innerHTML="";
    document.getElementById('fname').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    usernameError = true
  }
  return usernameError;

}
function validateLname() {

  var usernameError;
  var lname = document.getElementById('lname').value;
  var lpattern = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
  
  if(lname ==""){
    document.getElementById('lusername').innerHTML="*required!!";
    document.getElementById('lname').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    usernameError = false
    
  }
  else if(lpattern.test(lname)==false){
    document.getElementById('lusername').innerHTML="*please enter valid name!!";
    document.getElementById('lname').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    usernameError = false
    
  }
  else {

    document.getElementById('lusername').innerHTML="";
    document.getElementById('lname').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    usernameError = true;
  }
  return usernameError;
  
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

  if(pass==""){
    document.getElementById('spass').innerHTML="@required";
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
  var confirmPasswordError ;
  var cpass = document.getElementById('cpass').value;
  var pass = document.getElementById('pass').value;

  if (cpass == ""){

    document.getElementById('scpass').innerHTML="*required!!";
    document.getElementById('cpass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    confirmPasswordError = false

  }
  else if (cpass != pass){

    document.getElementById('scpass').innerHTML="*not match!!";
    document.getElementById('cpass').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    confirmPasswordError = false

  }
  else {
    document.getElementById("scpass").innerHTML = "";
    document.getElementById('cpass').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    confirmPasswordError = true
  }

  return confirmPasswordError;
}
//====
function validate_pass(){
    var password = document.getElementById("pass").value;
    var confirm_password = document.getElementById("cpass").value; 
    if(password == confirm_password || confirm_password == "" ){
      
      document.getElementById('scpass').innerHTML = "";
      // document.getElementById('cpass').style.borderColor = "red";
      document.getElementById('scpass').style.color = "";
    }
    else{
      document.getElementById('scpass').innerHTML = "not match";
      document.getElementById('cpass').style.borderColor = "#ced4da";
      document.getElementById('scpass').style.color = "red";
    }
  }
//   //------------------------------------------
function SSemail(){
  var emailError;
  var email = document.getElementById('email').value;
  var email_pattern = /^[A-Za-z]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // var email_space=/^[^\s].+[^\s]$/;
  if(email==""){
    document.getElementById('semail').innerHTML="*please enter valid email!!";
    document.getElementById('email').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    emailError = false

  }
  else if(email_pattern.test(email) == false){
    document.getElementById('semail').innerHTML="*please enter valid email!!";
    document.getElementById('email').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    emailError = false
    
  }

  else {
    document.getElementById('semail').innerHTML="";
    document.getElementById('email').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    emailError=true;
  }
  
  return emailError;

}
//   //------------------------------------------
function Validate_add(){
  var addressError;
  var add = document.getElementById('add').value;
  // var add_pattern =/^[#.0-9a-zA-Z\s,-]+$/;
  if(add==""){
    document.getElementById('sadd').innerHTML="*please enter valid address!!";
    document.getElementById('add').style.borderColor = "red";
    // document.getElementById("btn").disabled = true;
    addressError = false
    
  }else {
    document.getElementById('sadd').innerHTML="";
    document.getElementById('add').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    addressError = true
  }

  return addressError;
}
//   //------------------------------------------
function SSpin(){
  var pinError;
  var pin = document.getElementById('pin').value;
  var pin_pattern = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
  
  if(pin == ""){
    document.getElementById('spin').innerHTML="*please enter valid pin!!";
    document.getElementById('pin').style.borderColor = "red";    
    pinError = false

  }
  else if(pin_pattern.test(pin) == false){
    document.getElementById('spin').innerHTML="*please enter valid pin!!";
    document.getElementById('pin').style.borderColor = "red";
    document.getElementById("state").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
    document.getElementById("btn").disabled = true;
    pinError = false
    
  }else {
    document.getElementById('spin').innerHTML="";
    document.getElementById('pin').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    pinError = true
  }
  return pinError;

}
//     //------------------------------------------
// function SScity(){
//   var cityError;
//   var city = document.getElementById('city').value;
  
//   var city_pattern=/^[A-Za-z\s]+$/;
//   if(city_pattern.test(city) == false){
//     document.getElementById('scity').innerHTML="*please enter valid city!!";
//     document.getElementById('city').style.borderColor = "red";
//   document.getElementById("btn").disabled = true;
//   cityError = false;
  
// }else {
//   document.getElementById('scity').innerHTML="";
//   document.getElementById('city').style.borderColor = "#ced4da";
//   document.getElementById('btn').removeAttribute('disabled');
//   cityError = true
// }
// return cityError;

// }

//     //------------------------------------------
// function SScountry(){
//   var countryError;
//   var country = document.getElementById('country').value;

//   var country_pattern=/^[A-Za-z\s]+$/;
//   if(country_pattern.test(country) == false){
//     document.getElementById('scountry').innerHTML="*please enter valid city!!";
//     document.getElementById('country').style.borderColor = "red";
//   document.getElementById("btn").disabled = true;
//   countryError = false
// }else {
//   document.getElementById('scountry').innerHTML="";
//   document.getElementById('country').style.borderColor = "#ced4da";
//   document.getElementById('btn').removeAttribute('disabled');
//   countryError = true
// }
// return countryError;
// }
//   //------------------------------------------
// function SSstate(){

//   var stateError;
//   var state = document.getElementById('state').value;

//   // var npattern =/^[A-Za-z\s]+$/;


//   // if(npattern.test(state) == false){
//     if(state==""){
//     document.getElementById('state1').innerHTML="*please enter valid state name!!";
//     document.getElementById('state').style.borderColor = "red";
//     document.getElementById("btn").disabled = true;
//     stateError = false;

//   }else {
//     document.getElementById('state1').innerHTML="";
//     document.getElementById('state').style.borderColor = "#ced4da";
//     document.getElementById('btn').removeAttribute('disabled');
//     stateError = true
//   }
//   return stateError;
// }

function SSgender(){
  var genderError;
  var gender = document.getElementById('gen_font').value;
  if (gender == ""){
    console.log("if");
    console.log("gender",gender);
    document.getElementById('sgender').innerHTML="required!!";
    document.getElementById('gen_font').style.borderColor = "red";
    document.getElementById("btn").disabled = true;
    genderError = false;
  } else {
    console.log("else");
    console.log("gender",gender);
    document.getElementById('sgender').innerHTML = "";
    document.getElementById('gen_font').style.borderColor = "#ced4da";
    document.getElementById('btn').removeAttribute('disabled');
    genderError = true
  }
  return genderError;
}

function submit_form() {
  
  var someerr1= SSphone();
  var someerr2= validateForm();
  var someerr3= validateLname();
  var someerr4= SSpassword();
  var someerr5= SScpassword();
  var someerr6= SSemail();
  var someerr7= Validate_add();
  var someerr8= SSpin();
  var gen_err= SSgender();


  if (someerr1 ==true && gen_err==true &&  someerr2 == true && someerr3 == true && someerr4 == true && someerr5 == true && someerr6 == true && someerr7 == true && someerr8 == true  ){
    document.getElementById('btn').removeAttribute('disabled');
    // document.getElementById('myform').submit();
    // window.location='login_fb.html';
    
    
  }
  else {

    document.getElementById("btn").disabled = true;
    
  }

} 

//=========fetch Api======
// const getData = () => {
//     var pincode = document.getElementById("pin").value;
//     fetch(`https://api.postalpincode.in/pincode/${pincode}`).then((response) => response.json())
//       .then((data) => {
//         var city = data[0].PostOffice[0].District;
//         var state = data[0].PostOffice[0].State;
//         var country = data[0].PostOffice[0].Country;
//         document.getElementById("country").value = country;
//         document.getElementById("city").value=city;
//         document.getElementById("state").value=state;
//     });
// }

function getData(){

  var pincode = document.getElementById("pin").value;
  console.log("data");
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://api.postalpincode.in/pincode/${pincode}`);
  xhttp.responseType = 'json';
  // xhttp.send();
  xhttp.onreadystatechange = function() {
    console.log("data2");
    let data = xhttp.response;
    console.log("data3",data);

    if (this.readyState == 4 && this.status == 200) {
      console.log("data4",data[0] );
      if(data[0].Status=="Success"){
        console.log('status',data[0].Status);
      
        var city = data[0].PostOffice[0].District;
        var country = data[0].PostOffice[0].Country;
        var state = data[0].PostOffice[0].State;
        console.log("true");
        document.getElementById("city").value = city;
        document.getElementById("country").value = country;
        document.getElementById("state").value = state;
      }else if(data[0].Status=="Error"){
        document.getElementById('spin').innerHTML="*please enter valid pin!!";
        document.getElementById('pin').style.borderColor = "red";
      }
   
    } 
}
  xhttp.send();  



}










