var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$("#headingOne").click(function() {
    if ($(".collapse").hasClass("show")) {
        $(".collapse").removeClass("show");
    } else {
        $(".collapse").removeClass("show");
        $("#collapseOne").addClass("show");
    }
})
$("#headingTwo").click(function() {
    if ($(".collapse").hasClass("show")) {
        $(".collapse").removeClass("show");
    } else {
        $(".collapse").removeClass("show");
        $("#collapseTwo").addClass("show");
    }
})
$("#headingThree").click(function() {
    if ($(".collapse").hasClass("show")) {
        $(".collapse").removeClass("show");
    } else {
        $(".collapse").removeClass("show");
        $("#collapseThree").addClass("show");
    }
})
$("#headingFour").click(function() {
    if ($(".collapse").hasClass("show")) {
        $(".collapse").removeClass("show");
    } else {
        $(".collapse").removeClass("show");
        $("#collapseFour").addClass("show");
    }
})
$("#headingFive").click(function() {
    if ($(".collapse").hasClass("show")) {
        $(".collapse").removeClass("show");
    } else {
        $(".collapse").removeClass("show");
        $("#collapseFive").addClass("show");
    }
})




var width = window.innerWidth,
height = window.innerHeight,
c = document.getElementById('c'),
ctx = c.getContext('2d');
c.width = width;
c.height = height;

var paint = [];

var totalPaints = width/50;
var size = 20;

function init(){
    for (var i = 0; i < totalPaints; i++){
        addPaint();
    }
    setInterval( update, 40 );
}

function drawPaint(x,y,size, colour) {
    ctx.beginPath();
    ctx.arc(x, y, size ,0 , Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle=colour;
    ctx.fill();
}

function update(){
    for (var i = 0; i < paint.length; i++){
        paint[i].y = paint[i].y + paint[i].v;
        if (paint[i].y > height + 60){
            paint.splice(i,1);
            addPaint();
        }
        drawPaint(paint[i].x, paint[i].y, paint[i].s, paint[i].c);
    }
}

function addPaint(){
    //Try 50 times
    var i = 50;
    while(i > 0){
        size = Math.random() * size + 10;
        x = Math.random() * width;

        found = false;

        //Dont Allow drips ontop of each other (Overtaking drops destroy the prettyness)
        for (var j = 0; j < paint.length; j++){
            if ((x + size > paint[j].x) && (x - size < paint[j].x + paint[j].s)){
                found = true;
                break;
            }

            if ((x - size < paint[j].x) && (x + size > paint[j].x - paint[j].s)){
                found = true;
                break;
            }
        }

        if (found == false){
            paint.push({s:size,
                       x:x,
                       y:-60,
                       v:(Math.random() * 2) + 2,
                       c:'#' + (Math.random() * 0x313131 + 0xaaaaaa | 0).toString(16)});
            i--;
            return;
        }
    }
}

init();