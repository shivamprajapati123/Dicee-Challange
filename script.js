var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
console.log(random1)
console.log(random2)

let randomImg1="./images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
let randomImg2="./images/dice"+random2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",randomImg2);

if (random1>random2) {
    document.querySelector("h1").innerHTML="🚩Player 1 Wins "
}
else if (random1<random2) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw";
}