var user_location = "0_0"

function getX(location) {
  x_str = location.substring(0, location.indexOf('_'));
  return x_str;
}

function getY(location) {
  y_str = location.substring(location.indexOf('_')+1, location.length);
  return y_str;
}
function left() {

}
function up() {

}
function right() {

}
function down() {
  //return getX(user_location) + 1;
  user_location = getX(user_location) + "_" + getY(user_location+"1")
}
$(document).bind('keypress', function(e) {
    if(e.which === 13){
        console.log(user_location);
    }
});
$(document).keydown(function(e) {
    if(e.which === 37){
      //  alert("left");
        $("#0_0").text("x");
        console.log(user_location);
    }
});

$(document).keydown(function(e) {
    if(e.which === 38){
        console.log("up");
        console.log(user_location);
    }
});$(document).keydown(function(e) {
    if(e.which === 39){
        console.log("right");
        console.log(user_location);
    }
});$(document).keydown(function(e) {
    if(e.which === 40){
        console.log("down");
        console.log(user_location);
    }
});
