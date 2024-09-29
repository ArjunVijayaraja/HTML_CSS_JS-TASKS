let fsBtn = document.getElementById("Fs-btn");
let exitFsBtn = document.getElementById("exitFs-btn");
let doc = document.documentElement;

fsBtn.addEventListener("click",fullScreenFunc);

exitFsBtn.addEventListener("click",ExitfullScreenFunc);



function fullScreenFunc(e){
    console.log(document);
    console.log(e.target);
    doc.requestFullscreen();   
}

function ExitfullScreenFunc(e){
   document.exitFullscreen();
   
}