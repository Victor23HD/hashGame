let boxValue = [];

for(let i = 1; i < 10; i++){
    boxValue[i] = document.getElementById(`block-${i}`);
}


function checkWin()
{  
    // Check Horizontal 

    if(boxValue[1].childNodes.length > 0 && boxValue[2].childNodes.length > 0 && boxValue[2].childNodes.length > 0)
    {
        let box1 = boxValue[1].childNodes[0].className;
        let box2 = boxValue[2].childNodes[0].className;
        let box3 = boxValue[3].childNodes[0].className;

        if(box1 == 'x' && box2 == 'x' && box3 == 'x'){
            console.log("X ganhouuu!!!");
        }else if(box1 == 'o' && box2 == 'o' && box3 == 'o'){
            console.log("O ganhouuu!!!");
        }

    }else if(boxValue[4].childNodes.length > 0 && boxValue[5].childNodes.length > 0 && boxValue[6].childNodes.length > 0)
    {
        let box4 = boxValue[4].childNodes[0].className;
        let box5 = boxValue[5].childNodes[0].className;
        let box6 = boxValue[6].childNodes[0].className;

        if(box4 == 'x' && box5 == 'x' && box6 == 'x'){
            console.log("X ganhouuu!!!");
        }else if(box4 == 'o' && box5 == 'o' && box6 == 'o'){
            console.log("O ganhouuu!!!");
        }

    }else if(boxValue[7].childNodes.length > 0 && boxValue[8].childNodes.length > 0 && boxValue[9].childNodes.length > 0)
    {
        let box7 = boxValue[7].childNodes[0].className;
        let box8 = boxValue[8].childNodes[0].className;
        let box9 = boxValue[9].childNodes[0].className;

        if(box7 == 'x' && box8 == 'x' && box9 == 'x'){
            console.log("X ganhouuu!!!");
        }else if(box7 == 'o' && box8 == 'o' && box9 == 'o'){
            console.log("O ganhouuu!!!");
        }
    }

    // Check Vertical

    if(boxValue[1].childNodes.length > 0 && boxValue[4].childNodes.length > 0 && boxValue[7].childNodes.length > 0)
    {
        let box1 = boxValue[1].childNodes[0].className;
        let box4 = boxValue[4].childNodes[0].className;
        let box7 = boxValue[7].childNodes[0].className;

        if(box1 == 'x' && box4 == 'x' && box7 == 'x'){
            console.log("X ganhouuu!!!");
        }else if(box1 == 'o' && box4 == 'o' && box7 == 'o'){
            console.log("O ganhouuu!!!");
        }

    }else if(boxValue[2].childNodes.length > 0 && boxValue[5].childNodes.length > 0 && boxValue[8].childNodes.length > 0)
    {
        let box2 = boxValue[2].childNodes[0].className;
        let box5 = boxValue[5].childNodes[0].className;
        let box8 = boxValue[8].childNodes[0].className;

        if(box2 == 'x' && box5 == 'x' && box8 == 'x'){
            console.log("X ganhouuu!!!");
        }else if(box2 == 'o' && box5 == 'o' && box8 == 'o'){
            console.log("O ganhouuu!!!");
        }

    }else if(boxValue[3].childNodes.length > 0 && boxValue[6].childNodes.length > 0 && boxValue[9].childNodes.length > 0)
    {
        let box3 = boxValue[3].childNodes[0].className;
        let box6 = boxValue[6].childNodes[0].className;
        let box9 = boxValue[9].childNodes[0].className;

        if(box3 == 'x' && box6 == 'x' && box9 == 'x'){
            console.log("X ganhouuu!!!");
        }else if(box3 == 'o' && box6 == 'o' && box9 == 'o'){
            console.log("O ganhouuu!!!");
        }
    }

    // Check Diagonal

    if(boxValue[1].childNodes.length > 0 && boxValue[5].childNodes.length > 0 && boxValue[9].childNodes.length > 0)
    {
        let box1 = boxValue[1].childNodes[0].className;
        let box5 = boxValue[5].childNodes[0].className;
        let box9 = boxValue[9].childNodes[0].className;

        if(box1 == 'x' && box5 == 'x' && box9 == 'x'){
           console.log("X ganhouuu!!!");
        }else if(box1 == 'o' && box5 == 'o' && box9 == 'o'){
           console.log("O ganhouuu!!!");
        }

    }else if(boxValue[7].childNodes.length > 0 && boxValue[5].childNodes.length > 0 && boxValue[3].childNodes.length > 0)
    {
        let box7 = boxValue[2].childNodes[0].className;
        let box5 = boxValue[5].childNodes[0].className;
        let box3 = boxValue[8].childNodes[0].className;

        if(box7 == 'x' && box5 == 'x' && box3 == 'x'){
            console.log("X ganhouuu!!!");
        }else if(box7 == 'o' && box5 == 'o' && box3 == 'o'){
            console.log("O ganhouuu!!!");
        }
    }

    // Check Hash

    let counter = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++
        }
    }

    if(counter == 9){
        console.log("Deu velha");
        return false
    }
    
    
}

