let homeScoreBoard = document.getElementById("home-score");
let guestScoreBoard = document.getElementById("guest-score");

let HomeScoreBtnOne = document.getElementById("home-score-btn-1");
let HomeScoreBtnTwo = document.getElementById("home-score-btn-2");
let HomeScoreBtnThree = document.getElementById("home-score-btn-3");

let GuestScoreBtnOne = document.getElementById("guest-score-btn-1");
let GuestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let GuestScoreBtnThree = document.getElementById("guest-score-btn-3");


let homeScore = 0;
let guestScore = 0;



function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreBoard.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreBoard.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreBoard.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreBoard.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreBoard.textContent = guestScore
}

function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreBoard.textContent = guestScore
}



if (homeScore.value > 0) {
    homeScoreBoard.classList.add("win")
}


