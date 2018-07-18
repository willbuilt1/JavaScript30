// function to play sound and add 'playing' CSS class that corresponds to data key 
function playSound(e){
    let keyID = `data-key="${e.keyCode}"`
    const audio =document.querySelector(`audio[${keyID}]`);
    const key =document.querySelector(`.key[${keyID}]`);
    if (!audio) return; //will stop function if no audio (null);
    audio.currentTime = 0; //rewind to start
    audio.play();
    key.classList.add('playing');
}

//at the end of transform ONLY as longest of all transitions remove 'playing' CSS class
function removeTransition(e){
    if(e.propertyName !=='transform')return//skip it if its not a transform
    this.classList.remove('playing');
}


//create variable of all keys and add listener forEach of them (returns nodeList could use Array.from if further methods are required)
const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//listen for event(e) 'keydown'
window.addEventListener('keydown', playSound);