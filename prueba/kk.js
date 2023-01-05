
function mostrar(){
    document.getElementById('img').style.display = 'block';
}

function ocultar(){
    document.getElementById('img').style.display = 'none';
}





















/*
let flechaLeft=document.getElementById("polla");
flechaLeft.addEventListener("click",function (){
    alert("kff");
});


function pene(){
    alert("horn");
}
*/
index=0;
function añadir(){
    //coge el elemeto padre
    let tallasContainer=document.getElementById("tallas");
    //crea elemento hojo
    let divTalla=document.createElement("div");

    //añadimos clase al elemento hijo
    divTalla.className = "talla" +index;
    //añadimos contenido al elemento hijo
    divTalla.innerHTML=index;
    index++;

    //añadimos el hijo al padre
    tallasContainer.appendChild(divTalla)
}





















/*
function eliminar(){
    let tallasContainer=document.getElementById("tallas");
    
    let talla1=document.getElementsByClassName("talla1");

    tallasContainer.removeChild(talla1);
}



function actualizar(){
    let tallasContainer=document.getElementById("tallas");

    let talla1=document.getElementsByClassName("talla1");
    let talla2=document.getElementsByClassName("talla2");

    tallasContainer.replace(talla1,talla2)
}

*/