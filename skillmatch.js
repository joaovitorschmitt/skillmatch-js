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

const habilidadesEmComum = vagas[0].habilidades.filter(habilidade =>
    candidato.habilidades.includes(habilidade)
);

console.log(habilidadesEmComum);

