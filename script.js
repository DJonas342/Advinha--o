//4. Ao clicar no botão "Chutar", o JavaScript deve:
//5. Capturar o valor inserido no input (palpite do jogador).
//6. Validar se o palpite é um número válido entre 1 e 100.
//7. Comparar o palpite com o número secreto e exibir uma mensagem:
//"Você acertou!" (e o jogo termina).
//"O número secreto é maior" (e o jogador continua tentando).
//7. "O número secreto é menor" (e o jogador continua tentando).
//8. Decrementar o contador de tentativas.
//9. Exibir o número de tentativas restantes.
//10. Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".

const obterElemento = (id) => document.getElementById(id);
const valorInformado = () => parseInt(obterElemento("palpite").value);
const valorInvalido = (valorInformado) => isNaN(valorInformado) || valorInformado < 0 || valorInformado > 100;
const numberSecret = Math.floor(Math.random() * 101);
let tentativas = 15;

console.log("Número secreto:", numeroSecreto); //teste de numero secreto

function chutar(){
    const valor = valorInformado()
    
    if (valorInvalido(valor)) {
        obterElemento("dica").textContent = "Insira um valor entre 0 a 100";
        return;
    }

    if (valor === numeroSecreto) {
        obterElemento("dica").textContent = "🎉 Você ganhou!";
    } else {
        tentativas--;
        obterElemento("chances").textContent = "Você tem " + tentativas + " chances";

        if (tentativas <= 0) {
            obterElemento("dica").textContent = "💀 Fim de jogo. O número era " + numeroSecreto;
        } else {
            obterElemento("dica").textContent = valor < numeroSecreto ? "🔼 Tente um número maior" : "🔽 Tente um número menor";
        }
    }
}