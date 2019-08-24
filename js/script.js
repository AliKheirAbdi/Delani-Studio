$(document).ready(function(){
    $("#toggle1").click(function(){
       $("#toggle1").hide(); 
        $("#hide1").show();
});
});
$(document).ready(function(){
    $("#hide1").click(function(){
        $("#toggle1").show();
       $("#hide1").hide(); 
});
});

// jQuery hover on portfolio icons

$(document).ready(function(){
    $("#work1").hover(function(){
        $("#overlay1").show();
    }).mouseleave(function(){
        $("#overlay1").hide();
    });
});

$(document).ready(function(){
    $("#work2").hover(function(){
        $("#overlay2").show();
    }).mouseleave(function(){
        $("#overlay2").hide();
    });
});
