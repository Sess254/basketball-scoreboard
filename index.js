let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let homePoints = 0;
let guestPoints = 0;

function onePointerHome() {
    homePoints  += 1;
    homeScore.textContent = homePoints;
};

function twoPointerHome() {
    homePoints += 2;
    homeScore.textContent = homePoints;
}

function threePointerHome() {
    homePoints += 3;
    homeScore.textContent = homePoints;
}

function onePointerGuest() {
    guestPoints += 1;
    guestScore.textContent = guestPoints;
};

function twoPointerGuest() {
    guestPoints += 2;
    guestScore.textContent = guestPoints;
}

function threePointerGuest() {
    guestPoints += 3;
    guestScore.textContent = guestPoints;
}

function newGame() {
    guestPoints = 0;
    homePoints = 0;
    guestScore.textContent = guestPoints;
    homeScore.textContent = homePoints;
}