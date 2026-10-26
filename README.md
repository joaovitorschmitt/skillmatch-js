# skillmatch-js
## Sobre o projeto

O SkillMatch é um programa de simulação que compara as habilidades de um candidato com os requisitos de vagas de emprego. O programa ajuda o candidato a identificar se suas habilidades atendem ou não aos requisitos das vagas disponíveis. Com essas informações, o candidato pode identificar as habilidades que precisa desenvolver, estudando e se qualificando para outras oportunidades de emprego.

## Como funciona o cálculo de compatibilidade

O SkillMatch calcula a compatibilidade comparando as habilidades que o candidato possui com o total de habilidades exigidas por cada vaga. Por exemplo, na vaga de Desenvolvedor Front-End Junior - React, o candidato possui 3 das 5 habilidades exigidas, resultando em 60% de compatibilidade. Com esse resultado, ele consegue identificar quais habilidades precisa estudar e desenvolver para se preparar melhor para essa oportunidade.

### Fórmula utilizada

**Compatibilidade (%) = (quantidade de habilidades compatíveis / total de habilidades exigidas pela vaga) × 100**

Escolhi essa regra porque ela é simples e permite comparar todas as vagas usando a mesma proporção. Por exemplo, se o candidato possui 3 das 5 habilidades exigidas, sua compatibilidade é de 60%.

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

### Tipos de dados utilizados

- **Strings:** armazenam o nome do candidato, a área de interesse, os nomes das empresas e os cargos.
- **Números:** representam o tempo de experiência, as quantidades de habilidades e os percentuais de compatibilidade.
- **Arrays:** armazenam as habilidades do candidato, os requisitos das vagas e os resultados da análise.
- **Objetos:** representam o candidato, as vagas e os resultados de compatibilidade.
- **Booleanos:** a variável existemVagas recebe true quando a lista contém vagas válidas e false quando a condição não é satisfeita.

## Como funciona a recomendação de estudo

O programa reúne as habilidades que faltam nas vagas e conta quantas vezes cada habilidade aparece. A habilidade faltante mais frequente é priorizada para a recomendação de estudo. Assim, o candidato consegue identificar qual conhecimento pode ajudar a se preparar para mais oportunidades.

## Como a internet funciona

A internet conecta computadores e servidores por meio de redes. Quando um dispositivo solicita uma página ou dados, a requisição é enviada pela rede até um servidor, que retorna uma resposta. No SkillMatch, não fazemos uma requisição real: simulamos a espera pelo carregamento das vagas usando setTimeout(), Promise e async/await.

## Simulação da arquitetura cliente-servidor

O projeto simula o carregamento de vagas como se os dados viessem de um servidor. A função carregarVagas() utiliza Promise e setTimeout() para representar o tempo de resposta. A função iniciarSkillMatch() utiliza async/await para aguardar o carregamento antes de iniciar a análise. O tratamento de erros com try/catch permite informar quando o carregamento falha.

Esta é uma simulação local: o projeto não utiliza uma API externa nem possui um servidor real.

## Ferramentas utilizadas

- Visual Studio Code: edição do código.
- Node.js: execução do programa JavaScript.
- Git e GitHub: versionamento e armazenamento do código-fonte.

## Extensões do VS Code

O projeto não depende de extensões específicas para funcionar. Como ferramentas opcionais de apoio, podem ser utilizadas:

- Prettier - Code formatter: ajuda a manter a formatação do código consistente.
- ESLint: ajuda a identificar possíveis problemas no JavaScript.

## Vídeo de demonstração

Link do vídeo: adicionar o link público após gravar a demonstração.

O vídeo demonstrará a execução do SkillMatch, os resultados de compatibilidade, as habilidades faltantes, a recomendação de estudo e os principais conceitos de JavaScript utilizados.

## Declaração de variáveis em JavaScript

**const:** utilizada quando a variável não precisa receber outra atribuição, como nas referências às listas e aos resultados.
**let:** utilizada quando o valor precisa ser atualizado, como no contador de vagas e na classificação.
**var:** possui escopo de função e permite redeclaração. Neste projeto, priorizei let e const para deixar o controle das variáveis mais claro.

## Vídeo de apresentação

Assista à demonstração do projeto SkillMatch JS:

[▶️ Assistir ao vídeo de apresentação no YouTube](https://youtu.be/tTCtQONzy4c)
