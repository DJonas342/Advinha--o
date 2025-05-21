// Funções utilitarias
const obterElemento = (id) => document.getElementById(id);
let tentativas = 15;
let numberSecret = Math.floor(Math.random() * 101);

//Palpite e validação de valor
const valorInformado = () => parseInt(obterElemento("palpite").value);
const valorInvalido = (valorInformado) => isNaN(valorInformado) || valorInformado < 0 || valorInformado > 100;

// Função de reiniciar jogo após vitoria ou derrota
function resetarJogo() {
    tentativas = 15;
    numberSecret = Math.floor(Math.random() * 101);
    obterElemento("dica").textContent = "";
    obterElemento("chances").textContent = "Você tem 15 chances";
    obterElemento("palpite").value = "";
    console.log("Novo número secreto:", numberSecret); // só pra debug
}

console.log("Número secreto:", numberSecret); // Teste de numero secreto

//Validação e comparação do palpite com o numero secreto
function chutar(){
    const valor = valorInformado()
    
    if (valorInvalido(valor)) {
        obterElemento("dica").textContent = "Insira um valor entre 0 a 100";
        return;
    }

    if (valor === numberSecret) {
        obterElemento("dica").textContent = "🎉 Você ganhou!";
        obterElemento("chances").textContent = "O jogo sera reiniciado em 10 segundos"
        setTimeout(resetarJogo, 10000); // reinicia em 10 segundos
        return;
        } else {
        tentativas--;
        obterElemento("chances").textContent = "Você tem " + tentativas + " chances";

        if (tentativas <= 0) {
            obterElemento("dica").textContent = "💀 Fim de jogo. O número era " + numberSecret;
            obterElemento("chances").textContent = "O jogo sera reiniciado em 10 segundos"
            setTimeout(resetarJogo, 10000); // reinicia em 10 segundos
            return;} else {
            obterElemento("dica").textContent = valor < numberSecret ? "🔼 Tente um número maior" : "🔽 Tente um número menor";
        }
    }
}