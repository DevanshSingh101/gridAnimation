const button = document.querySelector("#prompt");
let num = 20; //number of boxes in grid
let w_init = 800/num; //calculate width of box
let w_old = w_init;
const root = document.querySelector(':root');


// creats horizontal boxes to accomodate the main boxes
const hori = document.createElement('div'); 
hori.className  = 'hori';

const box = document.createElement('div');
box.className = 'box';
const area = document.querySelector('.area');

createGrid();

button.onclick = function getWidth(){
    num = prompt("Type the size");
       
    let w_old = w;
    createGrid();
}


function createGrid(w){

// box.setAttribute('style', 'height:' + w + ';width:'+ w + ';');

console.log(w);
console.log(num);

for(let i = 1; i <=num; i++) {
    const hori = document.createElement('div'); 
    hori.className  = 'hori';
    area.appendChild(hori);
    for(let k = 1; k<=num; k++){
        const box = document.createElement('div');
        box.className = 'box';
        box.setAttribute('style', 'height:' + w + 'px' + ';width:'+ w + 'px' + ';');
        hori.appendChild(box);
    }
}
}
