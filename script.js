var on_off = false;

function On_off_balls() {
    if (on_off){
        on_off = false;
        return;
    }

    var balls = document.getElementsByClassName("light");


    for (var i = 0; i < balls.length; i++) {
        balls[i].style.animation = `ball_flash_${i +1} ${i+1 / 2}s infinite ease-in-out`;
    }

    on_off = true;
}