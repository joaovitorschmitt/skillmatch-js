# skillmatch-js
## Sobre o projeto

O SkillMatch é um programa de simulação que compara as habilidades de um candidato com os requisitos de vagas de emprego. O programa ajuda o candidato a identificar se suas habilidades atendem ou não aos requisitos das vagas disponíveis. Com essas informações, o candidato pode identificar as habilidades que precisa desenvolver, estudando e se qualificando para outras oportunidades de emprego.

## Como funciona o cálculo de compatibilidade

O SkillMatch calcula a compatibilidade comparando as habilidades que o candidato possui com o total de habilidades exigidas por cada vaga. Por exemplo, na vaga de Desenvolvedor Front-End Pleno, o candidato possui 3 das 5 habilidades exigidas, resultando em 60% de compatibilidade. Com esse resultado, ele consegue identificar quais habilidades precisa estudar e desenvolver para se preparar melhor para essa oportunidade.

## Classificação de compatibilidade

| Percentual | Classificação |
|------------|---------------|
| 80% ou mais | Alta compatibilidade |
| De 50% até menos de 80% | Compatibilidade média |
| Abaixo de 50% | Baixa compatibilidade |

A classificação das vagas em alta, média e baixa compatibilidade ajuda a organizar os resultados e identificar quais oportunidades mais combinam com as habilidades do candidato. Dessa forma, ele consegue visualizar quais vagas atendem melhor ao seu perfil e identificar as habilidades que precisa desenvolver para se preparar para outras oportunidades de emprego.

## Como executar o projeto

Para executar o SkillMatch, é necessário ter o Node.js instalado no computador. Abra a pasta do projeto no VS Code e abra um terminal dentro da pasta `skillmatch-js`. Em seguida, execute o comando `node skillmatch.js` para ver os resultados da análise de compatibilidade no terminal.

## Conceitos de JavaScript utilizados

**Classes e objetos:** a classe Candidato representa o perfil do candidato.
**Herança:** a classe CandidatoFrontEnd herda características de Candidato usando extends e super.
**Callback:** a função processarVagas recebe outra função como parâmetro para processar as vagas.
**Closure:** a função criarContadorVagas mantém um contador interno que aumenta a cada chamada.
**Métodos de arrays:** filter identifica habilidades compatíveis e faltantes; find encontra a melhor vaga; reduce reúne e conta as habilidades faltantes.
**Promise e async/await:** simulam o carregamento assíncrono das vagas.
**Tratamento de erros:** try/catch captura falhas durante o carregamento das vagas.
**this:** acessa os atributos do objeto candidato dentro da classe.

## Como funciona a recomendação de estudo

O programa reúne as habilidades que faltam nas vagas e conta quantas vezes cada habilidade aparece. A habilidade faltante mais frequente é priorizada para a recomendação de estudo. Assim, o candidato consegue identificar qual conhecimento pode ajudar a se preparar para mais oportunidades.

## Simulação da arquitetura cliente-servidor

O projeto simula o carregamento de vagas como se os dados viessem de um servidor. A função carregarVagas() utiliza Promise e setTimeout() para representar o tempo de resposta. A função iniciarSkillMatch() utiliza async/await para aguardar o carregamento antes de iniciar a análise. O tratamento de erros com try/catch permite informar quando o carregamento falha.

Esta é uma simulação local: o projeto não utiliza uma API externa nem possui um servidor real.

## Ferramentas utilizadas

- Visual Studio Code: edição do código.
- Node.js: execução do programa JavaScript.
- Git e GitHub: versionamento e armazenamento do código-fonte.