var titulo=[];
var autor=[];
var precio=[];

function empezar(){
        if (window.XMLHttpRequest){
		    xmlhttp=new XMLHttpRequest();
		}
		else{
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","xml/biblioteca.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 

		let x=xmlDoc.getElementsByTagName("novela");
		let y=xmlDoc.getElementsByTagName("comic");

        creaSel(x,"novela");
        creaSel(y,"comic");
}

function creaSel(array,etiq){
     let sel = document.createElement("SELECT");
		sel.id="sele";
		sel.onchange=function(){seleccionar(this,array,etiq)};
		let opt = document.createElement("option");
		opt.text = etiq;
		sel.add(opt);
		for(let i=0;i<array.length;i++){
			titulo[i]=array[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
			opt = document.createElement("option");
			opt.text = titulo[i];
            opt.value = titulo[i];
			sel.add(opt);
		}
	document.getElementById("pedido").appendChild(sel);
}
function seleccionar(op,array,etiq){

    for(let i=0;i<array.length;i++){
		titulo[i]=array[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
        autor[i]=array[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
		precio[i]=array[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue;
	}
    let valor = op.value;
    for(let i=0;i<titulo.length;i++){
        if(valor==titulo[i]){

    let inp=document.createElement("input");
        inp.setAttribute("type","text");
        inp.setAttribute("name","titulo_"+i);
        inp.setAttribute("id", "titulo_"+i);
        inp.setAttribute("value",titulo[i]);
        inp.setAttribute("class", "peke");
        document.getElementById("pedido").appendChild(inp);
    let inpA=document.createElement("input");
        inpA.setAttribute("type","text");
        inpA.setAttribute("name","autor_"+i);
        inpA.setAttribute("id","autor_"+i);
        inpA.setAttribute("value",autor[i]);
        inpA.setAttribute("class", "peke");
        document.getElementById("pedido").appendChild(inpA);
    let inpP=document.createElement("input");
        inpP.setAttribute("type","text");
        inpP.setAttribute("name","precio_"+i);
        inpP.setAttribute("id","precio_"+i);
        inpP.setAttribute("value",precio[i]);
        inpP.setAttribute("class", "peke");
        document.getElementById("pedido").appendChild(inpP);
        }
    }
}
