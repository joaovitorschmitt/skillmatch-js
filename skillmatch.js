const candidato = {
nome: "João",
areaInteresse: "Front-End",
habilidades: ["HTML", "CSS", "JavaScript"],
experiencia: 0
}

const vagas = [
{
nome: "Desenvolvedor Front-End Junior",
habilidades: ["HTML", "CSS", "JavaScript"],
},
{
nome: "Desenvolvedor Front-End Pleno",
habilidades: ["HTML", "CSS", "JavaScript", "Git", "React"]
},
{
nome: "Desenvolvedor Back-End Junior",
habilidades: ["JavaScript", "Node.js", "SQL", "Git"],
}
];

const resultados = [];
vagas.forEach(vaga => {
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
    

