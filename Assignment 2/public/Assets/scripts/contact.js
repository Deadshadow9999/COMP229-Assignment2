/* File Name: styles.css
   Student Name: Henry Pan
   Student ID: 301142574
   Date: Oct 2, 2021
*/

// Function for validating the form's input fields
function checkValidity(evt)
{
   // Get the values from the form inputs
   var firstName = document.forms["Contact"]["firstName"].value;
   var lastName = document.forms["Contact"]["lastName"].value;
   var contactNumber = document.forms["Contact"]["contactNumber"].value;
   var email = document.forms["Contact"]["emailAddress"].value;
   var message = document.forms["Contact"]["message"].value;

   // Email format used for comparing user input in the email field
   var validateEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

   // Returns an error if any form fields are blank, null, or in the wrong format
   try{
      if((firstName === "") || (firstName === null)){
         throw new Error("First name must be filled out");
      }
      if((lastName === "") || (lastName === null))
      {
         throw new Error("Last name must be filled out");
      }
      if((contactNumber === "") || (contactNumber === null)){
         throw new Error("Contact number must be filled out");
      }
      if((email === "") || (email === null)){
         throw new Error("Email must be filled out");
      }
      if(validateEmail.test(email) === false){
         throw new Error("Invalid email address");
      }
      if((message === "") || (message === null)){
         throw new Error("Message must be filled out");
      }
      alert("Submission Complete. Thanks for contacting us");
      return true;
   }
   // Catches the error and displays the appropriate message
   catch(formError){
      alert(formError.message);
      evt.preventDefault();
      return false;
   }
}

// Add an event to the form submit button
function createEventListeners() {
      if (document.getElementById("submitRequest").addEventListener) {
       document.getElementById("submitRequest").addEventListener("click", checkValidity, false);
    } else if (document.getElementById("submitRequest").attachEvent) {
        document.getElementById("submitRequest").attachEvent("onclick", checkValidity);
    }
}

// Create event listeners on page set up
function setUpPage() {
    createEventListeners();
 }

 if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
 }

 if ( window.history.replaceState ) {
   window.history.replaceState( null, null, window.location.href )};
