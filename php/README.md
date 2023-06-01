## Desafio Backend Jr - Configuração do Projeto

Este projeto em PHP requer algumas configurações antes de ser executado corretamente. Siga as etapas abaixo para configurar o ambiente:

### Pré-requisitos

Certifique-se de ter o XAMPP instalado em sua máquina. Você pode baixá-lo em [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html).

### Passo 1: Configuração do ambiente

1. No terminal, navegue até a pasta aonde deseja clonar o projeto , va na pasta aonde foi instalado o xammp :

   ```bash
   cd /xampp/htdocs
   ```

2. Clone este repositório dentro da pasta `htdocs` dentro do XAMPP. Você pode fazer isso através do comando `git clone` ou baixando o repositório como um arquivo ZIP e descompactando-o em `htdocs` e garanta que esteja dentro da pasta php para rodar o projeto.

3. Execute o comando composer install para instalar as dependências do projeto. Certifique-se de ter o Composer instalado em sua máquina. Você pode baixá-lo em https://getcomposer.org/download/.

4. Crie um arquivo .env na raiz do projeto com base no arquivo .env.example fornecido. Você pode fazer isso copiando o conteúdo do .env.example para o novo arquivo .env e preenchendo as informações do banco de dados , sendo necessario criar antes o banco de dados para o projeto .

   ```env
   DB_HOST=seu_host
   DB_PORT=sua_porta
   DB_DATABASE=seu_banco_de_dados
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   ```

5. Importe o arquivo php/src/db.sql em seu banco de dados MySQL para criar a tabela necessária para o projeto.

### Passo 2: Execução do projeto

1. Inicie o servidor Apache e o MySQL do XAMPP.

2. No navegador, acesse a URL http://localhost/desafio-backendjr/php/ para visualizar a página do projeto.

3. Coloque seu arquivo .csv e depois clique no botão "Redirecionar para a autenticação para obter o JSON" .

4. Faça autenticação com o GitHub necessária, clique no botão "Login com GitHub" para iniciar o processo de autenticação.

5. Após autenticar-se com o GitHub, você será redirecionado para a página principal, onde poderá visualizar seu nome e botões para obter os dados ou fazer logout.

6. Para obter os dados da tabela desafio como JSON, clique no botão "Obter Dados".

### Observações

Certifique-se de que o XAMPP esteja configurado corretamente e os serviços do Apache e MySQL estejam em execução. Caso ocorra algum erro, verifique os logs do XAMPP para obter mais informações.

Se desejar acessar o projeto por uma URL diferente de http://localhost/desafio-backendjr/php/, ajuste a URL de acordo com a configuração do seu ambiente.

Agora você está pronto para executar o projeto Desafio Backend Jr em seu ambiente local!

Caso tenha qualquer duvida sobre a aplicaçao não hesite em me procurar 
email: marciogabrieloficial@hotmail.com
wpp/telefone: +55 21 98071-3406
linkedin: https://www.linkedin.com/in/marciocalenzo/
