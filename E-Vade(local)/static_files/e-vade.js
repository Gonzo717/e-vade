var user_location = "0_0"
var ball = "5_0"

<<<<<<< HEAD



=======
>>>>>>> 55476c714464d8fc2616567426c1a90b55335d01
function getX(location) {
  x_str = location.substring(0, location.indexOf('_'));
  return parseInt(x_str);
}

function getY(location) {
  y_str = location.substring(location.indexOf('_') + 1, location.length);
  return parseInt(y_str);
}

function ballmove() {
  $("#" + ball).html("");
  ball = (getX(ball) + 1) % 10 + "_" + (getY(ball) + 1) % 10; //getY(parseInt(user_location+1))
  $("#" + ball).html("<img src='https://opengameart.org/sites/default/files/rock_01_loop.gif' width='50' height='50'></img>");
  console.log(ball);
}
<<<<<<< HEAD
=======
setInterval(
  ballmove, 1000
);
>>>>>>> 55476c714464d8fc2616567426c1a90b55335d01

function left() {
  $("#" + user_location).html("");
  user_location = (getX(user_location) - 1) + "_" + getY(user_location)
  if (getX(user_location) < 0) {
    user_location = "0_" + getY(user_location).toString()
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
  console.log(user_location);
}

function up() {
  $("#" + user_location).html("");
  user_location = getX(user_location) + "_" + (getY(user_location) - 1)
  if (getY(user_location) < 0) {
    user_location = getX(user_location).toString() + "_0"
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
}

function right() {
  $("#" + user_location).html("");
  user_location = (getX(user_location) + 1) + "_" + getY(user_location)
  if (getX(user_location) > 9) {
    user_location = "9_" + getY(user_location).toString()
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
}

function down() {
  $("#" + user_location).html("");
  user_location = getX(user_location) + "_" + (getY(user_location) + 1)
  if (getY(user_location) > 9) {
    user_location = getX(user_location).toString() + "_9"
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
}

$(document).bind('keypress', function(e) {
  if (e.which === 13) {
    console.log(user_location);
  }
});
<<<<<<< HEAD
if (e.which === 13) {
  console.log(user_location);
  ballmove();

  $(document).keydown(function(e) {
    if (e.which === 37) {
      left();
    }
    if (e.which === 38) {
      up();
    }
    if (e.which === 39) {
      right();
    }
    if (e.which === 40) {
      down();
    }
  });
}
  $(document).ready(ballmove(ball));
  //ballmove(ball);
=======
$(document).keydown(function(e) {
  if (e.which === 37) {
    left();
  }
  if (e.which === 38) {
    up();
  }
  if (e.which === 39) {
    right();
  }
  if (e.which === 40) {
    down();
  }
  if (e.which === 13) {
    console.log(user_location);
    ballmove();
  }
});
$(document).ready(ballmove(ball));
<<<<<<< HEAD
//ballmove(ball);
>>>>>>> 55476c714464d8fc2616567426c1a90b55335d01

=======
>>>>>>> 98f05b74189ca08590fbcccf7c5e95fa011c522e

  var ar = new Array(37, 38, 39, 40)

<<<<<<< HEAD
  $(document).keydown(function(e) {
    var key = e.which;
    if ($.inArray(key, ar) > -1) {
      e.preventDefault();
    }
  });
=======
$(document).keydown(function(e) {
  var key = e.which;
  if ($.inArray(key, ar) > -1) {
    e.preventDefault();
  }
});
>>>>>>> 55476c714464d8fc2616567426c1a90b55335d01
