let h1Tag = document.getElementsByTagName("h1")[0];
h1Tag.addEventListener("click",dispCoordinates);
let spanElement = document.getElementsByTagName("span")[0];

function dispCoordinates(e){
    console.log(e.clientX);
    let a = e.clientX;
    console.log(e.clientY);
    spanElement.innerText =  `X coordinate is ${e.clientX} and  Y coordinate is ${e.clientY}`  ;
}

spanElement.style.backgroundColor = "aqua";
spanElement.style.border = "1px solid black";

