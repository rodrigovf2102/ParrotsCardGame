let qntdeCarta=0;

while(!qntdeCarta){
    qntdeCarta = prompt("Digite o número de cartas em jogo: (4 a 14)");
    if(qntdeCarta%2 || qntdeCarta < 4 || qntdeCarta > 14){
        qntdeCarta =0;
    }
}
console.log(qntdeCarta);
