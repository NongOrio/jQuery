// document.querySelector("h1").style.color = "green";
// $("h1").css("color", "purple");

  $("h1").addClass("purple-title");
  // $("h1").text("Phiraphon Suriphat");
  // $("buttom").text("Go!");
  // $("buttom").html("<em>Go!</em>");

// $("h1").addClass("red-title");

// $("button").click(function () {
//     $("h1").css("color", "purple");
// });

//ใช้กับ Drum kit ได้
// $("input").keypress( function (event) {
//   console.log("I pressed : " + event.key);
//   }
// );

// $("h1").on("mouseover", function () {
//   $("h1").css("color","green");
// });

// $("h1").before("<label>This is add before h1</label><br>");
//
// $("h1").after("<label>This is add after h1</label><br>");

// $("h1").prepend("<button>prepend</button>");
//
// $("h1").append("<button>append</button>");

$(document).keyup( function (event) {
  // console.log("I pressed : " + event.key);
  $("h1").html(event.key);
  }
 );
