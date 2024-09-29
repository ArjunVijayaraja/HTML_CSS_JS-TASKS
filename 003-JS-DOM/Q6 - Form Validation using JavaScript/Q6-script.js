let form = document.getElementById("form");
let firstName = document.getElementById("FirstName");
let lastName = document.getElementById("lastname");
let mobileNum = document.getElementById("contact");
let mailId = document.getElementById("mailId");
let submitBtn = document.getElementsByTagName("button")[0];
form.addEventListener("submit", validateAll);
function validateAll(e) {
  e.preventDefault();
  checkFirstAndLastName(firstName, lastName);

  chekMobNum(mobileNum);
}


//This function will check the length of First and Last Name --if the length is less than 3 then an alert will be displayed

function checkFirstAndLastName(a, b) {
  let fn = a.value;
  let ln = b.value;

  if (fn.length > 2) {
    firstName.style.border="1px solid black";
  } else {
    
    alert("First Name should be atleat more than 2 characters");
    firstName.style.border="1px solid red";
  }

  if (ln.length > 2) {
    lastName.style.border="1px solid black";
  } else {
   
    alert("Last Name should be atleat more than 2 characters");
    lastName.style.border="1px solid red";
  }
}

//Function to check Mobile number
function chekMobNum(a) {
  let num = a.value;
  //storing the numbers in the n
  //console.log(num.match(/[\d]/g));
  let n = num.match(/[\d]/g);
  //storing all the non digit values in n_chars
  let n_chars = num.match(/[\D]/g);
  console.log(n_chars);

  //If the length is = to 10 then it will check for any non digit charactes if present "alert will be displayed"
  if (n.length == 10 && n.length!=null) {
    if (n_chars > 0) {
      alert("Enter a valid mobile number");
    }
    a.style.border = "1px solid black";
  } else if (n.length < 10 || n.length > 10) {
    alert("Enter a 10 digit mobile number");
    a.style.border = "1px solid red";
  }
}
