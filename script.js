// Número pré-definido ou randômico
const numeroSecreto = Math.floor(Math.random() * 11);
let tentativasRestantes = 3;

function makeGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const resultMessage = document.getElementById("resultMessage");

    if (guess === numeroSecreto) {
        resultMessage.textContent = "Parabéns! Você acertou!";
        resultMessage.style.color = "green";
        disableInput();
    } else {
        tentativasRestantes--;
        if (tentativasRestantes > 0) {
            const dica = guess < numeroSecreto ? 'maior' : 'menor';
            resultMessage.textContent = `Errado! O número é ${dica} que ${guess}. Você tem mais ${tentativasRestantes} tentativa(s).`;
            resultMessage.style.color = "orange";
        } else {
            resultMessage.textContent = `Você perdeu! O número era ${numeroSecreto}.`;
            resultMessage.style.color = "red";
            disableInput();
        }
    }
    document.getElementById("guessInput").value = '';
}

function disableInput() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
}

// Focus no input quando a página carrega
document.getElementById("guessInput").focus();
