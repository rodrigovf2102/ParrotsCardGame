let qntdeCarta = 0;
let cartasJogo = [];
let contador = 0;

while (!qntdeCarta) {
    qntdeCarta = prompt("Digite o número de cartas em jogo: (4 a 14)");
    if (qntdeCarta % 2 || qntdeCarta < 4 || qntdeCarta > 14) {
        qntdeCarta = 0;
    }
}

const caixaJogo = document.querySelector(".caixa-jogo")
for (let i = 1; i <= qntdeCarta; i++) {
    tipoDeCarta = Math.ceil(i / 2);
    cartasJogo[i - 1] = tipoDeCarta;
}
cartasJogo.sort(comparador);

for (let i = 0; i < qntdeCarta; i++) {
    caixaJogo.innerHTML = caixaJogo.innerHTML +
        `<div class='carta-jogo' onclick="virarCarta(this)">
        <img class="frente aparecer" src='images/front.png'>
        <img class="verso esconder" src='images/${cartasJogo[i]}.gif'>
    </div>`;
}

function comparador() {
    return Math.random() - 0.5;
}

function virarCarta(carta) {
    if (carta.querySelector(".verso.aparecerfinal") == null) {
        contador++;

        carta.onclick = "";

        carta.querySelector(".frente").classList.remove("aparecer");
        carta.querySelector(".frente").classList.add("esconder");
        carta.querySelector(".verso").classList.remove("esconder");
        carta.querySelector(".verso").classList.add("aparecer");
        console.log(contador);

        if (contador % 2 === 0) {
            let cartasNaoClicaveis = document.querySelectorAll(".carta-jogo")
            for (let i = 0; i < cartasNaoClicaveis.length; i++) {
                cartasNaoClicaveis[i].onclick = nada();
            }
            setTimeout(verificarCartasIguais, 1000);
        }
    }
}


function verificarCartasIguais() {
    const cartasViradasVerso = document.querySelectorAll(".verso.aparecer");
    const cartasViradasFrente = document.querySelectorAll(".frente.esconder");

    if (cartasViradasVerso[0].getAttribute("src").toString() !== cartasViradasVerso[1].getAttribute("src").toString()) {
        let CartasClicaveis = document.querySelectorAll(".carta-jogo");
        for (let i = 0; i < 2; i++) {
            cartasViradasVerso[i].classList.remove("aparecer");
            cartasViradasVerso[i].classList.add("esconder");
            cartasViradasFrente[i].classList.remove("esconder");
            cartasViradasFrente[i].classList.add("aparecer");
        }
        for (let i = 0; i < CartasClicaveis.length; i++) {
            CartasClicaveis[i].onclick = function onclick(event) { virarCarta(this) };
        }
    }
    else {
        for (let i = 0; i < 2; i++) {
            cartasViradasVerso[i].classList.remove("aparecer");
            cartasViradasVerso[i].classList.add("aparecerfinal");
            cartasViradasFrente[i].classList.remove("esconder");
            cartasViradasFrente[i].classList.add("esconderfinal");
        }
        let CartasClicaveis = document.querySelectorAll(".carta-jogo")
        for (let i = 0; i < CartasClicaveis.length; i++) {
            CartasClicaveis[i].onclick = function onclick(event) { virarCarta(this) };
        }
    }

    let acertos = document.querySelectorAll(".aparecerfinal").length;
    if(acertos == qntdeCarta)
    {
        alert("Você ganhou em: "+contador+" jogadas!");
    }

}
function nada() {

}