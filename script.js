let container=document.getElementById("container");
let colorselector=document.getElementById("colorselector");

colorselector.addEventListener("input",() => {
    container.style.background=colorselector.value;
})