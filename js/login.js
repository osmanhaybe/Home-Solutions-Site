const username = document.getElementById('username');
const password = document.getElementById('password');



//function fieldCorrect(field) {
 // const formSection = field.parentElement;
 // formSection.className = "form-section correct";

//}

//function fieldError(field, message){
 // const formSection = field.parentElement;
 // formSection.className = "form-section error";
  //const small = formSection.querySelector('small');
  //small.innerText = message;

//}


let redirect = [];
// Check Required Fields
function checkRequireduser() {
  if(username.value.trim() === '') {
    const formSection = username.parentElement;
    formSection.className = "form-section error";
    const small = formSection.querySelector('small');
    small.innerText = "Username is required";
    return false;
  } if(username.value.trim() !== '' && username.value.trim() !== 'osmuserscript78'){
    const formSection = username.parentElement;
    formSection.className = "form-section error";
    const small = formSection.querySelector('small');
    small.innerText = "Username is incorrect";
    return false;
  } else {
    const formSection = username.parentElement;
    formSection.className = "form-section correct";
    const small = formSection.querySelector('small');
    small.innerText = "";
    redirect.push(true);
    return false;
  }
}
function checkRequiredpass(){
    if(password.value.trim() === '') {
    const formSection = password.parentElement;
    formSection.className = "form-section error";
    const small = formSection.querySelector('small');
    small.innerText = "Password is required";
    return false;
  } if(password.value.trim() !== '' && password.value.trim() !== 'psamuserLHTM87'){
    const formSection = password.parentElement;
    formSection.className = "form-section error";
    const small = formSection.querySelector('small');
    small.innerText = "Password is incorrect";
    return false;
  }else {
    const formSection = password.parentElement;
    formSection.className = "form-section correct";
    const small = formSection.querySelector('small');
    small.innerText = "";
    redirect.push(true);
    return false;
  }
};



form.addEventListener('submit', function(e) {
e.preventDefault();
checkRequireduser();
checkRequiredpass();
if (redirect[0] === true && redirect[1] === true) {
  location.href = '../html/projects.html';
}else {
  return false;
}
});