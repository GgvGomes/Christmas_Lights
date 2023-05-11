var on_off = false;
var mode = 1;
var balls = document.getElementsByClassName("light");

const firstMode = () => {
    for (var i = 0; i < balls.length; i++) {
        if ((i + 1) % 2 == 0)
            Animate_Balls(balls[i], i + 1, 1)
        else Animate_Balls(balls[i], i + 1, 1.5)
    }
};
const secondMode = () => {
    // Animate_Balls_WithDalay(balls[i], i + 1, i * .6, i*.5)
    for (var i = 0; i < balls.length; i++)
        Animate_Balls_WithDalay(balls[i], i + 1, 1, (i+1) * .5)
};
const thirdMode = () => {
    for (var i = 0; i < balls.length; i++) {
        if ((i + 1) % 2 == 0)
            Animate_Balls(balls[i], i + 1, 1)
        else Animate_Balls(balls[i], i + 1, 2.2)
    }
}

function On_off_balls() {
    if (on_off) {
        on_off = false;
        return;
    }

    firstMode();

    on_off = true;
}

function Handle_Change_Speed() {
    mode++

    switch (mode) {
        case 1:
            firstMode();
            break;
        case 2:
            secondMode();
            break;
        case 3:
            thirdMode();
            break;
    }
}

function Animate_Balls(ball, i, time) {
    ball.style.animation = `ball_flash_${i} ${time}s infinite ease-in-out`;
}

function Animate_Balls_WithDalay(ball, i, time, delay) {
    ball.style.animation = `ball_flash_${i} ${time}s infinite ease-in-out`;
    ball.style.animationDelay = `${delay}s`
}