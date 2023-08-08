const select = document.querySelector("#select");
const imagenes = document.querySelector("#imagenes");

const  IMG_1 = "https://w7.pngwing.com/pngs/422/99/png-transparent-rock-paper-scissors-computer-icons-scissors-game-white-face-thumbnail.png";
const IMG_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ738c49ORlQXVmMF38cxeey_s53vAx0HPiDlOcB-DOsbrX1s8svs8nRQdEzutwpnYHO4g&usqp=CAU";
const IMG_3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVX0MNyRbwQZmLO8-5TgT3V0Fj3eYfSehs8MQ2_jX4Suet5scoJwvx1_dxqpjuz_XqBA&usqp=CAU";


function elegir() {
    opcionElegida = select.value;

    switch (select.value) {
        case "1":
            imagenes.src = IMG_1;
            break;
        case "2":
            imagenes.src = IMG_2;
            break;
        case "3":
            imagenes.src = IMG_3;
            break;
    }
}

