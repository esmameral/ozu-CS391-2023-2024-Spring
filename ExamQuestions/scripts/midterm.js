function clearPage() {
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    document.getElementById("result").innerText="";
}

function calculate(type) {
    var result;
    if(document.getElementById("number1").value.length==0) {
        alert("Please enter first value");
        return;
    }
    if(document.getElementById("number2").value.length==0) {
        alert("Please enter second value");
        return;
    }
    var firstValue = parseFloat(document.getElementById("number1").value);
    var secondValue = parseFloat(document.getElementById("number2").value);
    switch (type) {
        case "A":
            result = firstValue + secondValue;
            break;
        case "S":
            result = firstValue - secondValue;
            break;
        case "M":
            result = firstValue * secondValue;
            break;
        case "D":
            result = firstValue / secondValue;
    }


    document.getElementById("result").innerText = result;
}



function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var fullname = document.getElementById("fullname").value;
    if (username == null || username == "") {
        alert("Username must be filled out");
        return false;
    }
    if (password == null || password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (password.length < 6) {
        alert("Minimum 6 characters required for password");
        return false;
    }
    if (repassword == null || repassword == "") {
        alert("Re-enter password must be filled out");
        return false;
    }

    if (repassword !== password) {
        alert("Passwords must match");
        return false;
    }
    if (fullname == null || fullname == "") {
        alert("Full name must be filled out");
        return false;
    }
    return true;
}