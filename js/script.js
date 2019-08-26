$(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").hide();
      $("#desc1").show();
    });
    $("#desc1").click(function(){
      $("#desc1").hide();
      $("#design-image").show();
    });
  });

$(document).ready(function(){
    $("#dev-image").click(function(){
      $("#dev-image").hide();
      $("#desc2").show();
    });
    $("#desc2").click(function(){
      $("#desc2").hide();
      $("#dev-image").show();
    });
  });

  $(document).ready(function(){
    $("#pro-image").click(function(){
      $("#pro-image").hide();
      $("#desc3").show();
    });
    $("#desc3").click(function(){
      $("#desc3").hide();
      $("#pro-image").show();
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


// /*  Mailchimp Subscribe  */
// $('#subscribe-form').bind('submit', function(event) {
//     event.preventDefault(); //prevent page refresh
//     var name  = $('[name="client_name"]').val();//get name field value
//     var email = $('[name="client_email"]').val();//get email field value
//     var url =   "https://us18.api.mailchimp.com/2.0/lists/subscribe.json?"
//                +  "apikey=5e91b44bb1073b136f5bee7020f1c62e-us18&id=36ad82c391"//API KEY  
//                +  "&email[email]=" + email //email address registering
//                +  "&merge_vars[FNAME]=" + name //name we're registering
//                +  "&merge_vars[LNAME]=" //last name-- feel free to add this field
//                +  "&double_optin=false" //add to list even if email is invalid
//                +  "&send_welcome=false"; //send an email notification to new subscriber
//    $.ajax({
//          type: "POST",
//          url: url,
//          dataType: 'json',
//          success: function(data) {
//            $('#subscribe-form').html("Thank you!");
//          },
//          error: function(jqXHR, textStatus, errorThrown) {
//            alert(errorThrown);
//          }
//      });//EO ajax
//  });//EO click bind

