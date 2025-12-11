/* script.js */

const btn = document.getElementById('btn-fix');
const body = document.body;
let clicks = 0;

// PEGADINHA 1: O Botão Fujão (Demonstra manipulação de coordenadas)
btn.addEventListener('mouseover', () => {
    // 80% de chance do botão fugir para não ser impossível clicar
    if (Math.random() > 0.2) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        
        btn.style.position = 'absolute';
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    }
});
// O GATILHO: Adicione isso para o botão funcionar ao ser clicado!
btn.addEventListener('click', () => {
    clicks++;
    
    // Na primeira vez, dá uma chance
    if (clicks === 1) {
        btn.innerText = "Tem certeza?";
        btn.style.backgroundColor = "orange"; // Aviso de perigo
    } else {
        // Na segunda vez, ativa o caos
        iniciarProtocoloCaos();
    }
});
// PEGADINHA 2: O Caos Total (Demonstra manipulação em massa do DOM)
// Mensagens assustadoras para o terminal
// Pega o navegador da pessoa (Ex: "Chrome", "Firefox")
const navegador = navigator.userAgent.toLowerCase().includes("chrome") ? "Google Chrome" : "Navegador";

const logs = [
    "Acessando carteira com 10 BTC...",
    `você esta sendo hackado: ...`, // <--- AQUI A MÁGICA
    "você esta sendo hackado...",
    "você esta sendo hackado ...",
    "sua conta bancaria foi acessada...",
    "peguei todo o seu dinheiro...",
    "hahahahahahahahahahhahaahhahahaha..."
];
function iniciarProtocoloCaos() {
    // 1. Muda o botão e o fundo (igual antes)
    btn.innerText = "NÃO ADIANTA FUGIR";
    btn.style.backgroundColor = "red";
    body.classList.add('panic-mode'); // Usei add ao invés de toggle para ficar vermelho direto

    // 2. Faz os elementos girarem (sua lógica antiga)
    const elements = document.querySelectorAll('h1, p, h2, div:not(#terminal):not(#bsod)');
    elements.forEach(el => {
        el.style.position = 'absolute';
        setInterval(() => {
            const rot = Math.random() * 20 - 10; // Treme um pouco
            const x = Math.random() * 50 - 25;   // Move um pouco
            el.style.transform = `translate(${x}px, ${x}px) rotate(${rot}deg)`;
        }, 100);
    });

    // 3. Mostra o Terminal Hacker
    const terminal = document.getElementById('terminal');
    terminal.style.display = 'block';
    
    let index = 0;
    // Função recursiva para digitar uma linha por vez
    function escreverLog() {
        if (index < logs.length) {
            const linha = document.createElement('p');
            linha.textContent = `> ${logs[index]}`;
            terminal.appendChild(linha);
            terminal.scrollTop = terminal.scrollHeight; // Mantém a rolagem no final
            index++;
            // Tempo aleatório entre 0.5s e 1.5s para parecer digitação real
            setTimeout(escreverLog, Math.random() * 1000 + 500); 
        } else {
            // Quando acabarem as mensagens... TELA AZUL!
            ativarTelaAzul();
        }
    }
    escreverLog();
}

function ativarTelaAzul() {
    // Tenta colocar em tela cheia (O navegador pode bloquear sem clique, mas vale tentar)
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((e) => {});
    }
    
    document.getElementById('bsod').style.display = 'block';
    document.body.style.cursor = 'none'; // Some com o mouse real
}