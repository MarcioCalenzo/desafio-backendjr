## Desafio Backend Jr - Configuração do Projeto

Este projeto em Node.js requer algumas configurações antes de ser executado corretamente. Siga as etapas abaixo para configurar o ambiente:

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/en/download](https://nodejs.org/en/download).

### Passo 1: Configuração do ambiente

1. No terminal, navegue até a pasta onde deseja clonar o projeto.

2. Clone este repositório. Você pode fazer isso através do comando `git clone` ou baixando o repositório como um arquivo ZIP e descompactando-o. Certifique-se de estar dentro da pasta "node" para rodar o projeto.

3. Abra duas janelas de terminal separadas: uma para o frontend e outra para o backend.

4. Em ambas as janelas de terminal, execute o comando para instalar as dependências do projeto. Se estiver usando npm, execute o comando `npm install`. Se estiver usando o yarn, execute o comando `yarn`.

5. Após a instalação das dependências, execute o comando para iniciar a aplicação em ambas as janelas de terminal. Se estiver usando npm, execute o comando `npm run dev`. Se estiver usando o yarn, execute o comando `yarn dev`.

Observação: Neste projeto, para facilitar para o usuário, não é necessário criar nenhum arquivo `.env`. O projeto está pronto para ser executado seguindo os passos acima.

Agora você está pronto para executar o projeto Desafio Backend Jr em seu ambiente local! Abra o navegador e acesse a URL [http://localhost:1234/](http://localhost:1234/).

# Documetaçao da API 

## Rotas

A API oferece as seguintes rotas:

- `api/users/`

  - `POST` - Cadastrar um usuario.
  - `GET` - Listar o seu usuario e se for admin listar todos os usuarios.

- `api/users/id`

  - `PATCH` - Atualizar os dados do seu user ou se for admin atualizar os dados de qualquer user.
  - `DELETE` - Excluir o seu user ou se for admin excluir um user especifico.

- `api/login/`

  - `POST` - Fazer o login.

- `api/persons/`

  - `POST` - Colocar um arquivo `.csv` no banco de dados.
  - `GET` - Pegar os dados armazenados e trazer como um JSON.

- `api/tokengit/`

  - `GET` - Filtrar um pet específico.
  - `PATCH` - Atualizar os dados de um pet específico.
  - `DELETE` - Excluir um pet específico.


Caso tenha qualquer duvida sobre a aplicaçao não hesite em me procurar 
email: marciogabrieloficial@hotmail.com
wpp/telefone: +55 21 98071-3406
linkedin: https://www.linkedin.com/in/marciocalenzo/
