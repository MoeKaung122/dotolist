 const shoppingListContainner = document.getElementsByClassName('list')[0];
 const inputTag = document.getElementsByClassName('input')[0];
 let idTag = 1;
inputTag.addEventListener("change",(event)=>{
     const inputValue = event.target.value;
     const containerDiv = document.createElement('div');
     containerDiv.classList.add('containerdiv');
    
     const parntDiv  = document.createElement('div');
     parntDiv.classList.add('parntdiv');
     
    parntDiv.addEventListener('click',()=>{
        const classExist = parntDiv.classList.contains('through');
        if (classExist) {
            parntDiv.classList.remove('through');
        }else{
            parntDiv.classList.add('through');
        }
    })
     const spantag  = document.createElement('span');
     spantag.id = idTag;
     //<i class="fa-solid fa-trash"></i>
     const itag  = document.createElement('i');
     itag.classList.add('fa-solid','fa-trash');
     itag.addEventListener('click',()=>{
        containerDiv.remove();
     })
     const product = idTag.toString()+". " +inputValue;
     spantag.append( product);

     parntDiv.append(spantag);
     containerDiv.append(parntDiv,itag);
     shoppingListContainner.append(containerDiv);
     inputTag.value = "";
     idTag +=1;


});