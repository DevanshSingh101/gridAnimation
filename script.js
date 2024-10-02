const button = document.querySelector("#prompt");
let num = 20; //number of boxes in grid
let w = 800/num; //calculate width of box
const root = document.querySelector(':root');


// creats horizontal boxes to accomodate the main boxes
const hori = document.createElement('div'); 
hori.className  = 'hori';



const area = document.querySelector('.area');

createGrid();

button.onclick = function getWidth(){
    ex_num = num;
    num = prompt("Type the size");
    deleteGrid(ex_num);
    w = 800/num;    
    createGrid();
    
}

//  grid = document.querySelector('.box');




function deleteGrid(num_old){
    //delete the children of area
    //select area
    //delete hori
    for(let i = 1; i<=num_old; i++){
        let hori_ = document.querySelector('.hori');
        area.removeChild(hori_);
    }
}
function createGrid(){



for(let i = 1; i <=num; i++) {
    const hori = document.createElement('div'); 
    hori.className  = 'hori';
    area.appendChild(hori);
    for(let k = 1; k<=num; k++){
        const box = document.createElement('div');
        box.className = 'box';
        box.setAttribute('style', 'height:' + w + 'px' + ';width:'+ w + 'px' + ';');
        fill();
        hori.appendChild(box);
    }
}


// fill();  
}


function fill()
{
boxNode = document.querySelectorAll('.box');
boxNode.forEach(function (item){
    item.onmouseover = function(){
        item.setAttribute('style', 'background-color:black;');
}
});
}
