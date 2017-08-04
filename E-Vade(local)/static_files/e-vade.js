var user_location = "0_0"
//var ball = Math.floor(Math.random()*10) + "_" + 0
// var directionx = 1
// var directiony = 1
var balls = []

function getX(location) {
  x_str = location.substring(0, location.indexOf('_'));
  return parseInt(x_str);
}

function getY(location) {
  y_str = location.substring(location.indexOf('_') + 1, location.length);
  return parseInt(y_str);
}

function getCoordinates(ball) {
  return $("#" + ball.x + "_" + ball.y);
}

function checkLoss(e) {
  score = balls.length*100
  for (i = 0; i < balls.length; i++) {
    var ball = balls[i];
    if (ball.x + "_" + ball.y == user_location) {
      alert("Game Over, your score is " +score + " please input your username and score on the form");
      $(location).attr("href", "/rankings");
    }
  }
}

function ballmove() {
  for (i = 0; i < balls.length; i++) {
    var ball = balls[i];
    getCoordinates(ball).html("");
    ball.x = ball.x + 1 * (ball.dir_x) % 10
    ball.y = ball.y + 1 * (ball.dir_y) % 10; //getY(parseInt(user_location+1))
    if (ball.x == 9 || ball.x == 0) {
      ball.dir_x = -ball.dir_x
    }
    if (ball.y == 9 || ball.y == 0) {
      ball.dir_y = -ball.dir_y;
    }
    getCoordinates(ball).html("<img src='https://opengameart.org/sites/default/files/rock_01_loop.gif' width='50' height='50'></img>");
    console.log(ball.x + "_" + ball.y);
  }
  checkLoss();
}

function addBall() {
  do{
    var check = false;
  var ball = {
    x: Math.floor(Math.random() * 10),
    y: Math.floor(Math.random() * 10),
    dir_x: 1,
    dir_y: 1
  }

 for (i = 0; i < balls.length; i++) {
    var b = balls[i];
     if (ball.x == b.x && ball.y == b.y && ball.dir_x == b.dir_x && ball.dir_y == b.dir_y){
        check = true;
    }
  }
}
  while (check)
  balls.push(ball);
  $("#" + ball.x + "_" + ball.y).html("<img src='https://opengameart.org/sites/default/files/rock_01_loop.gif' width='50' height='50'></img>");
  if (balls.length == 50)
    clearInterval(addBallID);
}

function left() {
  $("#" + user_location).html("");
  user_location = (getX(user_location) - 1) + "_" + getY(user_location)
  if (getX(user_location) < 0) {
    user_location = "0_" + getY(user_location).toString()
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
  console.log(user_location);
  checkLoss();
}

function up() {
  $("#" + user_location).html("");
  user_location = getX(user_location) + "_" + (getY(user_location) - 1)
  if (getY(user_location) < 0) {
    user_location = getX(user_location).toString() + "_0"
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
  checkLoss();
}

function right() {
  $("#" + user_location).html("");
  user_location = (getX(user_location) + 1) + "_" + getY(user_location)
  if (getX(user_location) > 9) {
    user_location = "9_" + getY(user_location).toString()
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
  checkLoss();
}

function down() {
  $("#" + user_location).html("");
  user_location = getX(user_location) + "_" + (getY(user_location) + 1)
  if (getY(user_location) > 9) {
    user_location = getX(user_location).toString() + "_9"
  }
  $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
  checkLoss();
}

$(document).bind('keypress', function(e) {
  addBall();

  if (e.which === 32) {
    console.log(user_location);
    addBallID = setInterval(
      addBall, 1500
    );
    setInterval(
      ballmove, 200
    );
    $("#" + user_location).html("<img src='http://bestanimations.com/Earth&Space/astronaut-animation-9.gif' width='50' height='50'></img>");
  }
});
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
    // ballmove();
  }
});


var ar = Array(37, 38, 39, 40)

$(document).keydown(function(e) {
  var key = e.which;
  if ($.inArray(key, ar) > -1) {
    e.preventDefault();
  }
});
