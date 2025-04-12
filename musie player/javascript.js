 const musieArray = [
    {musieid :"musie/သူစိမ်း_သိပ္ပံထွန်း_Official_lyric_video_256k.mp3" ,title :"သူစိမ်း_သိပ္ပံထွန်း"},
    {musieid :"musie/အလွမ်းပြေအနမ်း_Bunny_Phyoe_Lyrics_256k.mp3" ,title :"အလွမ်းပြေအနမ်း_Bunny_Phyoe"},
    {musieid :"musie/Radio__G_fattWink__Lyric_video...(256k).mp3" ,title :"Radio__G_fattWink"},
    {musieid :"musie/Floke_Rose_နှင်းဆီကဗျာ_Lyric_Video_256k.mp3" ,title :"နှင်းဆီကဗျာ_Floke_Rose"},
    {musieid :"musie/Elody__Floke_Rose_x_Adjustor_Lyrics(256k).mp3" ,title :"Elody__Floke_Rose_x_Adjustor_"}
    
 ];
 const  playListContainerTag = document.getElementsByClassName('playlistcontainer')[0];
 const  audioTag = document.getElementsByClassName('audio')[0];
 const audioMinuteTag =document.getElementsByClassName('audio-minute')[0];
 const audioContainerTage = document.getElementById('audio-containertage');
  const playTag =document.getElementsByClassName('play')[0];
  const backSkipTage = document.getElementsByClassName('back-skip')[0];
  const nextSkipTage = document.getElementsByClassName('next-skip')[0];
            
 const    pauseTag = document.getElementsByClassName('pause')[0];
                  
 
 for (let i = 0; i < musieArray.length; i++) {
    
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('containerdiv');
    containerDiv.addEventListener('click',()=>{
      currentIndex= i;
     openAndclose();

        
    })
    const title = (i + 1).toString() + ". " + musieArray[i].title;
    containerDiv.textContent = title ;
    playListContainerTag.append(containerDiv);
 }
  let  durationTag = '00:00'
  let duration = 0;

 audioTag.addEventListener('loadeddata',() =>{
    duration = Math.floor(audioTag.duration); 
   durationTag = minuteAndseconds(duration) ;

 })

 const updateAudioContainerTage = (currenttime) => {
   const currentWith = (500/duration) * currenttime;
   audioContainerTage.style.width = currentWith.toString() + 'px';
 }

 audioTag.addEventListener('timeupdate',() =>{
   const currentTime = Math.floor(audioTag.currentTime); 
   const currentTimeText = minuteAndseconds(currentTime) ;

   const currentTimeTextAnDdurationTag = currentTimeText + " / " + durationTag;
   audioMinuteTag.textContent = currentTimeTextAnDdurationTag;
   updateAudioContainerTage(currentTime);

 })

 


  const minuteAndseconds = (total) => {
   const minutes = Math.floor(total / 60);
   const seconds = total % 60 ; 

   const minutesText = minutes < 10  ? '0' + minutes.toString() : minutes;
   const secondsText = seconds < 10  ? '0' + seconds.toString() : seconds;
   return minutesText + ':' + secondsText ; 
  
  }
  let currentIndex = 0 ; 
  let isPlay = false ; 
  playTag.addEventListener('click',() => {

    const currentTimeTag = Math.floor(audioTag.currentTime);
    isPlay = true;
    if (currentTimeTag === 0) {
     openAndclose();
    }else{   
      audioTag.play();
      pausAndPlaButtom();
    }
  })


  pauseTag.addEventListener('click', () => {
      isPlay = false
      audioTag.pause();
      pausAndPlaButtom();
  })
  const pausAndPlaButtom = () => {
    if (isPlay) {
      playTag.style.display = 'none';
      pauseTag.style.display = 'inline'
    }else{
       playTag.style.display = 'inline';
      pauseTag.style.display = 'none'
    }
  }
  backSkipTage.addEventListener('click',() => {
    if (currentIndex === 0) {
      return
    }else{
      currentIndex -= 1 ;
      openAndclose();
    }
  })
  nextSkipTage.addEventListener('click',() => {
    if (currentIndex === musieArray.length - 1) {
      return
    }else{
      currentIndex += 1 ;
      openAndclose();
    }
  })
  const openAndclose = () => {
    const musieid = musieArray[currentIndex].musieid;
      audioTag.src = musieid;
      audioTag.play();  
      isPlay = true ; 
      pausAndPlaButtom(); 
  }