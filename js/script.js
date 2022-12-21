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
let arrayTextosNoticias=["Alejandra Salazar y Gemma Triay son las números 1 de World Padel Tour en 2022","Mercadillo de navidad solidario1","David Bustamante nuevo embajador de Set","text4","text5","text6","text7","text8","text9"];
let arrayAltsNoticias=["a","b","c","d","e","f","g","h","i"];
let indexN=0;
function iterarNoticias(){
    let imagenNoticia1 = document.getElementById("noticiaImg1");
    let imagenNoticia2 = document.getElementById("noticiaImg2");
    let imagenNoticia3 = document.getElementById("noticiaImg3");

    let textosNoticia1 = document.getElementById("textoNoticia1");
    let textosNoticia2 = document.getElementById("textoNoticia2");
    let textosNoticia3 = document.getElementById("textoNoticia3");

    imagenNoticia1.setAttribute("src",arrayImagenesNoticias[indexN]);
    imagenNoticia1.setAttribute("alt",arrayAltsTorneos[indexT]);
    textosNoticia1.innerHTML=arrayTextosNoticias[indexN];
    indexN++;
    imagenNoticia2.setAttribute("src",arrayImagenesNoticias[indexN]);
    imagenNoticia2.setAttribute("alt",arrayAltsTorneos[indexT]);
    textosNoticia2.innerHTML=arrayTextosNoticias[indexN];
    indexN++;
    imagenNoticia3.setAttribute("src",arrayImagenesNoticias[indexN]);
    imagenNoticia3.setAttribute("alt",arrayAltsTorneos[indexT]);
    textosNoticia3.innerHTML=arrayTextosNoticias[indexN];
    indexN++;

    if(indexN>=arrayImagenesNoticias.length){
        indexN=0;
    }
}

iteradorTorneos=setInterval(iterarTorneos,2500);

iteradorNoticias=setInterval(iterarNoticias,2500);

/*
var noticia1 = document.getElementById('loadbutton');
var noticia2 = document.getElementById('loadbutton');
var noticia3 = document.getElementById('loadbutton');

mybutton.onclick = function() {
	var request;
    request = new XMLHttpRequest();
    
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	}
	request.send();
} 
*/