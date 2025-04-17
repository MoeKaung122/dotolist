const hamBarGerTag = document.querySelector(".humburger-container");
const hideDivTag = document.querySelector(".hidediv");
const liTag = document.getElementsByTagName("li");

const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");  
const line3Tag = document.querySelector(".line3");


hamBarGerTag.addEventListener('click', () => {
     const activeTag =  hamBarGerTag.classList.contains('active');
    if (activeTag) {
        line1Tag.classList.remove('rotatePlus45deg');
        line2Tag.classList.remove('hideline2');
        line3Tag.classList.remove('rotateMinus45deg');
        hamBarGerTag.classList.remove('active');
        hideDivTag.classList.remove('hide');
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.remove('movelitag');
        }   
    }else {
        line1Tag.classList.add('rotatePlus45deg');
        line2Tag.classList.add('hideline2');
        line3Tag.classList.add('rotateMinus45deg');
        hideDivTag.classList.add('hide');
        hamBarGerTag.classList.add('active');
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.add('movelitag');
        }   
    }
})