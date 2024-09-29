document.addEventListener("keydown",closeFunction);

function closeFunction(e){
   if(e.key == " "){
    console.log(e.key);
    alert("Thank You..!!");
    window.close();
    
   }else{
    console.log(e.key);
    alert("Invalid Key Pressed");
    
   }
}
