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

  - `POST` - Colocar o code de autenticaçao e ira retonar um objetos com os dados do usuario.

## Exemplos de Uso

### Cadastrar um usuario.

```json
{
	"email": "teste@mail.com",
	"name": "teste",
	"phone": "11111",
	"isAdm": false,
	"password": "teste123"
}
```
### A resposta terá o seguinte formato:


```json
{
	"id": "cb562c2f-12d0-4433-9040-eab17d83c14d",
	"email": "teste@mail.com",
	"name": "teste",
	"phone": "11111",
	"isActive": true,
	"isAdm": false,
	"updatedAt": "2023-06-03T00:47:52.000Z",
	"createdAt": "2023-06-03T00:47:52.000Z"
}
```
### Login.

```json
{
	"email": "teste@mail.com",
	"password": "teste123"
}
```
### A resposta terá o seguinte formato:


```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY4NTc1MzMyOCwiZXhwIjoxNjg1ODM5NzI4LCJzdWIiOiJjYjU2MmMyZi0xMmQwLTQ0MzMtOTA0MC1lYWIxN2Q4M2MxNGQifQ.eWqtmoeejk2vG0lwJrtBL2mwxArx2CbT5Tv6eOy_REI"
}
```

### Listar usuario.

```json
{}
header : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY4NTc1MzMyOCwiZXhwIjoxNjg1ODM5NzI4LCJzdWIiOiJjYjU2MmMyZi0xMmQwLTQ0MzMtOTA0MC1lYWIxN2Q4M2MxNGQifQ.eWqtmoeejk2vG0lwJrtBL2mwxArx2CbT5Tv6eOy_REI
```
### A resposta terá o seguinte formato:


```json
{
	"id": "cb562c2f-12d0-4433-9040-eab17d83c14d",
	"email": "teste@mail.com",
	"name": "teste",
	"phone": "11111",
	"isActive": true,
	"isAdm": false,
	"updatedAt": "2023-06-03T00:47:52.000Z",
	"createdAt": "2023-06-03T00:47:52.000Z"
}
```

### Atualizar usuario (ID do usuario na url) .

```json
{
	"name": "teste1"
}
```
### A resposta terá o seguinte formato:


```json
{
	"id": "cb562c2f-12d0-4433-9040-eab17d83c14d",
	"email": "teste@mail.com",
	"name": "teste1",
	"phone": "11111",
	"isActive": true,
	"isAdm": false,
	"updatedAt": "2023-06-03T00:53:03.000Z",
	"createdAt": "2023-06-03T00:47:52.000Z"
}
```


### Deletar usuario (ID do usuario na url) .

```json
{}
```
### A resposta terá o seguinte formato:


```json
{}
```

### Pegar dados do usuario com a API GitHub .

```json
{"code" : "84a57096698d3a4724c9"}
```
### A resposta terá o seguinte formato:


```json
{
	"login": "UserTestBackENd78854175647",
	"id": 106695752,
	"node_id": "U_JKhdjHgdmJ",
	"avatar_url": "https://avatars.githubusercontent.com/u/106695752?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/UserTestBackENd78854175647",
	"html_url": "https://github.com/UserTestBackENd78854175647",
	"followers_url": "",
	"following_url": "",
	"gists_url": "",
	"starred_url": "",
	"subscriptions_url": "",
	"organizations_url": "",
	"repos_url": "",
	"events_url": "",
	"received_events_url": "",
	"type": "User",
	"site_admin": false,
	"name": "Back End",
	"company": null,
	"blog": "",
	"location": null,
	"email": null,
	"hireable": null,
	"bio": "Back End Developer",
	"twitter_username": null,
	"public_repos": 0,
	"public_gists": 0,
	"followers": 0,
	"following": 0,
	"created_at": "2022-06-01T17:14:47Z",
	"updated_at": "2023-05-28T13:14:41Z",
	"private_gists": 0,
	"total_private_repos": 0,
	"owned_private_repos": 0,
	"disk_usage": 11982,
	"collaborators": 0,
	"two_factor_authentication": false,
	"plan": {
		"name": "free",
		"space": 986566999,
		"collaborators": 0,
		"private_repos": 10000
	}
}
```

### Armazenar arquivos .csv no banco de dados  .

```json
arquivo .csv
```
### A resposta terá o seguinte formato:


```json
{}
```

### Pegar dados do banco de dados da tabelo Person  .

```json
{}
```
### A resposta terá o seguinte formato:


```json
{[{"id":"f95ae83d-2378-41fa-87d9-1164d8a92369","nome":"Gael Davi Pedro Henrique Cavalcanti","idade":"62","cpf":"25201997333","rg":"253080769","data_nasc":"05/01/1961","sexo":"Masculino","signo":"Capricórnio","mae":"Maria Giovanna","pai":"Geraldo Filipe Cavalcanti","email":"gael.davi.cavalcanti@said.adv.br","senha":"$2a$10$fnXEJQMcJpt4JPjT8QL8NuJjTTEXojLG6wvmutSWuSG7MyEn6GeD2","cep":"29130236","endereco":"Rua Doze","numero":"392","bairro":"Centro","cidade":"Viana","estado":"ES","telefone_fixo":"2739595228","celular":"27999630298","altura":"1,77","peso":"52","tipo_sanguineo":"B+","cor":"roxo"},{"id":"30956f9d-6505-4581-9f39-d303a4f0c94b","nome":"Heloisa Adriana Mariane Teixeira","idade":"73","cpf":"50008924376","rg":"311846671","data_nasc":"21/02/1950","sexo":"Feminino","signo":"Peixes","mae":"Alícia Stefany Patrícia","pai":"Cauã Sebastião Teixeira","email":"heloisa.adriana.teixeira@marketingvale.com.br","senha":"$2a$10$J2HTfDePnxnKUDnjCPCp..pEaopk.A6894uYmsvKIJOpWHIaD6z6m","cep":"78552145","endereco":"Avenida dos Jequitibás","numero":"801","bairro":"Jardim das Violetas","cidade":"Sinop","estado":"MT","telefone_fixo":"6626079658","celular":"66986126473","altura":"1,65","peso":"68","tipo_sanguineo":"B-","cor":"preto"},{"id":"8873478b-bc8b-4ba0-b2b7-3daf72f0030b","nome":"Marcos Nathan Thiago Aragão","idade":"63","cpf":"26930972584","rg":"234473952","data_nasc":"18/02/1960","sexo":"Masculino","signo":"Aquário","mae":"Aurora Isis","pai":"Antonio Gustavo Aragão","email":"marcos.nathan.aragao@mpcnet.com.br","senha":"$2a$10$5WPtyQfVdioSgj5wS6AKm.MgEqk0KQh/9dAzAknBYmU58DN2MnLku","cep":"77006558","endereco":"Quadra 502 Norte Rua 4 B","numero":"973","bairro":"Plano Diretor Norte","cidade":"Palmas","estado":"TO","telefone_fixo":"6338183827","celular":"63986446330","altura":"1,67","peso":"58","tipo_sanguineo":"AB-","cor":"laranja"},{"id":"b7eac5ab-1dae-4688-8331-b4640b92feb8","nome":"Márcio Igor da Costa","idade":"76","cpf":"95494530817","rg":"311068510","data_nasc":"19/01/1947","sexo":"Masculino","signo":"Capricórnio","mae":"Francisca Ester Clarice","pai":"Nelson Bento da Costa","email":"marcio_dacosta@machina8.com.br","senha":"$2a$10$IF4mJ0auJ4J7kxj8caYEqe93pM9i3l8r/m58GC5H5hMgwhnhnLeTK","cep":"72315107","endereco":"Quadra QR 515 Conjunto 7","numero":"273","bairro":"Samambaia Sul (Samambaia)","cidade":"Brasília","estado":"DF","telefone_fixo":"6126734706","celular":"61987064326","altura":"1,62","peso":"79","tipo_sanguineo":"B-","cor":"amarelo"},{"id":"55ac9905-bf28-4e71-a544-4909b4f871af","nome":"Isabelly Elisa da Mata","idade":"53","cpf":"65380513085","rg":"501052689","data_nasc":"05/05/1970","sexo":"Feminino","signo":"Touro","mae":"Raquel Raquel Adriana","pai":"Gael José da Mata","email":"isabellyelisadamata@prositeweb.com.br","senha":"$2a$10$.ZNi4tJ3qP6Kb/GK4rp50u26a8I02Ch2Xpa8.TgbwuqIfXtnrhLrC","cep":"77814290","endereco":"Rua Bandeirantes","numero":"505","bairro":"Loteamento de Fátima","cidade":"Araguaína","estado":"TO","telefone_fixo":"6339568095","celular":"63991889270","altura":"1,84","peso":"45","tipo_sanguineo":"A+","cor":"vermelho"},{"id":"29182f5a-45cd-4bb5-9845-144fb8618543","nome":"Rayssa Sara Ribeiro","idade":"46","cpf":"32736966643","rg":"455080136","data_nasc":"05/05/1977","sexo":"Feminino","signo":"Touro","mae":"Manuela Marcela","pai":"Lucca Mário Ribeiro","email":"rayssa_ribeiro@proxion.com.br","senha":"$2a$10$Y3zCXafT6vtG6fauS9bFlOnWRMO8DH6bNblGWEpvlLIflr4G1kW0C","cep":"45077000","endereco":"Avenida Brumado","numero":"474","bairro":"Zabelê","cidade":"Vitória da Conquista","estado":"BA","telefone_fixo":"7735795669","celular":"77994191459","altura":"1,70","peso":"81","tipo_sanguineo":"AB-","cor":"preto"},{"id":"a63694d6-1d1d-456d-85be-5bf19d724e3d","nome":"Raimundo Márcio Paulo Almada","idade":"53","cpf":"86998553030","rg":"437824524","data_nasc":"03/05/1970","sexo":"Masculino","signo":"Touro","mae":"Débora Milena","pai":"Raimundo Gustavo Almada","email":"raimundo_almada@jetstar.com.br","senha":"$2a$10$Q2r/RItIw4.adxyeZvl.8uEXpGNK4X1IwpvFJQ4m.lAvJ1my.nuoe","cep":"69315024","endereco":"Travessa Rio Quinó","numero":"728","bairro":"Professora Araceli Souto Maior","cidade":"Boa Vista","estado":"RR","telefone_fixo":"9537734696","celular":"95989347991","altura":"1,63","peso":"94","tipo_sanguineo":"O+","cor":"verde"},{"id":"f7f2cc95-9c81-413e-a5cb-2ad5d2b003b1","nome":"Tereza Antônia Fernandes","idade":"57","cpf":"86200937117","rg":"294828692","data_nasc":"20/01/1966","sexo":"Feminino","signo":"Capricórnio","mae":"Sophia Kamilly","pai":"Benjamin Roberto Fernandes","email":"tereza_antonia_fernandes@p4ed.com","senha":"$2a$10$7yXl5dAaHp5GYIokKk6AcusjlklTgxthARyHYSnrSlUGC8f0SFEm2","cep":"59114150","endereco":"Rua João Paulo II","numero":"408","bairro":"Nossa Senhora da Apresentação","cidade":"Natal","estado":"RN","telefone_fixo":"8428008568","celular":"84989691920","altura":"1,83","peso":"75","tipo_sanguineo":"B-","cor":"azul"},{"id":"6c03810f-22c9-4e6b-a81e-9a5f6cfa1304","nome":"Kamilly Sophia Souza","idade":"39","cpf":"95778789386","rg":"215016579","data_nasc":"19/05/1984","sexo":"Feminino","signo":"Touro","mae":"Laura Emily","pai":"Isaac Rafael Thiago Souza","email":"kamilly.sophia.souza@escolajardim.com.br","senha":"$2a$10$6Aewa/H5t9.B1DlJMw0X1uhC94tUOsP66eUsDr7rSftE4Wh2j6da.","cep":"59141820","endereco":"Rua Manoel Leopoldo","numero":"844","bairro":"Rosa dos Ventos","cidade":"Parnamirim","estado":"RN","telefone_fixo":"8436306307","celular":"84994158187","altura":"1,55","peso":"58","tipo_sanguineo":"AB-","cor":"roxo"},{"id":"61d5ea61-02bc-4426-af16-185421eef4dc","nome":"Raimundo Davi Luan da Cruz","idade":"34","cpf":"90731611004","rg":"483237073","data_nasc":"06/03/1989","sexo":"Masculino","signo":"Peixes","mae":"Raquel Sabrina","pai":"André Anderson Rafael da Cruz","email":"raimundo_dacruz@cladm.com.br","senha":"$2a$10$AO.SNFkuQZl2QeMRsZ8siueE6HMGWp0Z3pPJlXvTpbe4/.X08WYIK","cep":"68909521","endereco":"Alameda Nona","numero":"203","bairro":"Boné Azul","cidade":"Macapá","estado":"AP","telefone_fixo":"9638452847","celular":"96995629641","altura":"1,62","peso":"60","tipo_sanguineo":"AB-","cor":"laranja"},{"id":"e77b80f5-037e-46f9-acc8-8952bc3350ca","nome":"Gael Bryan Lorenzo Moreira","idade":"46","cpf":"35417147001","rg":"232679472","data_nasc":"10/05/1977","sexo":"Masculino","signo":"Touro","mae":"Rebeca Valentina","pai":"Felipe Daniel Moreira","email":"gael_bryan_moreira@pp33.com.br","senha":"$2a$10$lG6tSvkekhGqdKAVnqLl3ej1iLWAwLV5kKEl8lJDAT8NFs38phzUm","cep":"13345812","endereco":"Avenida Manoel Ruz Peres","numero":"348","bairro":"Jardim Hubert","cidade":"Indaiatuba","estado":"SP","telefone_fixo":"1927317239","celular":"19993450839","altura":"1,67","peso":"63","tipo_sanguineo":"A-","cor":"verde"},{"id":"5664fd6a-c782-4be1-a47e-9b256c1d31ba","nome":"Antonio Jorge Anthony Pereira","idade":"72","cpf":"14042568572","rg":"219216897","data_nasc":"16/01/1951","sexo":"Masculino","signo":"Capricórnio","mae":"Andrea Juliana","pai":"Paulo Gustavo Miguel Pereira","email":"antonio_pereira@bseletronicos.com.br","senha":"$2a$10$xJTx4tPmwitmVW.GwAONueC22gtCorYWP9UR1fImAfp3IOCv8HGb6","cep":"76906736","endereco":"Rua Rio Machado","numero":"282","bairro":"Colina Park II","cidade":"Ji-Paraná","estado":"RO","telefone_fixo":"6939948107","celular":"69994883908","altura":"1,76","peso":"82","tipo_sanguineo":"O-","cor":"preto"},{"id":"78f73fb0-65a1-4ab1-b895-f9249e0337fa","nome":"Ricardo Márcio Pedro Almeida","idade":"31","cpf":"70528032593","rg":"247061633","data_nasc":"01/02/1992","sexo":"Masculino","signo":"Aquário","mae":"Isabel Lavínia","pai":"Levi Julio Eduardo Almeida","email":"ricardo.marcio.almeida@officetectecnologia.com.br","senha":"$2a$10$PCtzPBf/Jpd85bhob3ZVvukKz.Is2Cf0tv1aUlYZz/GuQzUTR1.ny","cep":"76962081","endereco":"Avenida Belo Horizonte","numero":"579","bairro":"Novo Horizonte","cidade":"Cacoal","estado":"RO","telefone_fixo":"6929922058","celular":"69987177838","altura":"1,81","peso":"102","tipo_sanguineo":"A-","cor":"roxo"},{"id":"2468d769-58be-4657-91a0-8443c509d5d0","nome":"Cláudio Paulo Vieira","idade":"23","cpf":"92792663146","rg":"120421392","data_nasc":"11/02/2000","sexo":"Masculino","signo":"Aquário","mae":"Regina Tânia Caroline","pai":"Carlos Eduardo Felipe Noah Vieira","email":"claudio_vieira@dominiozeladoria.com.br","senha":"$2a$10$Z7JcoUATg5Yw93NbxvXVSu/cOiq2BK.rpPqR8mOgw8QcTzRzIYeWC","cep":"60761785","endereco":"Rua Vicente Bertoldo","numero":"565","bairro":"Mondubim","cidade":"Fortaleza","estado":"CE","telefone_fixo":"8538998816","celular":"85986672779","altura":"2,00","peso":"72","tipo_sanguineo":"AB+","cor":"verde"},{"id":"594d79a3-d13a-492d-a5bc-a103fb5098e9","nome":"João Hugo Joaquim Dias","idade":"55","cpf":"97663701410","rg":"211693170","data_nasc":"27/05/1968","sexo":"Masculino","signo":"Gêmeos","mae":"Emilly Fátima","pai":"André Anderson Dias","email":"joao_dias@ferplast.com.br","senha":"$2a$10$t/ZGCu0757cQ6SIh6fDVeutIElDSQIuU7.xkN/CCPnXTR95Vg5R9O","cep":"74891100","endereco":"Rua VB 10","numero":"815","bairro":"Residencial Vale das Brisas","cidade":"Goiânia","estado":"GO","telefone_fixo":"6228542347","celular":"62983421263","altura":"1,67","peso":"89","tipo_sanguineo":"O+","cor":"vermelho"},{"id":"a46aa3d1-bbed-4a49-bf8c-926a6a486466","nome":"Manuel Martin Santos","idade":"74","cpf":"38617470224","rg":"370812219","data_nasc":"25/04/1949","sexo":"Masculino","signo":"Touro","mae":"Silvana Sophie Ana","pai":"Igor Severino Rodrigo Santos","email":"manuel_martin_santos@br.live.com","senha":"$2a$10$so2cG4kqpjrKH4eLcmQe6u06W.Dgs6IwRSScUv3BFZkCmrkbNu5yG","cep":"72920445","endereco":"Quadra Quadra 80A","numero":"498","bairro":"Jardim da Barragem IV","cidade":"Águas Lindas de Goiás","estado":"GO","telefone_fixo":"6126986442","celular":"61995297861","altura":"1,97","peso":"86","tipo_sanguineo":"AB-","cor":"vermelho"},{"id":"edec3cf9-907d-462b-8926-8835b1b4945c","nome":"Sophie Mariana Bianca Araújo","idade":"39","cpf":"97940665162","rg":"135427575","data_nasc":"27/04/1984","sexo":"Feminino","signo":"Touro","mae":"Sueli Kamilly","pai":"Joaquim Gabriel Araújo","email":"sophie-araujo77@agltda.com.br","senha":"$2a$10$wvl76e6EBCckS60blF0ubOmC9zf5i6aqIzKTVn2Idn4qT6B4OSUFi","cep":"09860130","endereco":"Rua Lázaro Rosa","numero":"155","bairro":"Independência","cidade":"São Bernardo do Campo","estado":"SP","telefone_fixo":"1128443323","celular":"11989055254","altura":"1,52","peso":"51","tipo_sanguineo":"AB+","cor":"roxo"},{"id":"fd93f444-e773-4e46-aba9-2773bbc9d50d","nome":"Manuela Priscila Clarice Ramos","idade":"78","cpf":"01910706965","rg":"242391205","data_nasc":"06/01/1945","sexo":"Feminino","signo":"Capricórnio","mae":"Luciana Luiza Luzia","pai":"Luan José Ramos","email":"manuelapriscilaramos@policiapenal.com","senha":"$2a$10$4KS.6wfB0llmjL9mYOum/urLFMXyrCTbPxvB9cYgyKMjj61jXfPje","cep":"59068680","endereco":"Rua Divinolândia","numero":"971","bairro":"Pitimbu","cidade":"Natal","estado":"RN","telefone_fixo":"8428983318","celular":"84988127397","altura":"1,64","peso":"83","tipo_sanguineo":"AB+","cor":"vermelho"},{"id":"279d1152-b456-42cf-a084-e6350d9404fd","nome":"Patrícia Kamilly Raimunda da Silva","idade":"63","cpf":"73339200971","rg":"137736186","data_nasc":"25/03/1960","sexo":"Feminino","signo":"Áries","mae":"Cristiane Sebastiana Tereza","pai":"Benjamin Gael da Silva","email":"patricia_dasilva@ipek.net.br","senha":"$2a$10$x2VCR.N19ooQaUBpS/8HbeONNXP6WX410sdjeZUK7REWn5XHBOvzu","cep":"69090701","endereco":"Travessa Copacabana","numero":"484","bairro":"Cidade Nova","cidade":"Manaus","estado":"AM","telefone_fixo":"9236531942","celular":"92997396308","altura":"1,57","peso":"79","tipo_sanguineo":"AB+","cor":"roxo"},{"id":"3efeb667-970c-4671-a502-320695a456d9","nome":"Isabelle Luzia Analu Duarte","idade":"23","cpf":"65142169948","rg":"118609683","data_nasc":"21/04/2000","sexo":"Feminino","signo":"Touro","mae":"Mariana Nair","pai":"Mateus Marcelo Emanuel Duarte","email":"isabelle_duarte@ipmmi.org.br","senha":"$2a$10$7/q1UaCK7VWSRXC.aumqWepFL691aZ0Qa7wtwbgyOHyh9kkWHYttC","cep":"77018490","endereco":"Quadra 1005 Sul Alameda 5","numero":"751","bairro":"Plano Diretor Sul","cidade":"Palmas","estado":"TO","telefone_fixo":"6325948923","celular":"63986208183","altura":"1,76","peso":"67","tipo_sanguineo":"O+","cor":"amarelo"}]}
```


Caso tenha qualquer duvida sobre a aplicaçao não hesite em me procurar 
email: marciogabrieloficial@hotmail.com
wpp/telefone: +55 21 98071-3406
linkedin: https://www.linkedin.com/in/marciocalenzo/
