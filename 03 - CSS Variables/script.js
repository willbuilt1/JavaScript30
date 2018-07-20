//Look for inputs that are children of class controls
const inputs = document.querySelectorAll('.controls input');
const img = document.querySelector('img');


//Set image width
function setImageWidth(){
    const padding = document.querySelector('#spacing').value;
    const imgWidth= (window.innerWidth)- (2*padding)-50;
    img.style.width = `${imgWidth}px`
}

//deal with change
function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    setImageWidth();
}

//listen for change on each of the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
window.addEventListener('resize', setImageWidth);

//set image width on load
setImageWidth();