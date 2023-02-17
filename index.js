let scoreHome = 0
let scoreGuest = 0

document.getElementById("home-score-el").textContent = scoreHome
document.getElementById("guest-score-el").textContent = scoreGuest



let homeScoreEl = document.getElementById("home-score-el")

function add1() {
    scoreHome += 1
    homeScoreEl.textContent = scoreHome

}

function add2() {
    scoreHome += 2
    homeScoreEl.textContent = scoreHome
}

function add3() {
    scoreHome += 3
    homeScoreEl.textContent = scoreHome
}

let guestScoreEl = document.getElementById("guest-score-el")

function guestAdd1() {
    scoreGuest += 1
    guestScoreEl.textContent = scoreGuest
}

function guestAdd2() {
    scoreGuest += 2
    guestScoreEl.textContent = scoreGuest
}

function guestAdd3() {
    scoreGuest += 3
    guestScoreEl.textContent = scoreGuest
}