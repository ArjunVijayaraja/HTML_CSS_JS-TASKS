let textarea = document.getElementsByTagName("textarea")[0];
console.log(textarea.value.length);
textarea.addEventListener("keyup",printLength);
function printLength(e){
    console.log(textarea.value.length);
    
    
}
