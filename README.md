# 🚀 Gerenciador de Tarefas: Meu Primeiro Voo no Mundo Dev! ✨

Bem-vindo(a) ao **Gerenciador de Tarefas**! Este projeto não é apenas uma aplicação; é um marco na minha jornada como desenvolvedor(a). Ele representa a materialização de meses de estudo, dedicação e a emoção de ver o código ganhar vida pela primeira vez em um projeto completo.

Aqui, cada linha de código foi escrita com o propósito de aprender, experimentar e construir algo funcional e escalável. É a prova de que a persistência e a paixão transformam conhecimento em realidade!

---

## 💡 O Coração do Projeto: Por Que o Gerenciador de Tarefas?

Escolhi o Gerenciador de Tarefas como meu primeiro grande desafio por sua natureza prática e universal. É uma ferramenta que resolve um problema real do dia a dia, permitindo-me focar na arquitetura, nas funcionalidades e na experiência do usuário, sem me perder em complexidades de domínio.

Este projeto foi o meu laboratório para:

*   **Solidificar Conceitos:** Aplicar na prática tudo o que aprendi sobre desenvolvimento web, persistência de dados e lógica de negócios.
*   **Construir do Zero:** Experimentar o ciclo completo de desenvolvimento de uma aplicação, desde a concepção até a execução.
*   **Explorar Tecnologias:** Mergulhar em um ecossistema robusto e amplamente utilizado no mercado, como o Spring Boot e o ecossistema Java.

---

## ✨ Funcionalidades que Impulsionam a Produtividade

O Gerenciador de Tarefas foi desenhado para ser intuitivo e eficiente, ajudando você a manter suas atividades em ordem:

*   **Criação Simplificada:** Adicione tarefas rapidamente com título, descrição detalhada e prioridade.
*   **Visão Clara:** Visualize todas as suas tarefas em uma interface limpa e organizada.
*   **Controle de Status:** Marque tarefas como concluídas ou reabra-as com um clique, mantendo seu progresso atualizado.
*   **Gestão Completa:** Exclua tarefas desnecessárias para manter sua lista sempre relevante.
*   **Filtros Dinâmicos:** Organize sua visualização filtrando tarefas por status (todas, pendentes, concluídas).
*   **Estatísticas em Tempo Real:** Tenha um panorama instantâneo do seu volume de trabalho com contadores de tarefas totais, concluídas e pendentes.
*   **Priorização Estratégica:** Classifique suas tarefas com prioridades (Baixa, Média, Alta) para focar no que realmente importa.

---

## 🛠️ O Arsenal Tecnológico: Escolhas Estratégicas para o Futuro

As escolhas tecnológicas para este projeto foram pensadas não apenas para a funcionalidade atual, mas também para a **escalabilidade e o aprendizado contínuo**. Optar por um ecossistema maduro e robusto como o Java com Spring Boot me proporciona uma base sólida para projetos futuros, com vastas possibilidades de integração e expansão.

### 💻 Tecnologias Utilizadas

*   **Backend:**
    *   ![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
    *   ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) 
    *   ![Spring Data JPA](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
    *   ![Spring Web](https://img.shields.io/badge/Spring_Web-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) 
    *   ![H2 Database](https://img.shields.io/badge/H2_Database-4479A1?style=for-the-badge&logo=h2&logoColor=white) 
    *   ![Maven](https://img.shields.io/badge/Apache_Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white) 
*   **Frontend:**
    *   ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
    *   ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
    *   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
    *   ![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white) 
    *   ![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) 
    *   ![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)

---
 
### 📈 Escalabilidade e Futuro

A escolha do Spring Boot e a arquitetura RESTful abrem portas para futuras expansões:

*   **Migração de Banco de Dados:** Facilidade para trocar o H2 por bancos de dados de produção como PostgreSQL, MySQL ou MongoDB.
*   **APIs Robustas:** A estrutura RESTful permite que o backend sirva dados para outras aplicações (mobile, desktop) no futuro.
*   **Microserviços:** O projeto pode ser refatorado em microserviços, com cada funcionalidade se tornando um serviço independente, aumentando a escalabilidade e a manutenibilidade.
*   **Autenticação e Autorização:** Integração com Spring Security para adicionar camadas de segurança e controle de acesso.
*   **Testes Abrangentes:** A base do Spring Boot facilita a implementação de testes unitários, de integração e end-to-end, garantindo a qualidade do software.

---

## 🚀 Como Rodar Este Projeto Localmente

Quer ver o Gerenciador de Tarefas em ação na sua máquina? Siga estes passos:

1.  **Pré-requisitos:**
    *   Certifique-se de ter o **Java Development Kit (JDK) 17** ou superior instalado.
    *   O **Maven** é o gerenciador de dependências e build do projeto, e será utilizado automaticamente pelo `mvnw` (Maven Wrapper).
    *   Um IDE como IntelliJ IDEA, VS Code (com extensões Java) ou Eclipse é recomendado para uma melhor experiência de desenvolvimento.

2.  **Clone o Repositório:**
    Abra seu terminal ou prompt de comando e execute:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio-gerenciador-tarefas.git
    cd seu-repositorio-gerenciador-tarefas
    ```
    *(Lembre-se de substituir `seu-usuario/seu-repositorio-gerenciador-tarefas.git` pelo link real do seu repositório.)*

3.  **Compile o Projeto:**
    Dentro do diretório raiz do projeto, execute o comando Maven para compilar e baixar as dependências:
    ```bash
    ./mvnw clean install
    ```
    *Se você estiver usando Windows, use `mvnw.cmd clean install`.*

4.  **Execute a Aplicação:**
    Após a compilação bem-sucedida, inicie a aplicação Spring Boot:
    ```bash
    ./mvnw spring-boot:run
    ```
    *No Windows, use `mvnw.cmd spring-boot:run`.*

5.  **Acesse no Navegador:**
    Aguarde até que o console indique que a aplicação foi iniciada (geralmente na porta 8080). Em seguida, abra seu navegador web e acesse:
    ```
    http://localhost:8080
    ```

Parabéns! Você está agora com o Gerenciador de Tarefas rodando localmente.

---

## 💖 Conecte-se Comigo!

Este projeto é um testemunho do meu aprendizado e da minha paixão por criar. Se você tiver alguma dúvida, sugestão ou apenas quiser conversar sobre desenvolvimento, sinta-se à vontade para entrar em contato!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/breno-oliveira-ti/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BRENOLIVEIRApng)

---

Feito com muito código, café e a alegria de aprender! ☕
