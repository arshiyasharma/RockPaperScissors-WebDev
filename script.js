let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let msg = document.querySelector("#result");
// console.log(msg);
let playersc = parseInt(document.querySelector("#playersc").textContent);
let compsc = parseInt(document.querySelector("#compsc").textContent);



function handleClick(event) {
    const box = event.currentTarget; // Get the box that was clicked not the event target (img)
    let playerChoice = box.dataset.index; // Get the index of the clicked box
    let computerChoice = Math.floor(Math.random() * 3); // Randomly select a choice for the computer from 0 to 2
    ch = ["Rock", "Paper", "Scissors"];
    if (playerChoice == computerChoice) {
        msg.innerHTML = "It's a tie!";
        msg.style.backgroundColor = "white";
    }
    else if (
        (playerChoice == 0 && computerChoice == 2) || // Rock beats Scissors
        (playerChoice == 1 && computerChoice == 0) || // Paper beats Rock
        (playerChoice == 2 && computerChoice == 1) // Scissors beats Paper
    ) {
        msg.innerHTML = "YOU WIN!<br>Computer played <u>"+ch[computerChoice]+"</u>.";
        document.querySelector("#playersc").innerHTML = ++playersc;
        msg.style.backgroundColor = "lightgreen";
        
    } else {
        msg.innerHTML = "LOST. <br>Computer played <u>"+ch[computerChoice]+"</u>. Try again!";
        document.querySelector("#compsc").innerHTML = ++compsc;
        msg.style.backgroundColor = "#ff474c";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", handleClick);
});






