class Candidato {
    constructor(nome, areaInteresse, habilidades, experiencia) {
        this.nome = nome;
        this.areaInteresse = areaInteresse;
        this.habilidades = habilidades;
        this.experiencia = experiencia;
    }

    apresentar() {
        return `${this.nome} tem interesse na área ${this.areaInteresse}.`;
    }
}

class CandidatoFrontEnd extends Candidato {
    constructor(nome, habilidades, experiencia) {
        super(nome, "Front-End", habilidades, experiencia);
    }

    apresentar() {
        return `${super.apresentar()} Esta buscando uma vaga de desenvolvimento Front-End.`;
    }
}

const candidato = new CandidatoFrontEnd(
    "João",
    ["HTML", "CSS", "JavaScript"],
    0
);

console.log(candidato.apresentar());

const vagas = [
{
nome: "Desenvolvedor Front-End Junior",
empresa: "Konoha Digital",
habilidades: ["HTML", "CSS", "JavaScript"],
},
{
nome: "Desenvolvedor Front-End Pleno",
empresa: "Capsule Corp Labs",
habilidades: ["HTML", "CSS", "JavaScript", "Git", "React"]
},
{
nome: "Desenvolvedor Back-End Junior",
empresa: "Thousand Sunny Tech",
habilidades: ["JavaScript", "Node.js", "SQL", "Git"],
}
];

function carregarVagas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(vagas) && vagas.length > 0) {
                resolve(vagas);
            } else {
                reject(new Error("Nenhuma vaga foi encontrada."));
            }
        }, 1500);
    });
}

function processarVagas(listaVagas, callback) {
    listaVagas.forEach(callback);
}

function criarContadorVagas() {
    let total = 0;

    return function() {
        total++;
        return total;
    };
}

const contarVagas = criarContadorVagas();

function analisarVagas(vagas) {
    const resultados = [];

processarVagas(vagas, vaga => {
    console.log(`Analisando vaga ${contarVagas()}: ${vaga.nome}`);

    const habilidadesEmComum = vaga.habilidades.filter(habilidade =>
        candidato.habilidades.includes(habilidade)
        
    );

    const habilidadesFaltantes = vaga.habilidades.filter(habilidade =>
        !candidato.habilidades.includes(habilidade)
        
    );

    const porcentagem = (habilidadesEmComum.length / vaga.habilidades.length) * 100;
    let classificacao = "";
    if (porcentagem >= 80) {
        classificacao = "Alta compatibilidade";
    } else if (porcentagem >= 50) {
        classificacao = "Compatibilidade média";
    } else {
        classificacao = "Baixa compatibilidade";
    }

    resultados.push({
       nome: vaga.nome,
       empresa: vaga.empresa,
       porcentagem: porcentagem,
       habilidadesCompativeis: habilidadesEmComum.length,
       totalHabilidades: vaga.habilidades.length,
       habilidadesFaltantes: habilidadesFaltantes,
       classificacao: classificacao 
    });

    });

resultados.sort((a, b) => b.porcentagem - a.porcentagem);
resultados.forEach(resultado => {
    console.log("------------------------------");
    console.log(`Vaga: ${resultado.nome}`);
    console.log(`Empresa: ${resultado.empresa}`);
    console.log(`Compatibilidade: ${resultado.porcentagem}%`);
    console.log(`Habilidades compatíveis: ${resultado.habilidadesCompativeis} de ${resultado.totalHabilidades}`);
    console.log(`Classificação: ${resultado.classificacao}`);
    if (resultado.habilidadesFaltantes.length > 0) {
    console.log("Habilidades faltantes", resultado.habilidadesFaltantes);
} else {
    console.log("Habilidades faltantes: Nenhuma");
}
    console.log("------------------------------");
})
    
const melhorVaga = resultados.find(resultado => resultado.classificacao === "Alta compatibilidade") || resultados[0];

console.log("Melhor vaga para o candidato:");
console.log(`Vaga: ${melhorVaga.nome}`);
console.log(`Empresa: ${melhorVaga.empresa}`);
console.log(`Compatibilidade: ${melhorVaga.porcentagem}%`);


const todasHabilidadesFaltantes = resultados.reduce((lista, resultado) => {
    return lista.concat(resultado.habilidadesFaltantes);
}, []);

console.log("Todas as habilidades faltantes:", todasHabilidadesFaltantes);

const contagemHabilidades = todasHabilidadesFaltantes.reduce((contagem, habilidade) => {
    contagem[habilidade] = (contagem[habilidade] || 0) + 1;
    return contagem;
}, {});

console.log("Frequencia das habilidades faltantes:", contagemHabilidades);

const rankingHabilidades = Object.entries(contagemHabilidades)
.sort((a, b) => b[1] - a[1]);

if (rankingHabilidades.length > 0){

console.log("Habilidades prioritaria:", rankingHabilidades[0][0]);

let recomendacaoEstudo = "";

if (rankingHabilidades[0][0] === "Git") {
    recomendacaoEstudo = "Estudar os comandos básicos do Git e praticar commits e branches.";
} else if (rankingHabilidades[0][0] === "React") {
    recomendacaoEstudo = "Estudar os fundamentos do React e praticar a criação de componentes.";
} else if (rankingHabilidades[0][0] === "Node.js") {
    recomendacaoEstudo = "Estudar os fundamentos do Node.js e praticar a criação de servidores simples.";
} else if (rankingHabilidades[0][0] === "SQL") {
    recomendacaoEstudo = "Estudar consultas SQL e praticar os comandos SELECT, WHERE e JOIN.";
}


console.log("Recomendacao de estudo:", recomendacaoEstudo);

}

}

async function iniciarSkillMatch() {
    try {
        console.log("Carregando vagas...");

        const vagasCarregadas = await carregarVagas();

        console.log("Vagas carregadas com sucesso!\n");

        analisarVagas(vagasCarregadas);
    } catch (erro) {
        console.error("Erro ao carregar vagas:", erro.message);
    }
}

iniciarSkillMatch();