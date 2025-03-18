$("#esconder").click(function (){
    $("#teste1").hide();
});

$("#mostrar").click(function (){
    $("#teste1").show();
});

$("#alterarCSS").click(function (){
    $("#teste2").css({
        "background-color" : "pink",
        "font-size" : "200%",
        "color" : "white"
    });
});

$("#alterarClass").click(function (){
    $("#teste3").removeClass("alert-success").addClass("alert-primary");
    $("#alterarClass").removeClass("btn-sucess").addClass("btn-danger");
});

$(document).ready(function () {

    $("#alternar1").show();
    $("#alternar2").hide();
    $("#alternar3").hide();
    

    $("#alternar1").click(function () {
        $("#link").attr({
            "href": "https://etecitu.cps.sp.gov.br/",
            "title": "Etec Itu"
        });
        $("#link").text("Etec Itu");
        
        $("#alternar1").hide();
        $("#alternar2").show();
    });

    $("#alternar2").click(function () {
        $("#link").attr({
            "href": "https://fatecitu.cps.sp.gov.br/",
            "title": "Fatec Itu"
        });
        $("#link").text("Fatec Itu");

        $("#alternar2").hide();
        $("#alternar3").show();
    });

    $("#alternar3").click(function () {
        $("#link").attr({
            "href": "https://www.cps.sp.gov.br",
            "title": "CPS"
        });
        $("#link").text("CPS");

        $("#alternar3").hide();
        $("#alternar1").show();
    });
});
