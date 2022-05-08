const getLoginButton = document.getElementById('login');
const getEmail = document.querySelector('#email');
const getPassword = document.querySelector('#senha');

function loginTrybe() {
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
} getLoginButton.addEventListener('click', loginTrybe);

const checked = document.getElementById('agreement');
// função para conferir se o checkbox está marcado e ativar botão submit
function checkbox() {
  if (document.getElementById('agreement').checked === true) {
    document.getElementById('submit-btn').disabled = '';
  }
  if (document.getElementById('agreement').checked === false) {
    document.getElementById('submit-btn').disabled = 'disabled';
  } return checkbox;
} checked.addEventListener('click', checkbox);
