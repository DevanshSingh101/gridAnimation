// creats horizontal boxes to accomodate the main boxes
hori = document.createElement('div'); 
hori.className  = 'hori';

box = document.createElement('div');
box.className = 'box';

//seelcting the drawing area
area = document.querySelector('.Area');

let num = 20; //number of boxes in grid

for(let i = 1; i <=num; i++) {
    area.appendChild(hori);
    for(let k = 1; k<=num; k++){
        hori.appendChild(box);
    }
}
