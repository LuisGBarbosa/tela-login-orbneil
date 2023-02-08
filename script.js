const Login = () => {
    const user = document.getElementById('inputUser');
    const pass = document.getElementById('inputSenha');

    const userAndPassNull = user.value == '' && pass.value == '';

    if(userAndPassNull){
        alert('Preecha o usuário e a senha')
    } else if(user.value == '' && pass.value != '') {
        alert('Digite seu nome de usuário.')
    } else if (pass.value == '' && user.value != '') {
        alert('Digite sua senha.')
    } else if (pass.value == user.value) {
        alert('A senha não pode ser igual ao nome de usuário')
    } else if (pass.value.length < 8) {
        alert('O tamanho da senha não pode ser menor que 8 caracteres')
    } else {
        alert('Realizando login...')
    };
};