# 📍 CEP Consultant - Atividade 02

Projeto de consulta de endereços via CEP, desenvolvido para a disciplina de **Desenvolvimento Web**.

## 🚀 Sobre o Projeto
Esta aplicação é uma ferramenta interativa para localização de endereços, focada em integração de serviços e dinamismo de interface:

- **Consumo de API:** Utilização da Fetch API para busca de dados em tempo real através do serviço externo **ViaCEP**.
- **Interface Dinâmica:** Desenvolvimento de uma página responsiva com feedbacks visuais instantâneos e animações de transição.
- **Processamento Assíncrono:** Uso de funções assíncronas para garantir que a consulta não interrompa a experiência do usuário.
- **Validação de Dados:** Implementação de lógica para formatação automática do campo de entrada e tratamento de erros de digitação.

## 🛠️ Tecnologias Utilizadas
[![My Skills](https://skillicons.dev/icons?i=html,css,js,nodejs,express,git,github&theme=dark)](https://skillicons.dev)

## 📁 Funcionalidades
- Busca de endereço automatizada ao pressionar a tecla "Enter".
- Máscara de formatação automática para o campo de CEP.
- Exibição de dados detalhados (Logradouro, Bairro, Cidade, UF, Região e DDD).
- Sistema de mensagens de status (Carregamento, Erro ou Sucesso).
- Servidor Node.js para gerenciamento de arquivos estáticos.

## 🔧 Como rodar o projeto
1. Clone o repositório:
   ```bash 
   git clone [https://github.com/igoriansen/cep-consultant-atv2.git](https://github.com/igoriansen/cep-consultant-atv2.git)

2. Vá para a pasta do repositório:
    ```bash
    cd cep-consultant-atv2

3. Instale as dependências:
    ```bash
    npm install

3. Inicie o servidor:
    ```bash
    npm start/npm run dev

3. Acesse no navegador:
    ```bash
    http://localhost:3002