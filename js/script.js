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

let arrayImagenesNoticias =["_imagines/noticias/noticia1.jpg","_imagines/noticias/noticia2.png","_imagines/noticias/noticia3.png","_imagines/noticias/noticia4.jpg","_imagines/noticias/noticia5.jpg","_imagines/noticias/noticia6.jpg"];
let arrayTitularesNoticias=["Alejandra Salazar y Gemma Triay son las números 1 de World Padel Tour en 2022","Mercadillo Solidario de navidad","David Bustamante nuevo embajador de Set","El mejor calentamiento para jugar al padel","Cuida tu alimentación con estos sencillos consejos","Review completa dela ultima pala ADIDAS METALBONE"];
let arrayTextosNoticias=["Alejandra Salazar y Gemma Triay se han convertido oficialmente en las números 1 de la temporada 2022 en World Padel Tour tras el Estrella Damm Master Final que ha puesto el broche el curso padelístico en el Palau Sant Jordi de Barcelona.<br> La pareja entrenada por Rodrigo Ovide ha firmado un final de temporada espectacular y ha superado en el ránking del circuito a Paula Josemaría y Ariana Sanchez, la pareja con la que ha peleado de tú a tú durante todo el desarrollo del año, logrando de esta forma ser las mejores por segunda vez y, además, de forma consecutiva.",
"El próximo sábado, celebrararemos un mercadillo navideño al que todos están invitados a asistir. Durante toda la mañana, podrás disfrutar de una gran variedad de puestos de artesanía y productos típicos navideños, además de poder hacer tus compras de último minuto para sorprender a tus seres queridos en estas fiestas.<br> Además, todo lo recaudado en este mercadillo será destinado a proyectos de beneficencia, por lo que al hacer tus compras no solo estarás disfrutando de una mañana divertida, sino que también estarás contribuyendo a una buena causa.<br> Pero eso no es todo. El club ha preparado una serie de actividades relacionadas con el pádel para que toda la familia disfrute. Podrás participar en partidos amistosos o en un torneo de mini pádel para los más pequeños. Además, habrá una exhibición de pádel freestyle por parte de los mejores jugadores del club.<br> No te lo pierdas. ¡Te esperamos el sábado a partir de las 10 de la mañana en el polideportivo del club!",
"Menudo bombazo el nuevo fichaje para SET, anunciado por David Bustamante en su cuenta de instagram. El cantante y apasionado del pádel, elige SET y se convierte en embajador de la marca. <br> Con esta acción, la marca SET a diferencia del resto de marcas de pádel se convierte en la primera que, en lugar de tener como embajadores a jugadores de pádel, trata de acercar sus productos de alta calidad a todo tipo de practicantes a través de un personaje popular practicante de este deporte.",
"Para mantenerse en forma y rendir al máximo al jugar pádel, es importante seguir una alimentación adecuada. Algunos tips para conseguirlo son: incluir frutas y verduras en la dieta, elegir carbohidratos complejos como arroz integral, pan integral y pasta integral, consumir proteínas como carnes magras, pescado, huevos y legumbres, beber suficiente agua y evitar alimentos procesados y azucarados. Con estos cuidados, podrás estar en las mejores condiciones para disfrutar del pádel al máximo.",
"Para mantenerse en forma y rendir al máximo al jugar pádel, es importante seguir una alimentación adecuada. Algunos tips para conseguirlo son: incluir frutas y verduras en la dieta, elegir carbohidratos complejos como arroz integral, pan integral y pasta integral, consumir proteínas como carnes magras, pescado, huevos y legumbres, beber suficiente agua y evitar alimentos procesados y azucarados. Con estos cuidados, podrás estar en las mejores condiciones para disfrutar del pádel al máximo.",
"Las nuevas Metalbone son palas de alto rendimiento que reúnen todos los ingredientes para desarrollar el máximo nivel.<br> Gracias a la tecnología WEIGHT & BALANCE SYSTEM podrás customizar tu pala añadiendo hasta 12 gr de peso. <br> La tecnología SPIN BLADE en forma de panal octogonal te permite imprimir un gran efecto y mejorar el tacto con la bola. <br> La superficie en CARBONO ALUMINIZADO 2 a 1 te permitirá adquirir una gran sensación de golpeo y potencia en todos los tiros de ataque."];
let arrayAltsNoticias=["","","","","",""];
let arrayHipervinculosNoticias=["https://www.marca.com/padel/2022/12/18/63979807e2704e5d7f8b45c8.html","#noticia1","https://www.analistaspadel.com/set-ficha-a-david-bustamante-como-embajador/","https://www.redbull.com/es-es/mejor-calentamiento-jugar-padel","#noticia2","https://padelstar.es/palas-de-padel/test-palas-de-padel/adidas-metalbone-review-y-opiniones/"];
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

iteradorTorneos=setInterval(iterarTorneos,3500);

iteradorNoticias=setInterval(iterarNoticias,2000);

let arrayImagenesProductos=["_imagines/productos/zapatilla_naranja.png","_imagines/productos/zapatilla_rosa.png","_imagines/productos/zapatilla_verde.png","_imagines/productos/mochila_roja.png","_imagines/productos/mochila_rosa.png","_imagines/productos/mochila_verde.png","_imagines/productos/raqueta_roja.png","_imagines/productos/raqueta_amarilla.png","_imagines/productos/raqueta_azul.png"];
let arrayPreciosProductos=["Precio: 51,33€","Precio: 29,90€","Precio: 69,95€"];
let arrayEnlacesCompraProductos=["https://www.amazon.es/Munich-Oxygen-Padel-Zapatillas-Hombre/dp/B07ZK5GDWG/ref=sr_1_6?crid=H09FQJQT42ZD&keywords=padel%2Bzapatillas&qid=1672167314&sprefix=padel%2Bza%2Caps%2C93&sr=8-6&th=1","https://www.amazon.es/Paletero-Bullpadel-Fun-X-Series-Pink/dp/B07TZ8HQMT/ref=pd_bxgy_img_sccl_2/261-1019368-1105604?pd_rd_w=EuKw7&content-id=amzn1.sym.450a920a-f22f-4295-868c-1b5adf5c2452&pf_rd_p=450a920a-f22f-4295-868c-1b5adf5c2452&pf_rd_r=BP771N39NAYNYGH6KF96&pd_rd_wg=FUrqM&pd_rd_r=7091eb93-75d9-4387-bc0e-3645bf524a62&pd_rd_i=B07TZ8HQMT&psc=1","https://www.amazon.es/PADEL-NUESTRO-Overgrip-Incluido-Fabricada/dp/B09M48QJWG/ref=sxin_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&asc_contentid=amzn1.osa.0d36c720-2c82-4e2a-a465-7508eb680cf5.A1RKKUPIHCS9HS.es_ES&asc_contenttype=article&ascsubtag=amzn1.osa.0d36c720-2c82-4e2a-a465-7508eb680cf5.A1RKKUPIHCS9HS.es_ES&content-id=amzn1.sym.a5c10ae0-7a99-4509-b8ac-f64cbc399b11%3Aamzn1.sym.a5c10ae0-7a99-4509-b8ac-f64cbc399b11&creativeASIN=B09M48QJWG&crid=39T2SY4Q8PJUL&cv_ct_cx=padel&cv_ct_id=amzn1.osa.0d36c720-2c82-4e2a-a465-7508eb680cf5.A1RKKUPIHCS9HS.es_ES&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&keywords=padel&linkCode=oas&pd_rd_i=B09M48QJWG&pd_rd_r=afd6c9e6-927e-4b8d-b387-7d8449d84d89&pd_rd_w=KdhHv&pd_rd_wg=qKcbK&pf_rd_p=a5c10ae0-7a99-4509-b8ac-f64cbc399b11&pf_rd_r=2434BEWN7XVPKRACWEMT&qid=1672175493&sprefix=padel%2Caps%2C97&sr=1-1-c84eb971-91f2-4a4d-acce-811265c24254&tag=prisaonsite-21"];
let arrayTitulosProductos=["Zapatillas Munich Oxygen Padel","Bullpadel Paletero Fun X-Series Pink","Pala de Padel Sky"];
let arrayTallasProductos=["38","39","40","41","42","43"," "," "," "," "," "," ","S","M","L","XL","XXL","XXL"];

let indexPA=0;

let indexPIL=0;
let indexPIR=2;

let indexTTL=0;
let indexTTR=5;

function cambiarProductoLeft(){
    let imagenProducto1 = document.getElementById("producto1");
    let imagenProductomain = document.getElementById("productomain");
    let imagenProducto2 = document.getElementById("producto2");
    let imagenProducto3 = document.getElementById("producto3");

    let tituloProducto = document.getElementById("titulo");
    let precioProducto = document.getElementById("precio");
    let enlaceCompraProducto = document.getElementById("enlaceCompra");

    let talla1= document.getElementById("talla1");
    let talla2= document.getElementById("talla2");
    let talla3= document.getElementById("talla3");
    let talla4= document.getElementById("talla4");
    let talla5= document.getElementById("talla5");
    let talla6= document.getElementById("talla6");

    imagenProducto1.setAttribute("src",arrayImagenesProductos[indexPIL]);
    imagenProductomain.setAttribute("src",arrayImagenesProductos[indexPIL]);
    indexPIL++;
    indexPIR++;
    imagenProducto2.setAttribute("src",arrayImagenesProductos[indexPIL]);
    indexPIL++;
    indexPIR++;
    imagenProducto3.setAttribute("src",arrayImagenesProductos[indexPIL]);
    indexPIL++;
    indexPIR++;
    tituloProducto.innerHTML=arrayTitulosProductos[indexPA];
    precioProducto.innerHTML=arrayPreciosProductos[indexPA];
    enlaceCompraProducto.setAttribute("href",arrayEnlacesCompraProductos[indexPA]);
    indexPA++;

    talla1.innerHTML=arrayTallasProductos[indexTTL];
    indexTTL++;
    indexTTR++;
    talla2.innerHTML=arrayTallasProductos[indexTTL];
    indexTTL++;
    indexTTR++;
    talla3.innerHTML=arrayTallasProductos[indexTTL];
    indexTTL++;
    indexTTR++;
    talla4.innerHTML=arrayTallasProductos[indexTTL];
    indexTTL++;
    indexTTR++;
    talla5.innerHTML=arrayTallasProductos[indexTTL];
    indexTTL++;
    indexTTR++;
    talla6.innerHTML=arrayTallasProductos[indexTTL];
    indexTTL++;
    indexTTR++;

    console.log("(+) "+indexPA +" ,PIL: "+ indexPIL +" ,PIR " +indexPIR, "+indexTTL")
    if(indexPA>=3){
        indexPA=0;
        indexPIL=0;
        indexPIR=2;
        indexTTL=0;
        indexTTR=5;
        console.log("change:" +indexPA +" ,PIL: "+ indexPIL +" ,PIR " +indexPIR, "+indexTTL")
    }

    if(indexPA==2){
        document.getElementById('tallas').style.display = 'none';
        console.log("visto" + indexPA);
    }else{
        document.getElementById('tallas').style.display = 'flex';
        console.log("no visto" + indexPA );
    }
    
}

function cambiarProductoRight(){
    let imagenProducto1 = document.getElementById("producto1");
    let imagenProductomain = document.getElementById("productomain");
    let imagenProducto2 = document.getElementById("producto2");
    let imagenProducto3 = document.getElementById("producto3");

    let tituloProducto = document.getElementById("titulo");
    let precioProducto = document.getElementById("precio");
    let enlaceCompraProducto = document.getElementById("enlaceCompra");

    let talla1= document.getElementById("talla1");
    let talla2= document.getElementById("talla2");
    let talla3= document.getElementById("talla3");
    let talla4= document.getElementById("talla4");
    let talla5= document.getElementById("talla5");
    let talla6= document.getElementById("talla6");

    imagenProductomain.setAttribute("src",arrayImagenesProductos[indexPIR]);
    indexPIR--;
    indexPIL--;
    imagenProducto2.setAttribute("src",arrayImagenesProductos[indexPIR]);
    indexPIR--;
    indexPIL--;
    imagenProductomain.setAttribute("src",arrayImagenesProductos[indexPIR]);
    imagenProducto1.setAttribute("src",arrayImagenesProductos[indexPIR]);
    indexPIR--;
    indexPIL--;

    tituloProducto.innerHTML=arrayTitulosProductos[indexPA];
    precioProducto.innerHTML=arrayPreciosProductos[indexPA];
    enlaceCompraProducto.setAttribute("href",arrayEnlacesCompraProductos[indexPA]);
    indexPA--;

    talla1.innerHTML=arrayTallasProductos[indexTTR];
    indexTTR--;
    indexTTL--;
    talla2.innerHTML=arrayTallasProductos[indexTTR];
    indexTTR--;
    indexTTL--;
    talla3.innerHTML=arrayTallasProductos[indexTTR];
    indexTTR--;
    indexTTL--;
    talla4.innerHTML=arrayTallasProductos[indexTTR];
    indexTTR--;
    indexTTL--;
    talla5.innerHTML=arrayTallasProductos[indexTTR];
    indexTTR--;
    indexTTL--;
    talla6.innerHTML=arrayTallasProductos[indexTTR];
    indexTTR--;
    
    console.log("(-) "+indexPA +" ,PIL: "+ indexPIL +" ,PIR " +indexPIR, "+indexTTL")
    if(indexPA<0){
        indexPIR=8;
        indexPIL=6;
        indexPA=2;
        indexTTL=12;
        indexTTR=17;
        console.log("change:" +indexPA +" ,PIL: "+ indexPIL +" ,PIR " +indexPIR, "+indexTTL")
    }
    if(indexPA==0){
        document.getElementById('tallas').style.display = 'none';
        console.log("visto" + indexPA);
    }else{
        document.getElementById('tallas').style.display = 'flex';
        console.log("no visto" + indexPA );
    }
}
//iteradorPrecios=setInterval(cambiarProducto,2500);
window.onload=cambiarProductoLeft;

function cambioColor1(){
    let imagenProducto1 = document.getElementById("producto1");
    let srcProducto1 = imagenProducto1.getAttribute("src");
    let imagenProductomain = document.getElementById("productomain");
    imagenProductomain.setAttribute("src",srcProducto1);
}

function cambioColor2(){
    let imagenProducto2 = document.getElementById("producto2");
    let srcProducto2 = imagenProducto2.getAttribute("src");
    let imagenProductomain = document.getElementById("productomain");
    imagenProductomain.setAttribute("src",srcProducto2);
}

function cambioColor3(){
    let imagenProducto3 = document.getElementById("producto3");
    let srcProducto3 = imagenProducto3.getAttribute("src");
    let imagenProductomain = document.getElementById("productomain");
    imagenProductomain.setAttribute("src",srcProducto3);
}

function comprobarSiTieneTalla(){
    if(indexPA==2){
        document.getElementById('tallas').style.display = 'none';
    }else{
        document.getElementById('tallas').style.display = 'flex';
    }
}