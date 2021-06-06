
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');



function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Baixo peso'
        } else if (valorIMC < 25) {
            classificacao = 'Eutrofia/Normal. Parabéns!! :)'
        } else if (valorIMC < 30) {
            classificacao = 'Sobrepeso/Pré-Obesidade'
        } else if (valorIMC < 35) {
            classificacao = 'Obesidade Grau I'
        } else if (valorIMC <= 40) {
            classificacao = 'Obesidade Grau II'
        } else if (valorIMC < 40) {
            classificacao = 'Obesidade Grau III ou Mórbida'
        } else if (valorIMC <= 50) {
            classificacao = 'Obesidade Grau IV ou Super-Obesos'
        } else if (valorIMC > 60) {
            classificacao = 'Obesidade Grau V ou Super Super-Obesos'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e sua classificação é: ${classificacao}`;
        
    } else {
        resultado.textContent = 'Preencha todos os campos!!'
    }

}

calcular.addEventListener('click', imc);
