 let datosCalculadora={};
let textoFinal="";

function mostrar(id){
document.getElementById('calculadora').classList.add('hidden');
document.getElementById('carrete').classList.add('hidden');
document.getElementById('lista').classList.add('hidden');
document.getElementById('ranking').classList.add('hidden');
document.getElementById(id).classList.remove('hidden');
}

function calcular(){
let p=Number(document.getElementById("personas").value);
let c=Number(document.getElementById("porpersona").value);
let tipo=document.getElementById("tipo").value;
let pesoPalta=Number(document.getElementById("pesoPalta").value);
let completos=p*c;
let panes=completos;
let vienesas=completos;
let tomates=Math.ceil(completos/4);
let gramosPalta=completos*50;
let paltas=Math.ceil(gramosPalta/pesoPalta);
let chucrut=(tipo=="dinamico")?Math.ceil(completos/4):0;
let mayo=completos*15;
let precioPan=300,precioVienesa=500,precioPalta=1800,precioTomate=600,precioMayo=1200;
let costo=(panes*precioPan)+(vienesas*precioVienesa)+(paltas*precioPalta)+(tomates*precioTomate)+(mayo*precioMayo);
datosCalculadora={completos,panes,vienesas,paltas,tomates,mayo,chucrut,costo};
textoFinal=`🌭 ${completos} completos, 🥖 ${panes}, 🌭 ${vienesas}, 🥑 ${paltas}, 🍅 ${tomates}, 🥄 ${mayo}g, 🥬 ${chucrut}, 💰 $${costo}`;
mostrarLista();
document.getElementById("resultado").innerHTML=`🌭 ${completos} completos<br>🥖 ${panes}<br>🌭 ${vienesas}<br>🥑 ${paltas}<br>🍅 ${tomates}<br>🥄 ${mayo} g<br>🥬 ${chucrut}<br>💰 $${costo}`;
}

function mostrarLista(){
let d=datosCalculadora;
document.getElementById("listaCompras").innerHTML=
`🛒 Lista de compras:<br>
Panes: ${d.panes}<br>
Vienesas: ${d.vienesas}<br>
Paltas: ${d.paltas}<br>
Tomates: ${d.tomates}<br>
Mayonesa: ${d.mayo} g<br>
Chucrut: ${d.chucrut}`;
}

function carreteIA(){
let personas=Number(document.getElementById("personasCarrete").value);
let tipo=document.getElementById("tipoCarrete").value;
let completos=personas*3;
let panes=completos;
let vienesas=completos;
let paltas=Math.ceil((completos*50)/200);
let tomates=Math.ceil(completos/4);
let chucrut=(tipo=="dinamico")?Math.ceil(completos/4):0;
let mayo=completos*15;
let bebidas=Math.ceil(personas*1.5);
let papas=Math.ceil(personas*200/100);
textoFinal+=`\n🥤 Bebidas: ${bebidas}, 🍟 Papas: ${papas*100}g`;
document.getElementById("resultadoCarrete").innerHTML=
`🍽 Carrete completo sugerido<br>
🌭 ${completos}<br>🥖 ${panes}<br>🌭 ${vienesas}<br>🥑 ${paltas}<br>🍅 ${tomates}<br>🥄 ${mayo} g<br>🥬 ${chucrut}<br>🥤 ${bebidas}<br>🍟 ${papas*100} g`;
crearConfeti();
}

function compartirWhatsApp(){
let url="https://wa.me/?text="+encodeURIComponent(textoFinal);
window.open(url,"_blank");
}

function crearConfeti(){
for(let i=0;i<20;i++){
let div=document.createElement("div");
div.style.position="absolute";
div.style.width="8px";
div.style.height="8px";
div.style.background=`hsl(${Math.random()*360},100%,50%)`;
div.style.left=Math.random()*window.innerWidth+"px";
div.style.top="-10px";
div.style.opacity="0.9";
div.style.transition="transform 2s, top 2s, opacity 2s";
document.body.appendChild(div);
setTimeout(()=>{div.style.top="400px";div.style.transform="rotate("+Math.random()*360+"deg)";div.style.opacity=0;},50);
setTimeout(()=>{div.remove();},2200);
}
}