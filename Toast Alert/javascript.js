const btnTag = document.querySelector(".btn");
const alertTag = document.querySelector(".alert");

btnTag.addEventListener('click', () => {  
    alertTag.innerHTML = '';     
    const createDivTag = document.createElement('div');
    createDivTag.classList.add('create-div');
    createDivTag.append(' hello world hello world hello world hello world hello world');
    alertTag.append(createDivTag);
    createDivTag.style.bottom = `-${createDivTag.offsetHeight}px`;
    setTimeout(() => {
        createDivTag.style.bottom = '0px';
    }, 300);
    setTimeout(() => {
        createDivTag.style.bottom = `-${alertTag.offsetHeight}px`;
    }, 3000);
 })