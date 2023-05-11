function Snow_Rain() {
    let ulRain = document.querySelector("ul.rain");

    for (let i = 0; i < 200; i++) {
        const li = document.createElement("li");

        const duration = Math.random() * (24 - 12) + 12
        li.style.animationDuration = `${duration}s`

        const position = Math.random() * (99 - 1) + 1
        li.style.left = `${position}%`;

        const delay = Math.random() * (5 - 0.1) + 0.1
        li.style.animationDelay = `${delay}s`;

        li.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`;

        ulRain.appendChild(li)
    }
}

Snow_Rain();