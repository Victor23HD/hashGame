let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
const boxClear = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Play Contactor
let player1 = 0;
let player2 = 0;



// Adding Click Event To Boxes

for(let i = 0; i < boxes.length; i++)
{
    // When Someone Clicks The Box
    boxes[i].addEventListener("click", function() {
        
        let playerEl = checkPlayer(player1,player2);

        if(this.childNodes.length == 0)
        {
            let clonePlayer = playerEl.cloneNode(true);
            this.appendChild(clonePlayer);

            player1 == player2 ? player1++ : player2 ++

            checkWin();

        }
    });

}

function checkPlayer(player1,player2)
{
    if(player1 == player2)
    {   
        playerEl = x;
    }else{
        playerEl = o;
    }
    return playerEl;
}
