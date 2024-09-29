let _input = document.getElementById("input1");
let convertBtn = document.getElementById("BinaryConverter");
convertBtn.addEventListener("click",convertToBinary);
let _binaryOP = document.getElementById("binaryOP");
let _hexaOP = document.getElementById("hexaOP");

function convertToBinary(e){
       e.preventDefault();
       let a = _input.value;
       a = parseInt(a);       
      console.log(a.toString(2));
      _binaryOP.value = a.toString(2);
      hexaOP.value = a.toString(16);


    
}