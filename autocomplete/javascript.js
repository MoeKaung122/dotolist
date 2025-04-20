const searchTag = document.getElementById('search')
let productArray;
const url = 'https://fakestoreapi.com/products';
const fetchData = async (url) => {
   try {
    const response = await fetch(url);
    const data = await response.json();
    productArray = data;
    
    searchTag.disabled = false;
    return productArray;
    
   }catch (error) {
    console.error('Error fetching data:', error);
    
   }
    
}

fetchData(url);


const listContainerTag = document.getElementsByClassName('listcontainer')[0];
const  showTag = document.getElementsByClassName('show')[0];
const containerTag = document.getElementsByClassName('container')[0];


let productArrayFitter = [];

searchTag.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowDown' || event.key === 'ArrowUp'
){
        
            navigatAndSelectProduct (event.key);
            return;
}
    
    listContainerTag.innerHTML = '';    

    const search = event.target.value;
  if (search.length === 0) {
    return;
  }
productArrayFitter = productArray.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
})
   const hasProduct = productArrayFitter.length > 0;
   if (hasProduct) {

      for (let i = 0; i < productArrayFitter.length; i++) {

         const containerDiv = document.createElement('div');
         containerDiv.id = productArrayFitter[i].id;
         containerDiv.classList.add('containerdiv');
      
         const titleTag = document.createElement('div');
         titleTag.classList.add('title');
         titleTag.textContent = productArrayFitter[i].title;


         const imageTag = document.createElement('img');
         imageTag.classList.add('image');
         imageTag.src = productArrayFitter[i].image;
         
         containerDiv.append(titleTag, imageTag);
         listContainerTag.append(containerDiv);
        
      }
   }

})
let indexToSelect = -1;
const navigatAndSelectProduct = (key) => {

    if (key === 'ArrowDown') {
        if (indexToSelect === productArrayFitter.length - 1) {
            indexToSelect = -1;
            unSelectedDiv();
            return;
            
        }
       indexToSelect += 1 ; 
         const productToSelectTag = selectedDiv(indexToSelect);
         if (indexToSelect > 0) {
           unSelectedDiv();
            
         }
         productToSelectTag.classList.add('selected');
        
    }else if (key === 'ArrowUp') {
      if (indexToSelect === -1) {
        return
      }
      if (indexToSelect === 0) {
        unSelectedDiv();
        indexToSelect = -1;
        return;
      }
      indexToSelect -= 1 ; 
      unSelectedDiv();
      const productToSelectTag = selectedDiv(indexToSelect);
      productToSelectTag.classList.add('selected');

    }
     
}
    const unSelectedDiv = () => {
    const productToUnSelect = document.getElementsByClassName('selected')[0];
            productToUnSelect.style.backgroundColor = 'white';
            productToUnSelect.firstChild.style.color = 'black';
            productToUnSelect.classList.remove('selected');
  }
  const selectedDiv = (index) => {
    const productToSelect = productArrayFitter[index].id.toString();
         const productToSelectTag = document.getElementById(productToSelect);

         productToSelectTag.style.backgroundColor = 'blue';
         productToSelectTag.firstChild.style.color = 'white';
         return productToSelectTag;
  }