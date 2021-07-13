let times = 0;

function getID(id) {
    return document.getElementById(id);
}

function StartGame() {
    times = 0;
    getID("input").style.visibility = "visible";
    getID("input").value = "";
    getID("min-num").style.display = "";
    getID("max-num").style.display = "";
    getID("result").innerHTML = "to";
    getID("min-num").innerHTML = 1;
    getID("max-num").innerHTML = 100;
    getID("start-guess-button").innerHTML = "guess";
    let a = GenerateRandomNumber(1, 100);
    getID("start-guess-button").setAttribute("onclick", `GameLoop(${a});`);   
}

function GameLoop(r) {
    times ++
    let user_input = getID("input").value;
    if (user_input != "") {
        if (user_input < r && user_input >= 1) {
            getID("min-num").innerHTML = user_input;
        }
        else if (user_input > r && user_input <= 100) {
            getID("max-num").innerHTML = user_input;
        }
        else if (user_input == r) {
            getID("input").style.visibility = "hidden";
            getID("min-num").style.display = "none";
            getID("max-num").style.display = "none";
            getID("result").innerHTML = `Correct, You have tried ${times} times.`;
            getID("start-guess-button").innerHTML = "play again";
            getID("start-guess-button").setAttribute("onclick", `StartGame()`)
        }
        else if (user_input == "hard mode") {
            getID("min-num").innerHTML = 1;
            getID("max-num").innerHTML = 10000;
            var hr = GenerateRandomNumber(1, 10000);
            times = 0;
            getID("start-guess-button").setAttribute("onclick", `GameLoop(${hr});`);
        }
        else if (user_input == "test") {
            times -- 
            alert(`r is ${r}`);
        }
    }

    if (user_input < 1 || user_input > 100) {
        times --
    }

    getID("input").value = "";
}

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}