let newheading =document.getElementById("heading");
newheading.textContent="DOM Manipulation Javascript";
newheading.style.color="blue";
newheading.style.fontSize="30px";

let paragraphs = document.getElementsByClassName("paragraph");
paragraphs[0].innerHTML = "This paragraph has been changed using JavaScript";
paragraphs[0].style.color="red";
paragraphs[0].style.fontSize="30px";

let newDiv=document.createElement("div");
newDiv.textContent="This is a new div element created using JavaScript";
document.body.appendChild(newDiv);