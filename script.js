let qntdeCarta=0;
let cartasJogo =[];

while(!qntdeCarta){
    qntdeCarta = prompt("Digite o número de cartas em jogo: (4 a 14)");
    if(qntdeCarta%2 || qntdeCarta < 4 || qntdeCarta > 14){
        qntdeCarta =0;
    }
}

const caixaJogo = document.querySelector(".caixa-jogo")
for(let i=1;i<=qntdeCarta;i++){
    tipoDeCarta = Math.ceil(i/2);
    cartasJogo[i-1] = tipoDeCarta;
}
cartasJogo.sort(comparador);

for(let i=0;i<qntdeCarta;i++){
    caixaJogo.innerHTML = caixaJogo.innerHTML+ 
    `<div class='carta-jogo' onclick="virarCarta(this)">
        <img class="frente" src='images/front.png'>
        <img class="verso escondido" src='images/${cartasJogo[i]}.gif'>
    </div>`;
}

function comparador() { 
	return Math.random() - 0.5; 
}
function virarCarta(carta){
    carta.querySelector(".frente").classList.add("escondido");
    carta.querySelector(".verso").classList.remove("escondido"); 
}