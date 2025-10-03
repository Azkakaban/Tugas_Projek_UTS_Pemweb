
function onmouse(){
    const tombol = document.getElementById('tombol');
    const body = document.getElementById('body');


    if(tombol.className == 'tombol'){
        tombol.className = 'tombol1';
        body.className = 'body1';
    } else {
        tombol.className = 'tombol';
        body.className = 'body';
    }

}

