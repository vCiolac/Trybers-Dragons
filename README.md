# Trybers and Dragons

Este projeto é uma implementação de um sistema de jogos de interpretação de papéis (RPG) chamado Trybers and Dragons (T&D). Aqui, aplicamos os princípios da arquitetura SOLID e os princípios de Programação Orientada a Objetos (POO) em uma estrutura de jogo.

## Descrição do Projeto

No universo de Trybers and Dragons, os personagens pertencem a diferentes raças e possuem arquétipos que definem suas habilidades e visão de mundo. Este projeto se concentra em criar as classes e interfaces necessárias para representar esses elementos fundamentais do jogo.

### Classes e Interfaces

1. **Raça (Race):** Classe abstrata que define as características básicas de uma raça, como nome e destreza.
2. **Arquétipo (Archetype):** Classe abstrata que representa os talentos especiais de um personagem, como nome, ataque especial e custo energético.
3. **Personagem (Character):** Classe que combina uma raça e um arquétipo para criar um personagem único, com atributos como pontos de vida, força e energia.
4. **Energia (Energy):** Interface que define o tipo e a quantidade de energia de um ser, podendo ser mana ou stamina.
5. **Lutador (Fighter):** Interface que define os atributos e métodos de um ser capaz de lutar, como pontos de vida, força e ataques.
6. **Lutador Simples (SimpleFighter):** Interface que define os atributos e métodos básicos de um ser capaz de lutar, adequado para personagens menos complexos.
7. **Monstro (Monster):** Classe que representa uma criatura bestial que ataca outros seres, implementando a interface SimpleFighter.
8. **Batalha (Battle):** Classe abstrata que representa uma batalha genérica, com métodos para iniciar e resolver uma luta.
9. **PVP (Player versus Player):** Classe que herda de Battle e representa uma batalha entre personagens, onde dois jogadores se enfrentam diretamente.
10. **PVE (Player versus Environment):** Classe que herda de Battle e representa uma batalha entre um personagem e um ou mais monstros.

## Como Utilizar

Para utilizar este projeto, siga as instruções de instalação e execução abaixo:

1. Clone o repositório do projeto.
2. Instale as dependências necessárias utilizando o comando `npm install`.
3. Execute o projeto utilizando o comando `npm start`.
4. Siga as instruções específicas para cada funcionalidade ou classe implementada.

## Créditos

Este projeto foi desenvolvido como parte do curso de Desenvolvimento de Software da Trybe.
