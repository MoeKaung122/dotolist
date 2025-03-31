const iamgearray =[
    'image/photo2.jpg',
    'image/photo3.jpg',
    'image/photo4.jpg',
    'image/photo5.jpg'
]
const buttom = document.getElementById('buttom');
let image= document.getElementsByClassName('image')[0];
const orignalimage = image.src;


let count = 0
buttom.addEventListener('click',() =>{
    if (count === 4) {
        count = 0 ;
        image.src = orignalimage;
        return
    }
     const imagelink = iamgearray[count];
     image.src = imagelink;
     count += 1;
     console.log('click' , count);
})