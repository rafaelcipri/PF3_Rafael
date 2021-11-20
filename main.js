const calc = document.getElementById('calc');

function Investimento () {
    const nome = document.getElementById('nome').value;
    const Valor_aplicado = document.getElementById('Valor_aplicado').value;
    const juros = document.getElementById('juros').value / 100;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && Valor_aplicado !== '' && juros !== '' && tempo !== '') {
        const total = (Valor_aplicado * ((((1 + juros) ** tempo) - 1) / juros)).toFixed(2)
        resultado.textContent = `Bem vindo ${nome}, se você aplicar R$ ${Valor_aplicado}, à taxa de juros de ${juros * 100}% ao mês, durante ${tempo} 
        meses, acumulará uma poupança de R$ ${total}`;
    }else {
        resultado.textContent = 'Está faltando algo';
    }
}
calc.addEventListener('click', Investimento);