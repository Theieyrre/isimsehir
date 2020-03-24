var harfler = ["a","b","c","ç","d","e","f","g","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"]
var i = 0
var last = harfler.length
var kaydetBtn = document.getElementById("kaydet")
var timerBtn = document.getElementById("timer")

kaydetBtn.disabled = true;
timerBtn.style.display = "none";

function harf(){
    i = Math.floor(Math.random() * last)
    var h = document.getElementById("harf")
    h.innerHTML = harfler[i]

    kaydetBtn.disabled = false
    kaydetBtn.classList.remove("done")
    kaydetBtn.innerHTML = "Kaydet"
}

function kaydet(){
    var temp = harfler[i]
    harfler[i] = harfler[last-1]
    harfler[last-1] = temp
    harfler.pop()
    last = harfler.length
    console.log(harfler)
    
    kaydetBtn.classList.add("done")
    kaydetBtn.disabled = true;
    kaydetBtn.innerHTML = "<span>✔</span> Kaydedildi"

    timerBtn.style.display = "block"
}
