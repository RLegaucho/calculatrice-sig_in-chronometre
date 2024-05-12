//les variable necessaire

let sp, btn_start, btn_stop, t, ms, s, mn, h;

//fonctions pour initialiser les variables

window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms=0, s=0, mn=0, h=0;
}

//le compteur

function update_chrono() {
    ms++;
    if (ms==10) {
        ms=1;
        s+=1;
    }
    if (s==60) {
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }

    //insertion des valeurs dans les span
    sp[0].innerHTML= h + 'h';
    sp[1].innerHTML= mn + 'mn';
    sp[2].innerHTML= s + 's';
    sp[3].innerHTML= ms + 'ms';
}

// mettre en place ma fonction du boutton start

function start() {
    //cette ligne exécute la fonction update_chrono()
    //toutes les 100 ms

    t= setInterval(update_chrono, 100);
    btn_start.disabled = true;

}

// stoper le chrono

function stop() {
    clearInterval(t);
    btn_start.disabled = false;
}

//reinitialiser le chrono

function reset() {
    clearInterval(t);
    btn_start.disabled= false;
    ms=0, s=0, mn=0; h=0;

    sp[0].innerHTML= h + 'h';
    sp[1].innerHTML= mn + 'mn';
    sp[2].innerHTML= s + 's';
    sp[3].innerHTML= ms + 'ms';
}