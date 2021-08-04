// altura

let areaAltura = document.querySelector('#area-input-altura');
let labelAltura = areaAltura.querySelector('label');
let inputAltura = areaAltura.querySelector('#altura');


function formularioAlturaAtivo(){
    labelAltura.classList.add('inputAtivado');
}

function formualarioAlturaDesativado(){
    if(!inputAltura.value){
        labelAltura.classList.remove('inputAtivado');
    }
}

function verificaAltura(){
    $(function(){
        $(inputAltura).mask('9.99');
    });
}

// peso

let areaPeso = document.querySelector('#area-input-peso');
let labelPeso = areaPeso.querySelector('label');
let inputPeso = areaPeso.querySelector('#peso');

function formularioPesoAtivo(){
    labelPeso.classList.add('inputAtivado');
}

function formualarioPesoDesativado(){
    if(!inputPeso.value){
        labelPeso.classList.remove('inputAtivado');
    };
}

function verificaPeso(){
    $(function(){
        $(inputPeso).mask('999');
    });
}

// calculando

const inputResultado = document.querySelectorAll('#resultado');
const areaClassificacao = document.querySelector('#classificacao');
const tableClassificacao = areaClassificacao.querySelector('table');
const trClassificacao = tableClassificacao.querySelectorAll('tr');

function calcular(){
    // calculando imc
    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);
    let imc = peso / (altura ** 2);
    imc = imc.toFixed(2);
    imc = Number(imc);

    if(imc){
        // colocando o valor do imc nos lugares
    for(let i in inputResultado){
        inputResultado[i].value = imc;
    }

    for(let i of trClassificacao){
        console.log(i);
        i.classList.remove('trAtivo')
    }

    if(imc < 16){
        trClassificacao[1].classList.add('trAtivo');
    }else if(imc >= 16 && imc <= 16.99){
        trClassificacao[2].classList.add('trAtivo');
    }else if(imc >= 17 && imc <= 18.49){
        trClassificacao[3].classList.add('trAtivo');
    }else if(imc >= 18.5 && imc <= 24.99){
        trClassificacao[4].classList.add('trAtivo');
    }else if(imc >= 25 && imc <= 29.99){
        trClassificacao[5].classList.add('trAtivo');
    }else if(imc >= 30 && imc <= 34.99){
        trClassificacao[6].classList.add('trAtivo');
    }else if(imc >= 35 && imc <= 39.99){
        trClassificacao[7].classList.add('trAtivo');
    }else if(imc > 40){
        trClassificacao[8].classList.add('trAtivo');
    };
    }

    
}



