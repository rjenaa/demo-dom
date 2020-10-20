
//getElementById allows users to get elements by ID
//innerhtml allows you to change HTML elements such as <body>
document.getElementById("firstTopic").innerHTML ="This was printed using getElementByID";
var x = document.getElementsByTagName("p");
document.getElementById("secondExample").innerHTML = "This was retrieved using " +x[1].innerHTML;

//DOM HTML
var element = document.getElementById("change");
element.innerHTML = "DOM can be used to change the HTML content";

document.getElementById("imageSrc").src = "https://www.smallbizgenius.net/wp-content/uploads/2019/06/smallbizgenius_favicon.png";

 function clickDisplay(){
    document.getElementById("click1").innerHTML = "Click confirmed";
}

document.addEventListener("click", alertF);    
function alertF() {
    alert ("EventListener");
  }

  document.getElementById("gonnaStyle").style.color="red";