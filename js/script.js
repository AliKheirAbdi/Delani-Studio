$(document).ready(function(){
    $("#peek").click(function(){
      $("#peek").hide();
      $("#design").show();
    });
    $("#design").click(function(){
      $("#design").slideUp();
      $("#peek").slideDown();
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

$(document).ready(function(){
    $("#work3").hover(function(){
        $("#overlay3").show();
    }).mouseleave(function(){
        $("#overlay3").hide();
    });
});

$(document).ready(function(){
    $("#work4").hover(function(){
        $("#overlay4").show();
    }).mouseleave(function(){
        $("#overlay4").hide();
    });
});

$(document).ready(function(){
    $("#work5").hover(function(){
        $("#overlay5").show();
    }).mouseleave(function(){
        $("#overlay5").hide();
    });
});

$(document).ready(function(){
    $("#work6").hover(function(){
        $("#overlay6").show();
    }).mouseleave(function(){
        $("#overlay6").hide();
    });
});

$(document).ready(function(){
    $("#work7").hover(function(){
        $("#overlay7").show();
    }).mouseleave(function(){
        $("#overlay7").hide();
    });
});

$(document).ready(function(){
    $("#work8").hover(function(){
        $("#overlay8").show();
    }).mouseleave(function(){
        $("#overlay8").hide();
    });
});




