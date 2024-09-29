const num = 20; //number of boxes in grid
const area = document.querySelector('.area');
w = 800/num; //calculate width of box


// creats horizontal boxes to accomodate the main boxes
const hori = document.createElement('div'); 
hori.className  = 'hori';

const box = document.createElement('div');
box.className = 'box';



box.setAttribute('style', 'height:' + w + ';width:'+ w + ';');



for(let i = 1; i <=num; i++) {
    const hori = document.createElement('div'); 
    hori.className  = 'hori';
    area.appendChild(hori);
    for(let k = 1; k<=num; k++){
        const box = document.createElement('div');
        box.className = 'box';
        box.setAttribute('style', 'height:' + '40' + 'px' + ';width:'+ w + 'px' + ';');
        hori.appendChild(box);
    }
}
