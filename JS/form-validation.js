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
}
    
