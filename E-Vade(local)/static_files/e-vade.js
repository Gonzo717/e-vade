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
  y_str = location.substring(location.indexOf('_') + 1, location.length);
  return parseInt(y_str);
}

function left() {
  $("#" + user_location).html("");
  user_location = (getX(user_location) - 1) + "_" + getY(user_location) //getY(parseInt(user_location+1))
  // EDGE CODE
  if (getX(user_location) < 0) {
    user_location = "0_" + getY(user_location).toString()
  }
  $("#" + user_location).html("<img src='https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg' width='50' height='50'></img>");
  console.log(user_location);
}

function up() {
  $("#" + user_location).html("");
  user_location = getX(user_location) + "_" + (getY(user_location) - 1) //getY(parseInt(user_location+1))
  $("#" + user_location).html("<img src='https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg' width='50' height='50'></img>");
  if (getY(user_location) < 0) {
    user_location = getX(user_location).toString() + "_0"
  }
}

function right() {
  $("#" + user_location).html("");
  user_location = (getX(user_location) + 1) + "_" + getY(user_location) //getY(parseInt(user_location+1))
  $("#" + user_location).html("<img src='https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg' width='50' height='50'></img>");
  if (getX(user_location) > 9) {
    user_location = "9_" + getY(user_location).toString()
  }
}

function down() {
  //return getX(user_location) + 1;
  $("#" + user_location).html("");
  user_location = getX(user_location) + "_" + (getY(user_location) + 1) //getY(parseInt(user_location+1))
  $("#" + user_location).html("<img src='https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg' width='50' height='50'></img>");
  if (getY(user_location) > 9) {
    user_location = getX(user_location).toString() + "_9"
  }
}
$(document).bind('keypress', function(e) {
  if (e.which === 13) {
    console.log(user_location);
  }
});
$(document).keydown(function(e) {
  if (e.which === 37) {
    //  alert("left");
    // $("#" + user_location).html("<img src='https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg' width='50' height='50'></img>");
    // console.log(user_location);
    left();
  }
});

$(document).keydown(function(e) {
  if (e.which === 38) {
    console.log("up");
    console.log(user_location);
    up();
  }
});
$(document).keydown(function(e) {
  if (e.which === 39) {
    console.log("right");
    console.log(user_location);
    right();
  }
});
$(document).keydown(function(e) {
  if (e.which === 40) {
    console.log("down");
    console.log(user_location);
    down();
  }
});
