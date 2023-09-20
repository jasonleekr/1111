let computerNum = 0;
let playbutton = document.getElementById("playbutton");
let userinput = document.getElementById("userinput");
let resultarea = document.getElementById("resultarea");
let resetbutton = document.getElementById("resetbutton");
let chances = 5;
let gameover = false;
let chancearea = document.getElementById("chancearea");
let history = [];

playbutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
userinput.addEventListener("focus", function() {
    userinput.value = "";
});

function pickrandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let uservalue = parseInt(userinput.value); // 문자열을 숫자로 변환

    if (uservalue < 1 || uservalue > 100) {
        resultarea.textContent = "1 과 100사이 숫자를 입력해 주세요.";
        return;
    }
    if (history.includes(uservalue.toString())) { // 숫자를 문자열로 변환하여 비교
        resultarea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요";
        return;
    }

    chances--;
    chancearea.textContent = `남은기회:${chances}번`;

    if (uservalue < computerNum) {
        resultarea.textContent = "Up!!! "
    } else if (uservalue > computerNum) {
        resultarea.textContent = "Down!!!"
    } else {
        resultarea.textContent = "정답!!"
        gameover = true;
    }

    history.push(uservalue.toString()); // 숫자를 문자열로 변환하여 저장

    if (chances <= 0) { // 기회가 0 이하일 때 게임 종료
        gameover = true;
    }

    if (gameover == true) {
        playbutton.disabled = true;
    }
}

function reset() {
    userinput.value = "";
    pickrandomNum();
    resultarea.textContent = "결과값이 나옵니다!";
    history = []; // 이력 초기화
    chances = 5;   // 기회 초기화
    gameover = false; // 게임 종료 상태 초기화
    playbutton.disabled = false; // 버튼 활성화
    chancearea.textContent = `남은기회:${chances}번`;
}

pickrandomNum();
