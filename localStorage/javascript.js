
const alertTag = document.querySelector("#alert");

const alertFunction = ( ) => {
    alertTag.innerHTML = '';   
    alertTag.classList.add('alert');
    const createDivTag = document.createElement('div');
    createDivTag.classList.add('create-div');
    createDivTag.append(' hello world hello world hello world hello world hello world');
    const buttonTag = document.createElement('button');
    buttonTag.textContent = 'Close';
    buttonTag.classList.add('btn','btn-light');
    const parntDivTag = document.createElement('div');
    parntDivTag.classList.add('parnt-div');
    parntDivTag.append(createDivTag , buttonTag);
    alertTag.append(parntDivTag);

    alertTag.style.bottom = `-${alertTag.offsetHeight}px`;

    setTimeout(() => {
        alertTag.style.bottom = '0px';
    }, 100);
   buttonTag.addEventListener('click', () => {
       
       localStorage.setItem('alert', 'true');

        alertTag.style.bottom = `-${alertTag.offsetHeight}px`;
    })
   
}
window.addEventListener('load', () => {
    const alertValue = localStorage.getItem('alert');
   if (alertValue !== 'true') {
       alertFunction();
   }
    
})