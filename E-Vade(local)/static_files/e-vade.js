$(document).bind('keypress', function(e) {
    if(e.which === 13){
        alert("it worked");
    }
});
$(document).keydown(function(e) {
    if(e.which === 37){
      //  alert("left");
        $("#0_0").text("x");
    }
});
$(document).keydown(function(e) {
    if(e.which === 38){
      move('#1_0')
        .x(50)
        .y(0)
        .end();
    }
});
$(document).keydown(function(e) {
    if(e.which === 39){
        alert("right");
    }
});$(document).keydown(function(e) {
    if(e.which === 40){
        alert("down");
    }
});
