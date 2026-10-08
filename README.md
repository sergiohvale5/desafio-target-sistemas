# Desafio Técnico — Target Sistemas

Solução desenvolvida para o desafio técnico da vaga de **Desenvolvedor/a de Sistemas Jr. — Target Sistemas**.

O projeto foi desenvolvido em **TypeScript**, com foco na resolução dos problemas propostos, organização do código, separação de responsabilidades e aplicação de regras de negócio.

## Desafios desenvolvidos

### 1. Cálculo de comissão

Implementação do cálculo de comissão para cada venda, seguindo as regras definidas no desafio:

- Vendas abaixo de **R$ 100,00** não geram comissão;
- Vendas abaixo de **R$ 500,00** geram **1% de comissão**;
- Vendas a partir de **R$ 500,00** geram **5% de comissão**.

Os dados de vendas são armazenados e processados individualmente para determinar a comissão correspondente a cada venda.

### 2. Movimentação de estoque

Implementação de movimentações de **entrada e saída de produtos** em estoque.

O sistema contempla:

- identificação do produto;
- movimentação de entrada;
- movimentação de saída;
- validação do produto;
- validação da quantidade movimentada;
- validação do tipo de movimentação;
- validação de estoque disponível para saída;
- geração de um identificador para cada movimentação;
- retorno da quantidade final em estoque após a movimentação.

### 3. Cálculo de juros

Implementação do cálculo de juros sobre dívidas vencidas, considerando a taxa definida no desafio.

O processamento considera:

- valor original da dívida;
- data de vencimento;
- quantidade de dias em atraso;
- valor dos juros;
- valor total atualizado.

## Tecnologias utilizadas

- **TypeScript**
- **Node.js**

## Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/sergiohvale5/desafio-target-sistemas.git
```

Entre na pasta:

```bash
cd desafio-target-sistemas
```

Instale as dependências:

```bash
npm install
```

### Executando

Os exercícios podem ser executados individualmente conforme a configuração do projeto.

```bash
npm run build
```

Após o build, execute os arquivos

```bash
npm run start
```

## 🎯 Objetivo

O objetivo deste projeto é apresentar a solução dos desafios propostos pela **Target Sistemas**, demonstrando conhecimentos em lógica de programação, TypeScript, organização de código e implementação de regras de negócio.