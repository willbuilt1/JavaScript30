const checkbox = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const clear = document.querySelector('.clear');

let lastChecked;
let inBetween = false;

function clearBoxes(){
    checkbox.forEach(box => {
        box.checked = false;
    })
}

function strikethrough(e){
    
    // flag variable to set if inbetween
    
    // check if shift key is down and they are checking it
    if(e.shiftKey && this.checked){
        checkbox.forEach(box => {
            if(box === this || box === lastChecked) {
                // will flag those between clicked and last clicked as true 
                // lowest of last checked or clicked is reached then flag will be set to false for remainder
                inBetween = !inBetween;
            }
            if(inBetween){
                box.checked = true;
            }
        })
    }
    lastChecked = this;
}

// run clearBoxes on window load
clearBoxes();
//click event works even if keyboard is used to check box
checkbox.forEach(box => box.addEventListener('click', strikethrough));
clear.addEventListener('click', clearBoxes);
