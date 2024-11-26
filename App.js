let userName = document.getElementById('username');
let errorName = document.getElementById('errorname');

function funName() {
    if (userName.value.length > 0 && userName.value.length < 6) {
        errorName.style.display = 'block';
    } else {
        errorName.style.display = 'none';
    }
};


let passInp = document.getElementById('password');
let errorPass = document.getElementById('errorpassword');

function funPass() {
    if (passInp.value.length > 0 && passInp.value.length < 8) {
        errorPass.style.display = 'block';
    } else {
        errorPass.style.display = 'none';
    }
};

let emailIng = document.getElementById('email');
let emailError = document.getElementById('emailerror');

function emailFun() {
    if (emailIng.value.includes('@gmail.com') ) {
        emailError.style.display='none'
    }else{
        emailError.style.display='block'
    }
};


function submitData(){
    let userName = document.getElementById('username');
    let passInp = document.getElementById('password');
    let emailIng = document.getElementById('email');
    let citiesSelect = document.getElementById('cities');
    let genderInp = document.getElementById('gender')

    
    let dataObj = {
        Gender : genderInp.value,
        shahar : citiesSelect.value,
        email : emailIng.value,
        password : passInp.value,
        username : userName.value
    };
    console.log('Form Deta' , dataObj);
    
};