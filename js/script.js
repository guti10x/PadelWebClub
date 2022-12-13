let arrayImagenes =["_imagines/torneos/cartel1.jpg","_imagines/torneos/cartel2.jpg","_imagines/torneos/cartel3.jpg","_imagines/torneos/cartel4.jpg","_imagines/torneos/cartel5.jpg","_imagines/torneos/cartel6.jpg","_imagines/torneos/cartel7.jpg","_imagines/torneos/cartel8.jpg","_imagines/torneos/cartel9.jpg"];
let index=0;

function iterarImagen(){
    let imagenTorneo1 = document.getElementById("torneo1");
    let imagenTorneo2 = document.getElementById("torneo2");
    let imagenTorneo3 = document.getElementById("torneo3");

    imagenTorneo1.setAttribute("src",arrayImagenes[index]);
    index++;
    imagenTorneo2.setAttribute("src",arrayImagenes[index]);
    index++;
    imagenTorneo3.setAttribute("src",arrayImagenes[index]);
    index++;
    if(index>=arrayImagenes.length){
        index=0;
    }
}
iterador=setInterval(iterarImagen,2000);

function expandirInfoTorneo(){}