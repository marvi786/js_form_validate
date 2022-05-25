const form = document.querySelector('#validate-form');
const InputName = document.querySelector('#username');
const Email = document.querySelector('#email');
const Password = document.querySelector('#password');
const ConfirmPass = document.querySelector('#conpassword');
form.addEventListener('submit',(event)=>{

    validateForm();
    
    // if(isFormValid()==true){
    // form.submit();
    // }
    // else{
    //     event.preventDefault();
    // }
});

// function isFormValid(){
//     const InputContainers = form.querySelectorAll('.input-group');
//     let result = true;
//     InputContainers.forEach((container)=>{
//         if(container.classList.contains('error')){
//             result=false;
//         }
//     });
//     result=true;
// }
function validateForm(){
    if(InputName.value == ""){
        setError(InputName,'Name can not be empty');
    }else if(InputName.value.length<6){
setError(InputName,"Name must be greater than 5 letters");
    }else{
        setSuccess(InputName);
    }
    if(Email.value==""){
        setError(Email,"Email can not be empty");
    }
    else if(isEmailValid(Email.value)){
        setSuccess(Email);
    }else{
        setError(Email,"Not a valid email");
    }
    if(Password.value==""){
        setError(Password,"Field can not be empty");
    }
    else if(Password.value.length<6){
        setError(Password,"Length can not be less than 6 characters.");
    }
    else{
        setSuccess(Password);
    }
    if(Password.value==ConfirmPass.value){
        setSuccess(ConfirmPass);
    }
    else{
        setError(ConfirmPass,"It doesn't match the password field.");
    }
}
function setError(element,errorMessage){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}
function setSuccess(element){
const parent = element.parentElement;
if(parent.classList.contains('error')){
    parent.classList.remove('error');
}
parent.classList.add('success');
}
function isEmailValid(email){
const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
return reg.test(email);
}