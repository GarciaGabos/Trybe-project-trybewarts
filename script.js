const getLoginButton = document.getElementById('login');
const getInputEmail = document.querySelector('#email');
const getInputPassword = document.querySelector('#password');

function loginTrybe() {
  if (getInputEmail.value === 'login@trybe.com' && getInputPassword.value === 'senha') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
} getLoginButton.addEventListener('click', loginTrybe);
