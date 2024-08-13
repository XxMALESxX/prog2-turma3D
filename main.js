const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Função para alternar entre abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Funções do cronômetro
const tempos = [
    new Date("2023-10-05T00:00:00"), // Ajuste conforme necessário
    new Date("2023-12-05T00:00:00"),
    new Date("2023-12-30T00:00:00"),
    new Date("2024-02-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;
    const segundos = Math.floor(tempoFinal / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    return tempoFinal > 0
        ? [dias, horas % 24, minutos % 60, segundos % 60]
        : [0, 0, 0, 0];
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);
        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

document.addEventListener('DOMContentLoaded', comecaCronometro);
