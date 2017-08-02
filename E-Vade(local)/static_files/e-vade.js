$(document).bind('keypress', function(e) {
    if(e.which === 13){
        alert("it worked");
    }
});
$(document).keydown(function(e) {
    if(e.which === 37){
      //  alert("left");
        $("#0_0").text("x");
        move()
    }
});
$(document).keydown(function(e) {
    if(e.which === 38){
        alert("up");
    }
});$(document).keydown(function(e) {
    if(e.which === 39){
        alert("right");
    }
});$(document).keydown(function(e) {
    if(e.which === 40){
        alert("down");
    }
});
