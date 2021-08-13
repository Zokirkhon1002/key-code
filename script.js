function WhichButton(event){
    document.querySelector("h3").style.display = "none";
    document.getElementById("small").style.display = "block";
    document.getElementById("small1").style.display = "block";
    document.getElementById("small2").style.display = "block";
    document.getElementById("key").innerHTML = event.key;
    document.getElementById("keyCode").innerHTML = event.keyCode;
    document.getElementById("code").innerHTML = event.code;
}