let _content = document.getElementById("content");
_content.addEventListener("mouseover", editContent);

function editContent(e){
    _content.setAttribute("contenteditable","true");
}