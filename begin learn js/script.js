console.log("loading")

/*
 element.style {
    display: block;
 }

 element.style {
    display: none;
 }
 */


window.onload = function () {
    const button = document.getElementById("myBtn");
    button.onclick = function () {
        const element = document.getElementById("hello");
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    };
}
