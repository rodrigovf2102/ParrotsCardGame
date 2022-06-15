let qntdeCarta=0;

while(!qntdeCarta){
    qntdeCarta = prompt("Digite o número de cartas em jogo: (4 a 14)");
    if(qntdeCarta%2 || qntdeCarta < 4 || qntdeCarta > 14){
        qntdeCarta =0;
    }
}

const caixaJogo = document.querySelector(".caixa-jogo")
for(let i=0;i<qntdeCarta;i++){
    caixaJogo.innerHTML = caixaJogo.innerHTML+ `<div class='carta-jogo'><img src='images/front.png'></div>`;
}
