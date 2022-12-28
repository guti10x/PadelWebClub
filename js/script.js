let arrayImagenesTorneos =["_imagines/torneos/cartel1.png","_imagines/torneos/cartel2.png","_imagines/torneos/cartel3.png","_imagines/torneos/cartel4.png","_imagines/torneos/cartel5.jpg","_imagines/torneos/cartel6.png","_imagines/torneos/cartel7.png","_imagines/torneos/cartel8.png","_imagines/torneos/cartel9.png"];
let arrayHipervinculosTorneos =["https://www.worldpadeltour.com/torneos/santander-open/2017/","https://www.padelnest.com/torneo/0IF8BDL7ZC?as=list-search","https://abiertohastaelamanecer.com/padel/padel-y-tenis/","https://www.huelvainformacion.es/provincia/Cartaya-Primer-Torneo-Padel-Rompido_0_1600640406.html","https://padelmanager.com/torneos/jaen/abiertos?page=144","https://adsj-dke.com/iii-torneo-de-padel-mixto-aedona/cartel-torneo-padel-mixto-aedona-2019/","https://www.padelnest.com/torneo/7IPE27RXDE?as=club","https://www.indoorhuesca.com/torneodiaynoche/","https://ctlamoraleja.es/evento/torneo-de-padel/"];
let arrayAltsTorneos=["","","","","","","","",""];
let indexT=0;
function iterarTorneos(){
    let imagenTorneo1 = document.getElementById("torneo1");
    let imagenTorneo2 = document.getElementById("torneo2");
    let imagenTorneo3 = document.getElementById("torneo3");

    let hipervinculo1 = document.getElementById("hipervinculo1");
    let hipervinculo2 = document.getElementById("hipervinculo2");
    let hipervinculo3 = document.getElementById("hipervinculo3");


    imagenTorneo1.setAttribute("src",arrayImagenesTorneos[indexT]);
    imagenTorneo1.setAttribute("alt",arrayAltsTorneos[indexT]);
    hipervinculo1.setAttribute("href",arrayHipervinculosTorneos[indexT]);
    indexT++;
    imagenTorneo2.setAttribute("src",arrayImagenesTorneos[indexT]);
    imagenTorneo2.setAttribute("alt",arrayAltsTorneos[indexT]);
    hipervinculo2.setAttribute("href",arrayHipervinculosTorneos[indexT]);
    indexT++;
    imagenTorneo3.setAttribute("src",arrayImagenesTorneos[indexT]);
    imagenTorneo3.setAttribute("alt",arrayAltsTorneos[indexT]);
    hipervinculo3.setAttribute("href",arrayHipervinculosTorneos[indexT]);
    indexT++;

    if(indexT>=arrayImagenesTorneos.length){
        indexT=0;
    }
}

let arrayImagenesNoticias =["_imagines/noticias/noticia1.jpg","_imagines/noticias/noticia2.png","_imagines/noticias/noticia3.png","_imagines/noticias/noticia4.png","_imagines/noticias/noticia5.png","_imagines/noticias/noticia6.png","_imagines/noticias/noticia7.png","_imagines/noticias/noticia8.png","_imagines/noticias/noticia9.png"];
let arrayTitularesNoticias=["titular1","titular2","titular3","titular3","titular4","titular5","titular6","titular7","titular8","titular9"];
let arrayTextosNoticias=["Alejandra Salazar y Gemma Triay son las números 1 de World Padel Tour en 2022","Mercadillo de navidad solidario1","David Bustamante nuevo embajador de Set","text4","text5","text6","text7","text8","text9"];
let arrayAltsNoticias=["a","b","c","d","e","f","g","h","i"];
let indexN=0;
function iterarNoticias(){
    let imagenNoticia1 = document.getElementById("noticiaImg1");
    let imagenNoticia2 = document.getElementById("noticiaImg2");
    let imagenNoticia3 = document.getElementById("noticiaImg3");

    let textoNoticia1 = document.getElementById("textoNoticia1");
    let textoNoticia2 = document.getElementById("textoNoticia2");
    let textoNoticia3 = document.getElementById("textoNoticia3");

    let titularNoticia1 = document.getElementById("titularNoticia1");
    let titularNoticia2 = document.getElementById("titularNoticia2");
    let titularNoticia3 = document.getElementById("titularNoticia3");

    imagenNoticia1.setAttribute("src",arrayImagenesNoticias[indexN]);
    imagenNoticia1.setAttribute("alt",arrayAltsTorneos[indexT]);
    textoNoticia1.innerHTML=arrayTextosNoticias[indexN];
    titularNoticia1.innerHTML=arrayTitularesNoticias[indexN];
    indexN++;
    imagenNoticia2.setAttribute("src",arrayImagenesNoticias[indexN]);
    imagenNoticia2.setAttribute("alt",arrayAltsTorneos[indexT]);
    textoNoticia2.innerHTML=arrayTextosNoticias[indexN];
    titularNoticia2.innerHTML=arrayTitularesNoticias[indexN];
    indexN++;
    imagenNoticia3.setAttribute("src",arrayImagenesNoticias[indexN]);
    imagenNoticia3.setAttribute("alt",arrayAltsTorneos[indexT]);
    textoNoticia3.innerHTML=arrayTextosNoticias[indexN];
    titularNoticia3.innerHTML=arrayTitularesNoticias[indexN];
    indexN++;

    if(indexN>=arrayImagenesNoticias.length){
        indexN=0;
    }
}

iteradorTorneos=setInterval(iterarTorneos,2500);

iteradorNoticias=setInterval(iterarNoticias,2500);

let arrayImagenesProductos=["_imagines/productos/zapatilla_naranja.png","_imagines/productos/zapatilla_rosa.png","_imagines/productos/zapatilla_verde.png","_imagines/productos/mochila_roja.png","_imagines/productos/mochila_rosa.png","_imagines/productos/mochila_verde.png","_imagines/productos/raqueta_roja.png","_imagines/productos/raqueta_amarilla.png","_imagines/productos/raqueta_azul.png"];
let arrayPreciosProductos=["Precio: 51,33€","Precio: 29,90€","Precio: 69,95€"];
let arrayTitulosProductos=["Zapatillas Munich Oxygen Padel","Bullpadel Paletero Fun X-Series Pink","Pala de Padel Sky"];
let arrayTallasProductos=["38","39","40","41","42","43"," "," "," "," "," "," ","S","M","L","XL","XXL","XXL"];
let indexP=0;
let indexPI=0;
let indexLL=0;

function cambiarProducto(){
    let imagenProducto1 = document.getElementById("producto1");
    let imagenProducto1main = document.getElementById("producto1main");
    let imagenProducto2 = document.getElementById("producto2");
    let imagenProducto3 = document.getElementById("producto3");

    let tituloProducto = document.getElementById("titulo");
    let precioProducto = document.getElementById("precio");

    let talla1= document.getElementById("talla1");
    let talla2= document.getElementById("talla2");
    let talla3= document.getElementById("talla3");
    let talla4= document.getElementById("talla4");
    let talla5= document.getElementById("talla5");
    let talla6= document.getElementById("talla6");

    imagenProducto1.setAttribute("src",arrayImagenesProductos[indexPI]);
    imagenProducto1main.setAttribute("src",arrayImagenesProductos[indexPI]);
    indexPI++;
    imagenProducto2.setAttribute("src",arrayImagenesProductos[indexPI]);
    indexPI++;
    imagenProducto3.setAttribute("src",arrayImagenesProductos[indexPI]);
    indexPI++;

    tituloProducto.innerHTML=arrayTitulosProductos[indexP];
    precioProducto.innerHTML=arrayPreciosProductos[indexP];
    indexP++;

    talla1.innerHTML=arrayTallasProductos[indexLL];
    indexLL++;
    talla2.innerHTML=arrayTallasProductos[indexLL];
    indexLL++;
    talla3.innerHTML=arrayTallasProductos[indexLL];
    indexLL++;
    talla4.innerHTML=arrayTallasProductos[indexLL];
    indexLL++;
    talla5.innerHTML=arrayTallasProductos[indexLL];
    indexLL++;
    talla6.innerHTML=arrayTallasProductos[indexLL];
    indexLL++;


    if(indexPI>=arrayImagenesProductos.length){
        indexPI=0;
        indexP=0;
        indexLL=0;
    }
}
iteradorPrecios=setInterval(cambiarProducto,2500);