function atfogoSzamit() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = Math.sqrt(a * a + b * b);
    document.getElementById("c").innerHTML = c;
}

function megszerkesztheto(){
    if (a + b > c && a + c > b && b + c > a) {
        window.alert("A derékszögű háromszög megszerkeszthető!")
    } else
        window.alert("A derékszögű háromszög NEM szerkeszthető meg!")
    }


/*Próbálkoztam a JavaScriptel, de nem tudom a random szám generálást.*/