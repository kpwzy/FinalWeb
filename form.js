let subButton = document.getElementById("subButton");

subButton.addEventListener("click",validateFName);
subButton.addEventListener("click",validateLName);
subButton.addEventListener("click",validateEmail);
subButton.addEventListener("click",validatePhone);
subButton.addEventListener("click",validateDOB);

// Check if the first name is entered
function validateFName(){
   let FirstName = document.getElementById("FirstName");
   if (FirstName.validity.valueMissing){
      FirstName.setCustomValidity("Enter your First Name");
   }
   else{
      FirstName.setCustomValidity("");
   }
}

function validateLName(){
   let LastName = document.getElementById("LastName");
   if (LastName.validity.valueMissing){
      LastName.setCustomValidity("Enter your Last Name");
   }
   else{
      LastName.setCustomValidity("");
   }
}

// Check if the email is entered
function validateEmail(){
   let email = document.getElementById("email");
   if (email.validity.valueMissing){
      email.setCustomValidity("Enter your email");
   }
   else if (email.validity.typeMismatch){
      email.setCustomValidity("Enter a valid email");
   }
   else{
      email.setCustomValidity("");
   }
}

// Check if the phone number is entered
function validatePhone(){
   let phone = document.getElementById("phone");
   if (phone.validity.valueMissing){
      phone.setCustomValidity("Enter your phone number");
   }
   else if (phone.validity.patternMismatch){
      phone.setCustomValidity("Enter a valid phone number");
   }
   else{
      phone.setCustomValidity("");
   }
}

/* check if the date of birth is entered */
function validateDOB() {
  const DOB = document.getElementById("DOB");

  if (!DOB.value) {
    DOB.setCustomValidity("Please select your date of birth");
  } else {
    DOB.setCustomValidity("");
  }
}

