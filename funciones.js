$(document).ready(function () {
    $("#user").on("input", function () {
        if ($("#user").val() == "") {
            $("#user").addClass("error");
            $("#user").removeClass("ok");
            $("#mensaje").html("El campo es obligatorio!.");
        } 
       
        
        else {
            $("#user").removeClass("error");
            $("#user").addClass("ok");
            $("#mensaje").html("");
        }
    });
});




$(document).ready(function () {
    $("#email").on("input", function () {
        if ($("#email").val() == "" ) {
            $("#email").addClass("error");
            $("#email").removeClass("ok");
            $("#mensaje").html("");
        } 
       
        
        else {
            $("#email").removeClass("error");
            $("#email").addClass("ok");
            $("#mensaje").html("");
        }
    });
});


$(document).ready(function () {
    $("#exampleInputPassword1").on("input", function () {
        if ($("#exampleInputPassword1").val().length <= 6 ) {
            $("#exampleInputPassword1").addClass("error");
            $("#exampleInputPassword1").removeClass("ok");
            $("#mensaje").html("");
        } 
       
        
        else {
            $("#exampleInputPassword1").removeClass("error");
            $("#exampleInputPassword1").addClass("ok");
            $("#mensaje").html("");
        }
    });
});




$(document).ready(function () {
    $("#codigo").on("input", function () {
        if ($("#codigo").val().length <= 3 ) {
            $("#codigo").addClass("error");
            $("#codigo").removeClass("ok");
            $("#mensaje").html("");
        } 
       
        
        else {
            $("#codigo").removeClass("error");
            $("#codigo").addClass("ok");
            $("#mensaje").html("");
        }
    });
});


$(document).ready(function () {
    $("#producto").on("input", function () {
        if ($("#producto").val() == "") {
            $("#producto").addClass("error");
            $("#producto").removeClass("ok");
            $("#mensaje").html("El campo es obligatorio!.");
        } 
       
        
        else {
            $("#producto").removeClass("error");
            $("#producto").addClass("ok");
            $("#mensaje").html("");
        }
    });
});

$(document).ready(function () {
    $("#precio").on("input", function () {
        if ($("#precio").val() == "") {
            $("#precio").addClass("error");
            $("#precio").removeClass("ok");
            $("#mensaje").html("El campo es obligatorio!.");
        } 
       
        
        else {
            $("#precio").removeClass("error");
            $("#precio").addClass("ok");
            $("#mensaje").html("");
        }
    });
});

$(document).ready(function () {
    $("#cantidad").on("input", function () {
        if ($("#cantidad").val() == "") {
            $("#cantidad").addClass("error");
            $("#cantidad").removeClass("ok");
            $("#mensaje").html("El campo es obligatorio!.");
        } 
       
        
        else {
            $("#cantidad").removeClass("error");
            $("#cantidad").addClass("ok");
            $("#mensaje").html("");
        }
    });
});


$(document).ready(function () {
    $("#descuento").on("input", function () {
        if ($("#descuento").val() == "") {
            $("#descuento").addClass("error");
            $("#descuento").removeClass("ok");
            $("#mensaje").html("El campo es obligatorio!.");
        } 
       
        
        else {
            $("#descuento").removeClass("error");
            $("#descuento").addClass("ok");
            $("#mensaje").html("");
        }
    });
});
