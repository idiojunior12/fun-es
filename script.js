const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua escola decidiu implementar um assistente virtual de IA para ajudar os alunos com as tarefas de casa. Como você reage no primeiro dia de uso?",
        alternativas: [
            {
                texto: "Acho incrível! Vai tornar o aprendizado mais personalizado e dinâmico.",
                afirmacao: "Enxergou a IA como uma grande aliada para otimizar seus estudos desde o início."
            },
            {
                texto: "Fico com o pé atrás. Prefiro aprender do jeito tradicional com professores e livros.",
                afirmacao: "Manteve uma postura cautelosa, valorizando os métodos de ensino tradicionais e humanos."
            }
        ]
    },
    {
        enunciado: "Durante uma aula de história, o professor pede um debate sobre o uso de robôs e IA na medicina. Qual é a sua principal intervenção na conversa?",
        alternativas: [
            {
                texto: "Defendo que a IA pode diagnosticar doenças com mais precisão e salvar vidas rapidamente.",
                afirmacao: "Tornou-se um entusiasta do uso da tecnologia para avanços na saúde e na ciência."
            },
            {
                texto: "Aporto que a IA não pode substituir a empatia e o cuidado humano de um médico de verdade.",
                afirmacao: "Defendeu a ideia de que o toque humano é insubstituível em profissões essenciais."
            }
        ]
    },
    {
        enunciado: "Para a feira de ciências, sua equipe precisa apresentar um projeto sobre sustentabilidade. Alguém sugere criar um código com IA para prever o desperdício de água na escola. O que você faz?",
        alternativas: [
            {
                texto: "Apoio a ideia e me disponho a aprender como programar prompts e usar a IA para o projeto.",
                afirmacao: "Desenvolveu habilidades de resolução de problemas aplicando IA em causas ambientais."
            },
            {
                texto: "Sugiro fazermos uma pesquisa de campo e entrevistas presenciais com os alunos e funcionários primeiro.",
                afirmacao: "Priorizou a coleta de dados reais e a interação humana antes de confiar em algoritmos."
            }
        ]
    },
    {
        enunciado: "Você descobre que uma imagem feita por IA ganhou um concurso de arte local, gerando polêmica entre os artistas da cidade. Qual é o seu posicionamento?",
        alternativas: [
            {
                texto: "Acho válido, pois criar prompts detalhados também exige criatividade e expressão artística.",
                afirmacao: "Passou a enxergar as ferramentas digitais e a IA como novas formas de manifestação artística."
            },
            {
                texto: "Acho injusto com quem passou anos treinando técnicas manuais de pintura e desenho.",
                afirmacao: "Valorizou o esforço técnico manual e tornou-se um defensor dos direitos dos artistas tradicionais."
            }
        ]
    },
    {
        enunciado: "Um colega de classe confessa que usou IA para gerar um trabalho inteiro de literatura sem ler o livro indicado. Como você aconselha esse colega?",
        alternativas: [
            {
                texto: "Aviso que ele perdeu a oportunidade de aprender e que a IA pode ter inventado fatos sobre o livro (alucinação).",
                afirmacao: "Compreendeu a importância do pensamento crítico e da checagem de fatos ao usar ferramentas de IA."
            },
            {
                texto: "Digo que ele fez bem em economizar tempo, desde que o texto pareça bem escrito e passe despercebido.",
                afirmacao: "Percebeu mais tarde os riscos do plágio e a necessidade de usar a tecnologia de forma ética."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
