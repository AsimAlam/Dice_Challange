var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6)+1;
console.log(randomNumber1);
var s = "dice" + randomNumber1 + ".png";
var s1 = "dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute('src', "images/" + s);
document.querySelector(".img2").setAttribute('src', "images/" + s1);
if (randomNumber1 > randomNumber2) {
    document.querySelector("#heading").innerHTML = "player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("#heading").innerHTML = "player 2 wins";
} else {
    document.querySelector("#heading").innerHTML = "draw";
}