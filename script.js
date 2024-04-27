console.log("script is working");

const run = () => {

    let bubble;
    let scores = 0;
    let timer = 30;
    let hits = 0;


    function createBubble() {
        bubble = "";
        for (let i = 1; i <= 126; i++) {

            let rnd = Math.floor(1 + Math.random() * 10);

            bubble += `<div class="bubble">${rnd}</div>`;

            document.querySelector(".pbtm").innerHTML = bubble;

        }
    }


    function setTimer() {

        timerInt = setInterval(function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#timer").innerHTML = "00:" + timer;
            } else {
                clearInterval(timerInt);





                document.querySelector(".pbtm").innerHTML = `
                
                <div class="over">
                <h1>Game Over 🙂</h1>
                <h2>Your score is: ${scores}</h2>
                <button id="rest" class="btn yes">Restart</button>
                
                
                </div>
                
                ` ;
                document.querySelector('#rest').addEventListener('click', () => {
                    // document.querySelector(".go").click();
                    window.location.reload();
                    upper.style.display = "none";
                    cover.style.display = "none";




                });


            }
        }, 1000);
    }



    function getHit() {
        hits = Math.floor(1 + Math.random() * 10);

        hit.innerHTML = hits;
    }


    function increaseScore() {
        scores += 10;
        score.innerHTML = scores;
    }
    function decreaseScore() {
        scores -= 10;
        score.innerHTML = scores;
    }

    document.querySelector(".pbtm").addEventListener("click", (e) => {
        if (Number(e.target.innerHTML) === hits) {
            increaseScore();
            createBubble();
            getHit();
        }


        else if (!(Number(e.target.innerHTML) === hits)) {
            decreaseScore();
            createBubble();
            getHit();
        }

    });







    createBubble();
    setTimer();
    getHit();





}


document.querySelector(".go").addEventListener("click", () => {

    upper.style.display = "none";
    cover.style.display = "none";
    run();

});