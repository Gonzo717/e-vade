var user_location = "0_0"

//var character = 800

//user_location = character
// $(document).bind('keypress', function(e) {
//     if(e.which === 13){
//         console.log(user_location);
//         $("#sun").append($(user_location));
//     }
// });

var myGamePiece = "#sun";

function getX(location) {
  x_str = location.substring(0, location.indexOf('_'));
  return parseInt(x_str);
}

function getY(location) {
  y_str = location.substring(location.indexOf('_')+1, location.length);
  return parseInt(y_str);
}

function left() {
  user_location = (getX(user_location)-1) + "_" + getY(user_location)//getY(parseInt(user_location+1))
// EDGE CODE
  if (getX(user_location)<0){
      user_location= "0_" + getY(user_location).toString()
  }
  $("#sun").append($(user_location));
}
function up() {
  user_location = getX(user_location) + "_" + (getY(user_location)-1)//getY(parseInt(user_location+1))
}
function right() {
  user_location = (getX(user_location)+1) + "_" + getY(user_location)//getY(parseInt(user_location+1))
}
function down() {
  //return getX(user_location) + 1;
  user_location = getX(user_location) + "_" + (getY(user_location)+1)//getY(parseInt(user_location+1))
  $("#sun").append($(user_location));
}
$(document).bind('keypress', function(e) {
    if(e.which === 13){
        console.log(user_location);
    }
});
$(document).keydown(function(e) {
    if(e.which === 37){
      //  alert("left");
        $("#0_0").get("sun");
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
