window.onload=function() {
    //Full name validation
    var fullName = document.getElementById("name");
    var fullNameError = document.getElementById("name-error");
    fullName.addEventListener("blur", validateName);
    function validateName() {
        var space = fullName.value.indexOf(" ");
        if (space<=0 || fullName.value.lenght<6 || fullName.value==null) {
            fullNameError.style.display="block";
            fullNameError.style.fontSize="10px";
            fullName.style.border="2px solid red";
        }
        else {
            fullName.style.border= "2px solid green"
        }
    }
    fullName.addEventListener("focus", focusValidation)
    function focusValidation() {
        fullNameError.style.display="none"
        
    }

    //Email Validation

}
    
