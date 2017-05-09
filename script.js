$(document).ready(function(){
    setInterval(function(){
        var $robber = $('<img class="Robber" src="https://images.vexels.com/media/users/3/127786/isolated/preview/0a633855c250798d3ab1b2dbfe28f18e-funny-robber-profession-cartoon-by-vexels.png">')
        $("#Box").append($robber);
        $robber.css("left", $robber.offset().left + Math.random()*(350));
        $robber.css("top", 10);
        robFalling($robber);
   }, 1000);
});

function robFalling ($robber){
    setInterval(function(){
        $robber.css("top", $robber.offset().top + 1);
        checkCollision($robber);
    }, 900);
}

function checkCollision($robber){
    var carLeft = $("#Car").offset().left;
    var robLeft = $robber.offset().left;
    var carRight = carLeft + $("#Car").width();
    var robRight = robLeft + $robber.width();
    var carTop = $("#Car").offset().top;
    var robTop = $robber.offset().top;
    var carBottom = carTop + $("#Car").height();
    var robBottom = robTop + $robber.height();
    var boxBottom = $("#Box").offset().top + $("#Box").height();
    var boxLeft = $("#Box").offset().left
    var boxRight = boxLeft + $("#Box").width(); 
if(carRight > robLeft && carLeft < robRight && robBottom > carTop){
    $robber.hide();
    score = score + 100;
    $("#score").text(score);
    } 
else{ 
    $("#Car").show();
    }
if (robBottom > boxBottom){
    $robber.hide();
    }
}

var score = 0;

$("body").keydown(function(event){
    if (event.which === 39){
        $("#Car").css("left", $("#Car").offset().left + 50);
    } 
    else if (event.which === 37){
        $("#Car").css("left", $("#Car").offset().left - 50);
    }
//console.log($("#Car").offset().left);
});

//make it fall smoother
//incorperate the kid
//add effects