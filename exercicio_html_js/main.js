const formJS = document.getElementById('form-numeros')
const campoAJS = document.getElementById('campoA')
let formValido = false

function validaNumJS(numCompleto) {
    const nomeComoArray = numCompleto.split(' ');
    return nomeComoArray.length === 1;
}

formJS.addEventListener('submit', function (e) {
    e.preventDefault();

    const numero1 = document.getElementById('campoA')
    const numero2 = document.getElementById('campoB')
    const mensagemBeneficiario = `o numero: <b>${numero1.value}</b> não é maior que: <b>${numero2.value}</b> parabens!`

    formJSValido = validaNumJS(numero1.value)
    if (formJSValido) {
        const containerMensagemSucesso = document.querySelector('.erro')
        containerMensagemSucesso.innerHTML = mensagemBeneficiario
        containerMensagemSucesso.style.display = 'block';

        numero1.value = '';
        numero2.value = '';

    }  else {
        numero1.style.border = '1px solid red';
        document.querySelector('.erro').style.display = 'block';
    }
})

numero1.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido) {
        numero1.classList.add('error');
        document.querySelector('.erro').style.display = 'block';
    } else{
        numero1.classList.remove('error');
        document.querySelector('.erro').style.display = 'none';
    }
})