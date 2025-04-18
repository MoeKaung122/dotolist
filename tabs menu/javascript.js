const tabMenuArray = ['home', 'about', 'services', 'contact','login'];
const ulTag = document.querySelector('ul');
const sideBarTag = document.querySelector('.side-bar');
const helloTag = document.querySelector('.hello');

const divCreateFunction = (par) => {
    const createDivTag = document.createElement('div');
    createDivTag.classList.add('create-div');
    const hello = par;
    createDivTag.textContent = hello;
    helloTag.append(createDivTag);
    
}
for (let i = 0; i < tabMenuArray.length; i++) {

    const liTag = document.createElement('li');
    liTag.id = i;
    liTag.append(tabMenuArray[i].toLocaleUpperCase());
    ulTag.append(liTag);
    liTag.addEventListener('click', (event) => {
        
        const clickedTagId = event.target.id;
        const ckickedLiTag = document.getElementById(clickedTagId);
        const clickedLiTagWidth = ckickedLiTag.offsetWidth;
        const clickedLiTagLeft = ckickedLiTag.offsetLeft;
        sideBarTag.style.width = clickedLiTagWidth + 'px';
        sideBarTag.style.transform = `translateX(${clickedLiTagLeft}px)`;
        if (event.target.id === '0') {
            helloTag.innerHTML = '';
            divCreateFunction('home');
            
        }else if (event.target.id === '1') {
            helloTag.innerHTML = '';
            divCreateFunction('about');
        }else if (event.target.id === '2') {
            helloTag.innerHTML = '';
            divCreateFunction('services');
          }else if (event.target.id === '3') {
            helloTag.innerHTML = '';
            divCreateFunction('contact');
        }else  {
            helloTag.innerHTML = '';
            divCreateFunction('login');
        }

    });
    if (i === 0) {
        sideBarTag.style.width = liTag.offsetWidth + 'px';
        helloTag.innerHTML = '';
        divCreateFunction('home');
    }
    
}

