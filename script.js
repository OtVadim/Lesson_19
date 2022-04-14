function init() {
   function diss() {
       console.log('its happen');
       document.getElementById("text").style.display="none";
   }

   tryIt.addEventListener('click', diss);

   let btn = document.getElementById('TurnIn');

   btn.onclick = function() {
       if (document.getElementById("smlist").style.display == "block"){
        return document.getElementById("smlist").style.display="none"; 
       } else {
            return document.getElementById("smlist").style.display="block";
       };
   };

   let btnRec = document.getElementById('TurnOff');

   btnRec.onclick = function() {
        document.getElementById("rectangle").style.display="none";
   };

   let btnRec_A = document.getElementById('TurnOff_A');

   btnRec_A.onclick = function() {
        document.getElementById("rectangle_A").style.display="none";
   };






   
    

   
   

}

window.onload = init;

