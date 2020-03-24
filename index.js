var harfler = ["a","b","c","ç","d","e","f","g","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
var i = 0;
var last = 28;

function harf(){
    i = Math.floor(Math.random() * last);
    var h = document.getElementById("harf");
    h.innerHTML = harfler[i];
}

function kaydet(){
    var temp = harfler[i];
    harfler[i] = harfler[last-1];
    harfler[last] = temp;
    last = last - 1;
    console.log(harfler);
}
