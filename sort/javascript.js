const photoListContainer  = document.querySelector('.video-list-container');
const dropdownItemTag = document.querySelectorAll('.dropdown-item');
 
      

const phptoArray = [
    {
        name : 'photo1',
        scr : 'image/photo1.jpg',
        uploadDate : new Date('2025-3-05'),
        view : 100,

    },
    {
        name : 'photo2',
        scr : 'image/photo2.jpg',
        uploadDate : new Date('2025-3-08'),
        view : 1000,

    }, 
    {
        name : 'photo3',
        scr : 'image/photo3.jpg',
        uploadDate : new Date('2025-3-07'),
        view : 10,


    },
    {
        name : 'photo4',
        scr : 'image/photo4.jpg',
        uploadDate : new Date('2025-3-06'),
        view : 1290,

    }
]
dropdownItemTag.forEach((item) => {
    item.addEventListener('click', (event) => {
       const sortType = event.target.id ;
       if (sortType === 'Ascending') {
          const ascending =  phptoArray.sort((a, b) => a.uploadDate.getTime() - b.uploadDate.getTime());
            
            createphotoTag(ascending);
       }else if (sortType === 'Descending') {
       const descending =  phptoArray.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
            
        createphotoTag(descending);
       }else {
        const mostView =  phptoArray.sort((a, b) => b.view - a.view);
            
        createphotoTag(mostView);
    }
   }) 
})
const createphotoTag = (photos) => {
    photoListContainer.innerHTML = '';
   photos.forEach((photo ) => {
    const photoTag = `
    <div class= "photo-list-container">
        <div class="photo-list">
            <img src="${photo.scr}" >
            <h3>${photo.name}</h3>
            <p>${photo.uploadDate.toLocaleDateString()}</p>
             <p>${photo.view}</p>
        </div>
    </div>
    `
    photoListContainer.innerHTML += photoTag;
   });
}

createphotoTag(phptoArray);