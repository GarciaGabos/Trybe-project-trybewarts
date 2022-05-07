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

const checkbox = document.getElementsByName('toggle');
const numElementos = checkbox.length;
const button = document.getElementById('submit-btn');
for (let i = 0; i < numElementos; i += 1) {
  checkbox[i].onclick = () => {
    // essa função passa pelo checkbox, e adiciona o evento ao clicar nele
    const check = document.querySelector('input[name="toggle"]:checked');
    // se estiver marcado, vai receber o valor "1" (true)
    // se não estiver, recebe o valor "0" (false) e desabilita o botão de enviar.
    button.disabled = check ? 0 : 1;
  };
}
