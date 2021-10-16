window.onload=function() {
    //Full name validation
    var fullName = document.getElementById("name");
    var fullNameError = document.getElementById("name-error");
    fullName.addEventListener("blur", validateName);
    function validateName(e) {
        var testing = e.target.value;
        if (testing="" || testing.length<6 || testing.indexOf(" ")<=0) {
            fullNameError.style.display="block";
            fullName.style.border="2px solid red"
            fullNameError.style.fontSize="11px"
        }
        else {
            fullName.style.border="2px solid green"
        }
       
    }
    fullName.addEventListener("focus", focusValidation)
    function focusValidation() {
        fullNameError.style.display="none" 
    }

    //Email Validation
    var email = document.querySelector("#email");
    var emailError = document.querySelector("#email-error")
    email.addEventListener("blur", validateEmail);
    function validateEmail() {
        var atSign = email.value.indexOf("@")
        var dot = email.value.indexOf(".")
        var extention = email.value.indexOf("com")
        if (atSign>0 && dot>0 && extention>0) {
            email.style.border="2px solid green"
        }
        else {
            emailError.style.display="block"
            emailError.style.fontSize="11px"
            email.style.border="2px solid red"
            
        }
    }
    email.addEventListener("focus", focusEmail)
    function focusEmail() {
        emailError.style.display="none"
        
    }

    // Password validation
    var password = document.getElementById("password");
    var passwordError = document.getElementById("password-error");
    password.addEventListener("blur", validatePassword);
    function validatePassword(e) {
        var letters = /[a-zA-Z]/g;
        var numbers = /[0-9]/g;
        var testPwd = e.target.value;
        if (testPwd.match(letters) && testPwd.match(numbers) && testPwd.length>=8) {
            password.style.border="2px solid green"
        }
        else {
            passwordError.style.display="block";
            passwordError.style.fontSize="11px";
            password.style.border="2px solid red"
        }
    }
    password.addEventListener("focus", focusPassword);
    function focusPassword() {
        passwordError.style.display="none"
    }
}
    
