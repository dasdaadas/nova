window.onscroll =  () => {
    let navigation =   document.querySelector('.navbar');
     let showBottle = document.getElementById('preciousBeerBottle');

    
   if( window.scrollY >= 600){
     navigation.classList.add('navbar2')

   }

  if( window.scrollY < 600) {
    navigation.classList.remove('navbar2');
   }
    
    if(  window.scrollY >= 561 && window.scrollY <= 661 ) {
          let opacity = (window.scrollY - 561)/(661-561)
          console.log(opacity);
          showOpacity('preciousBeerBottle',opacity.toString());
          
           let margin = ((scrollY - 561) / (661 - 561)) * 5;
           
           let finalMargin = 5 - margin;

    // Ensure finalMargin does not go below 0
            finalMargin = Math.max(0, finalMargin);
          console.log(`margin = ${finalMargin.toFixed(1)}, @${window.scrollY}`);
          document.getElementById('erdinger').style.marginLeft = `${finalMargin.toFixed(1)}em`
           
  } 

     if(window.scrollY >= 1900 && window.scrollY <= 2300){
           let opacity =  (2300 - window.scrollY)/(2200-1900);
           console.log(opacity);
           showOpacity('preciousBeerBottle',opacity.toString());
           
           let margin = ((2300 - window.scrollY)/(2300-1900)) *5;
           let finalMargin = 5 - margin;
           document.getElementById('erdinger').style.marginLeft = `${finalMargin.toFixed(1)}em`
     }

     if(window.scrollY >= 2300 && window.scrollY <= 661) {
             showBottle.style.opacity = '0';
     }


}
 

function showOpacity(element,opacity){

      document.getElementById(`${element}`).style.opacity = opacity;
      console.log(opacity);
      
}









//  let opacity = 0;
//  setInterval( () => {

//    showOpacity('preciousBeerBottle', opacity);
//    if( opacity <= 1){
//    opacity += 0.1
//    }

//  },200)