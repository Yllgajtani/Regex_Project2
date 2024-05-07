function checkEmail(){
    var result = document.getElementById("result")
    var PhonelInpt = document.getElementById("Phone").value;
    if(/^\+383\s\d{2}\s\d{3}\s\d{3}$/.test(PhonelInpt)){
        result.innerHTML = "Phone number is valid"
        result.style.color = 'green'
    }
    else{
        result.innerHTML = "Phone number is invalid"
        result.style.color = 'red'
    }
}

