function Limpar(id1, id2) {
    document.getElementById(id1).value ="";
    document.getElementById(id2).value ="";
}

function Calcular(numero1, numero2, operacao){
    var num1 = document.getElementById(numero1).value;
    var num2 = document.getElementById(numero2).value;
    var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    var expressao = num1 + operador + num2;
    resultado = eval(expressao)
    setResultado(num1, num2, resultado, operador);
    
}

const select = document.querySelector('select');
const para = document.querySelector('p');

function setResultado(numero1, numero2, resultado, operador) {
    const saida = document.getElementById('saida')

    switch(operador){
        case '+':
        saida.innerHTML = `A soma de ${numero1} e ${numero2} é ${resultado}`;
        break;
        case '-':
        saida.innerHTML = `A diferença entre ${numero1} e ${numero2} é ${resultado}`;
        break;
        case '*':
        saida.innerHTML = `O produto de ${numero1} por ${numero2} é ${resultado}`
        break;
        case '/':
        saida.innerHTML  = `O quociente de ${numero1} dividido por ${numero2} é ${resultado}`
        break;
        default:
        saida.innerHTML  = '';
    }
}