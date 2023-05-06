// Get the email and password from the input fields
var email = document.getElementById("email");
var password = document.getElementById("password");


function check(){
// Check if the email and password are correct
if(email.value!="" && password.value!=""){
if (email.value == "admin@admin.com" && password.value == "123456" ) {
  // If they are, display a success message
  alert("Login successful");
} 
else {
  // If they're not, display an error message
  alert("Invalid username or password");
}
}
}