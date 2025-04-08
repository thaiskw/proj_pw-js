$("#calcular").click(function(){
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());
    var valor3 = parseFloat($("#txtvalor3").val());
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Preencha todos os valores");
        return;
    }

    const crescente = [valor1, valor2, valor3];
    crescente.sort((a, b) => a - b);
    alert(crescente);

    $("#crescente")
        .text("Valores em ordem crescente: " + crescente)
        .css({'font-weight': 'bold', 'font-size': '18pt', 'color': 'black' });
    
    var media = parseFloat((valor1 + valor2 + valor3) / 3);
    alert(media);

    $("#media")
    .text("Média dos valores: " + media)
    .css({'font-weight': 'bold', 'font-size': '18pt', 'color': 'black' });

    var loop = 0;
    var x = 1;
    while(x <= valor2){
        loop += x;
        x++;
    }
    alert(loop)

    $("#loop")
        .text("Soma de 1 até " + valor2 + " = " + loop)
        .css({'font-weight': 'bold', 'font-size': '18pt', 'color': 'black' });
});