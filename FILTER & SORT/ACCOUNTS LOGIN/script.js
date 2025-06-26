var container = document.querySelector('.container');
var registerBtn = document.querySelector('.register-btn');
var loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
}); 


loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});