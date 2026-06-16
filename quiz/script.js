const fatosCopa = [
    "O Brasil marcou o seu milésimo gol na história da Copa do Mundo em 2018, em um jogo contra a Sérvia na fase de grupos.",
    "A icônica camisa amarela (a Amarelinha) só passou a ser usada após a Copa de 1950, substituindo o uniforme branco após o 'Maracanazo'.",
    "O criador da camisa canarinho foi o jornalista gaúcho Aldyr Garcia Schlee, que venceu um concurso nacional de desenho em 1953.",
    "O Brasil detém a maior sequência de vitórias consecutivas na história das Copas: 11 triunfos entre as edições de 2002 e 2006.",
    "O jogador mais jovem a estrear pela Seleção em uma Copa foi Pelé, em 1958, com apenas 17 anos e 235 dias, contra a União Soviética.",
    "O capitão do penta em 2002, Cafu, é o único jogador na história do futebol a disputar três finais consecutivas de Copa do Mundo (1994, 1998 e 2002).",
    "Garrincha nunca perdeu uma partida sequer jogando ao lado de Pelé com a camisa da Seleção Brasileira.",
    "Na Copa de 1970, o Brasil se tornou a primeira seleção a vencer todos os jogos das Eliminatórias e todos os jogos da fase final do torneio.",
    "Mário Zagallo é a pessoa que mais acumulou finais de Copa na história do futebol: esteve envolvido em 5 decisões (1958, 1962, 1970, 1994 e 1998).",
    "Em 2014, o ex-atacante Klose da Alemanha quebrou o recorde de Ronaldo Fenômeno de maior artilheiro das Copas justamente jogando contra o Brasil.",
    "A maior goleada aplicada pelo Brasil na história das Copas foi um impressionante 7 a 1 contra a Suécia, na edição de 1950.",
    "O primeiro gol do Brasil na história das Copas do Mundo foi marcado por Preguinho, na derrota por 2 a 1 contra a Iugoslávia em 1930.",
    "Nas Copas de 1958 e 1962, o Brasil foi campeão utilizando exatamente o mesmo esquema tático base, o inovador 4-3-3 desenvolvido por Vicente Feola.",
    "Na Copa de 1934, realizada na Itália, o Brasil fez a sua participação mais curta da história, jogando apenas uma partida e sendo eliminado pela Espanha.",
    "Até hoje, o Brasil é a única seleção das Américas a cruzar o Oceano Atlântico e vencer uma Copa do Mundo disputada em solo europeu (Suécia 1958).",
    "O lateral-direito Cafu também é o jogador que mais vezes vestiu a camisa da Seleção Brasileira em Copas do Mundo, com 20 partidas disputadas.",
    "O Brasil foi a primeira seleção a conquistar o direito de ficar com a posse definitiva da Taça Jules Rimet após o tricampeonato em 1970.",
    "Em 1938, o brasileiro Leônidas da Silva, conhecido como 'Diamante Negro', jogou e marcou gols descalço durante uma partida na chuva contra a Polônia.",
    "A Seleção de 1982, comandada por Telê Santana, é amplamente considerada uma das melhores equipes da história a não vencer uma Copa do Mundo.",
    "O Brasil é a única seleção a participar de TODAS as edições da Copa do Mundo desde 1930.",
    "Pelé continua sendo o jogador mais jovem a marcar em uma final de Copa do Mundo, com apenas 17 anos e 249 dias em 1958.",
    "Em 1994, o Brasil se tornou o primeiro país a vencer uma final de Copa do Mundo nos pênaltis, contra a Itália.",
    "Ronaldo Fenômeno quebrou o recorde de gols em uma única edição pós-anos 70 ao marcar 8 gols na Copa de 2002.",
    "O Brasil é o maior vencedor da história das Copas, com 5 títulos conquistados (1958, 1962, 1970, 1994 e 2002).",
    "Zagallo foi a primeira pessoa a vencer a Copa do Mundo tanto como jogador (1958, 1962) quanto como treinador (1970) e assistente técnico (1994).",
    "O gol mais rápido do Brasil em Copas foi de Vavá, em 1958, logo aos 2 minutos contra a União Soviética."
    
];


const factDisplay = document.getElementById('fact-display');
const nextFactBtn = document.getElementById('next-fact-btn');

let ultimoIndice = -1;

function mostrarFato() {
    let novoIndice;
    
    do {
        novoIndice = Math.floor(Math.random() * fatosCopa.length);
    } while (novoIndice === ultimoIndice);

    ultimoIndice = novoIndice;
    
    factDisplay.style.opacity = 0;
    
    setTimeout(() => {
        factDisplay.innerText = fatosCopa[novoIndice];
        factDisplay.style.opacity = 1;
    }, 200);
}

nextFactBtn.addEventListener('click', mostrarFato);

const opcoesQuiz = document.querySelectorAll('.opcao-quiz');
const resultadoQuiz = document.getElementById('resultado-quiz');

opcoesQuiz.forEach(botao => {
    botao.addEventListener('click', () => {
        // Desabilita os outros botões após a escolha
        opcoesQuiz.forEach(b => b.disabled = true);
        
        if (botao.getAttribute('data-correto') === 'true') {
            botao.className = "btn btn-success";
            resultadoQuiz.innerHTML = "🏆 Resposta Correta! Cafu ergueu a taça em 2002. 🌟";
            resultadoQuiz.className = "mt-3 text-success fw-bold fs-5";
        } else {
            botao.className = "btn btn-danger";
            resultadoQuiz.innerHTML = "❌ Errado! Tente lembrar de quem ergueu a taça sobre o pedestal...";
            resultadoQuiz.className = "mt-3 text-danger fw-bold fs-5";
        }
    });
});