let promptmsg = prompt("Enter a message here...!","Type Here.....");
let div_element = document.createElement("div");
div_element.id="demoDiv";
div_element.style.height="30px";
div_element.style.border="2px solid black";
console.log(promptmsg);
div_element.innerHTML = promptmsg;
document.body.appendChild(div_element);
