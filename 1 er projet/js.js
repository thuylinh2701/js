function myFunction() {
  var x = document.getElementById("myTextarea").value;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(x);
  node.appendChild(textnode);
  document.getElementById("demo").appendChild(node);
}
function myFunctionR() {
  var list = document.getElementById("demo");
  list.removeChild(list.childNodes[0]);
}
