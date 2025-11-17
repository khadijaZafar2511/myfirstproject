let buttons = document.querySelectorAll(".btn");
let resetbutton = document.querySelector("#reset");
let newbutton = document.querySelector("#newgame");
let message = document.querySelector(".message");
let messageC = document.querySelector(".messageC");
let winner;
let turno = false;
let count = 0;
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (turno == true) {
            button.innerText = "O";
            turno = false;
        }
        else {
            button.innerText = "X";
            turno = true;
        }
        button.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count == 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    message.innerText = "Game was draw";
    disableButtons();
    message.classList.remove("hide");
};
const enableButtons = () => {
    for (let button of buttons) {
        button.innerText = "";
        button.disabled = false;
    }
};
const disableButtons = () => {
    for (let button of buttons) {
        button.disabled = true;
    }
};

const showWinner = (winner) => {
    message.innerText = `Congratulations Winner is ${winner}`;
    message.classList.remove("hide");
    disableButtons();
};
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let posV1 = buttons[pattern[0]].innerText;
        let posV2 = buttons[pattern[1]].innerText;
        let posV3 = buttons[pattern[2]].innerText;
        if (posV1 != "" && posV2 != "" && posV3 != "") {
            if (posV1 === posV2 && posV2 === posV3) {
                showWinner(posV1);
                console.log(`congratulations winner is ${posV1}`);
                return true;
            }

        }
    }
};
const resetgame = () => {
    turno = false;
    count = 0;
    enableButtons();
    message.classList.add("hide");

};
newbutton.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame);








