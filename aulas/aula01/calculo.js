function somar(){
    var x = 2
    var y = 2
    let res = x + y
    document.getElementById("soma").innerHTML = res
    document.getElementById("conf-soma").innerHTML = "Calculado ✔"

}
function subtrair(){
    var x = 2
    var y = 2
    let res = x - y
    document.getElementById("subtração").innerHTML = res
    document.getElementById("conf-subtração").innerHTML = "Calculado ✔"   
}
function dividir(){
    var x = 10
    var y = 5
    let res = x / y
    document.getElementById("divisão").innerHTML = res
    document.getElementById("conf-divisão").innerHTML = "Calculado ✔"
}
function multiplicar(){
    var x = 10
    var y = 5
    let res = x * y
    document.getElementById("multiplicação").innerHTML = res
    document.getElementById("conf-multiplicação").innerHTML = "Calculado ✔"
}