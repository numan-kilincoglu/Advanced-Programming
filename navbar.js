"use strict";
const NAVBAR =
    `<link href="https://nkilincoglu.github.io/Advanced-Programming/navbar.css" rel="stylesheet">
<div class="top-nav" id="myTopnav">
    <a href="#Advanced Programming" class="active">Home</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>`

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

