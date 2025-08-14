let soma;
let subtracao;
let multiplicacao;
let divisao;
let quadrad;
let raizes;

function quadrado(numero1){
    return quadrad = numero1*numero1;
}

function raiz(numero1) {
    return Math.sqrt(numero1);
}

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

document.getElementById("quadrado").addEventListener("click", function(){
    let numero1 = parseFloat(document.getElementById("valor1").value);
    let result = quadrado(numero1);
    document.getElementById("resultado").innerText = "Resultado: "+result;
});

document.getElementById("raiz").addEventListener("click", function(){
    let numero1 = parseFloat(document.getElementById("valor1").value);
    let result = raiz(numero1);
    document.getElementById("resultado").innerText = "Resultado: "+result;
});

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