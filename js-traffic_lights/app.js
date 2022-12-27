const circles = document.querySelectorAll(".circle")
const btnNode = document.querySelector(".button")
let activeLight = 0;

btnNode.addEventListener('click', function () {
    if (circles[activeLight].getAttribute("color") == "red") {
        document.getElementById('button').disabled = true;

        setTimeout(function () {{};
        }, 1500);

        changeLight();

        setTimeout(function () {
            changeLight();
        }, 1500);

        setTimeout(function () {
            document.getElementById('button').disabled = false;
        }, 1500);
    }
    else {
        changeLight();
    }
    //console.log(circles[activeLight].getAttribute("color"))
    //changeLight();
})

function changeLight() {
    circles[activeLight].className = 'circle';
    activeLight++;

    if( activeLight > 2) {
        activeLight = 0;
    }
    
    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"))
}
