let soma;
let subtracao;
let multiplicacao;
let divisao;

function somar(numero1, numero2){
    return soma = numero1+numero2;
}

function subtrair(numero1, numero2){
    return subtracao = numero1-numero2;
}

function multiplicar(numero1, numero2){
    return multiplicacao = numero1*numero2;
}

function dividir(numero1, numero2){
    return divisao = numero1/numero2;
}

document.getElementById("somar").addEventListener("click", function(){
    let numero1 = parseFloat(document.getElementById("valor1").value);
    let numero2 = parseFloat(document.getElementById("valor2").value);

    let result = somar(numero1, numero2);

    document.getElementById("resultado").innerText = "Resultado: "+result;
});

document.getElementById("subtrair").addEventListener("click", function(){
    let numero1 = parseFloat(document.getElementById("valor1").value);
    let numero2 = parseFloat(document.getElementById("valor2").value);

    let result = subtrair(numero1, numero2);

    document.getElementById("resultado").innerHTML = "Resutado: "+result;
})

document.getElementById("multiplicar").addEventListener("click", function(){
    let numero1 = parseFloat(document.getElementById("valor1").value);
    let numero2 = parseFloat(document.getElementById("valor2").value);

    let result = multiplicar(numero1,numero2);

    document.getElementById("resultado").innerText = "Resultado: "+result;
})

document.getElementById("dividir").addEventListener("click",function(){
    let numero1 = parseFloat(document.getElementById("valor1").value);
    let numero2 = parseFloat(document.getElementById("valor2").value);

    let result = dividir(numero1, numero2);

    document.getElementById("resultado").innerText = "Resultado: "+result;
})