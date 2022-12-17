let arrayImagenes =["_imagines/torneos/cartel1.png","_imagines/torneos/cartel2.png","_imagines/torneos/cartel3.png","_imagines/torneos/cartel4.png","_imagines/torneos/cartel5.jpg","_imagines/torneos/cartel6.png","_imagines/torneos/cartel7.png","_imagines/torneos/cartel8.png","_imagines/torneos/cartel9.png"];
let arrayHipervinculos =["https://www.worldpadeltour.com/torneos/santander-open/2017/","https://www.padelnest.com/torneo/0IF8BDL7ZC?as=list-search","https://abiertohastaelamanecer.com/padel/padel-y-tenis/","https://www.huelvainformacion.es/provincia/Cartaya-Primer-Torneo-Padel-Rompido_0_1600640406.html","https://padelmanager.com/torneos/jaen/abiertos?page=144","https://adsj-dke.com/iii-torneo-de-padel-mixto-aedona/cartel-torneo-padel-mixto-aedona-2019/","https://www.padelnest.com/torneo/7IPE27RXDE?as=club","https://www.indoorhuesca.com/torneodiaynoche/","https://ctlamoraleja.es/evento/torneo-de-padel/"];
let index=0;

function iterarImagen(){
    let imagenTorneo1 = document.getElementById("torneo1");
    let imagenTorneo2 = document.getElementById("torneo2");
    let imagenTorneo3 = document.getElementById("torneo3");

    let hipervinculo1 = document.getElementById("hipervinculo1");
    let hipervinculo2 = document.getElementById("hipervinculo2");
    let hipervinculo3 = document.getElementById("hipervinculo3");

    imagenTorneo1.setAttribute("src",arrayImagenes[index]);
    hipervinculo1.setAttribute("href",arrayHipervinculos[index]);
    index++;
    imagenTorneo2.setAttribute("src",arrayImagenes[index]);
    hipervinculo2.setAttribute("href",arrayHipervinculos[index]);
    index++;
    imagenTorneo3.setAttribute("src",arrayImagenes[index]);
    hipervinculo3.setAttribute("href",arrayHipervinculos[index]);
    index++;

    if(index>=arrayImagenes.length){
        index=0;
    }
}

iterador=setInterval(iterarImagen,2500);

function expandirInfoTorneo(){}