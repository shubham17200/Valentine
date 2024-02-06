
let clickcounter = -1;
let myimg = document.getElementById('myimg');
let btntextno = document.getElementById("no")
let btntextyes = document.getElementById("yes")
function yes() {
    myimg.src = "kissing1.gif";
    btntextno.style.display = "none";
    btntextyes.style.display = "none";
}

btntextno.addEventListener('click', function () {
    clickcounter++;
    if (clickcounter == 0) {
        myimg.src = "crying1.gif";
        btntextno.textContent = "NOOO!!";
        btntextno.style.width = "60px";
        btntextyes.style.width = "100px";
        btntextyes.style.padding = "20px";
        btntextyes.textContent = "YESSS!"
    }
    if (clickcounter == 1) {
        myimg.src = "crying1.gif";
        btntextno.textContent = "NOO!!";
        btntextno.style.width = "50px";
        btntextyes.style.width = "150px";
        btntextyes.style.padding = "20px";
        btntextyes.style.backgroundColor = "#fc3503";
        btntextyes.textContent = "PLSS YESSS!"
        btntextyes.style.color = "white";
    }
    if (clickcounter == 2) {
        myimg.src = "crying1.gif";
        btntextno.textContent = "NO0!!";
        btntextno.style.fontSize = "12px";
        btntextno.style.width = "40px";
        btntextyes.style.width = "200px";
        btntextyes.style.padding = "20px";
        btntextyes.style.backgroundColor = "#fc2803";
        btntextyes.textContent = "PLSSSS YESSS N!"
        btntextyes.style.color = "white";
    }
    if (clickcounter == 3) {
        myimg.src = "crying1.gif";
        btntextno.textContent = "NO0!";
        btntextno.style.fontSize = "10px";
        btntextno.style.padding = "2px";
        btntextno.style.width = "30px";
        btntextyes.style.width = "250px";
        btntextyes.style.padding = "20px";
        btntextyes.style.backgroundColor = "#fc0303";
        btntextyes.textContent = "PLSSSSS YESSS NNN!"
        btntextyes.style.color = "white";
    }
    if (clickcounter == 4) {
        myimg.src = "crying1.gif";
        btntextno.textContent = "NO!!";
        btntextno.style.fontSize = "5px";
        btntextno.style.padding = "1px";
        btntextno.style.width = "20px";
        btntextyes.style.width = "300px";
        btntextyes.style.padding = "20px";
        btntextyes.style.backgroundColor = "maroon";
        btntextyes.textContent = "PLSSSSSSS YESSS NNNN!"
        btntextyes.style.color = "white";
    }
    if (clickcounter == 5) {
        btntextyes.textContent = "YOU HAVE TO CHOOSE YESSS";
        myimg.src = "crying1.gif";
        btntextno.textContent = "NOOO!!";
        btntextno.style.display = "none";
        btntextyes.style.width = "100%";
        btntextyes.style.padding = "20px";
        btntextyes.style.backgroundColor = "maroon";
        btntextyes.style.color = "white";
    }
})