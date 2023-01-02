# api-aluschool 📚

### Considerações iniciais
_Antes de iniciar a documentação desta api, gostaria de escrever algumas considerações. Essa **API REST** foi feita inteiramente com o framework `Express.js` e com o **ORM** `sequelize` & `sequelize-cli` para as criações de modelos, migraçãos e sementes. Sobre a modelagem de dados, é algo bem simples pois o foco deste projeto é criar mais intimidade com o sequelize e treinar as implementações dos requisitos de usuário na aplicação! E a modelagem de dados não foi feita por mim, e sim pelo time da [Alura](https://www.alura.com.br/). Apenas peguei esse modelo pronto e fiz essa aplicação. Agora sim, podemos começar 🚀_

<hr/>

### 🗨 Vai usar? 
1. Baixe o projeto com o `git clone ...` ou em `.zip`.
2. Abra o terminal dentro da pasta do projeto e digite `npm install` para instalar o node_modules.
3. Rode o comando `npm start` e espere o servidor ficar online.
4. Antes de consumir a api, não se esqueça de ler sobre os `endpoints` ein. Obrigado e se divirta! 😁
> <small>by: VitorRT 💌<small/>

## Object-Relational Mapping (ORM)
Como dito ali em cima nas considerações iniciais, meu intuito é criar mais intimidade com as funcionalidades de uma ORM para o `node.js`, mas antes de mergulharmos de cabeça na api, é bom entender um pouco do conceito de uma ORM, prometo que vai ser rapidinho!

### Mapeando Objetos Para As Tabelas
_O [ORM](https://www.treinaweb.com.br/blog/o-que-e-orm) existe para curar a dor da impedância de dados._

_Você - **[ 'Como assim vitor?? Não entendi não cara!' ]**_
_Nas aplicações orientadas a objetos que utilizam um banco de dados relacional para armazenar as informações, existe um problema chamado de [impedância objeto-relacional](https://www.linkedin.com/pulse/imped%C3%A2ncia-objeto-relacional-marcelo-heitor-teixeira-1/?originalSubdomain=pt) que surgiu por causa das diferenças entre o modelo relacional e o modelo orientado a objetos. Resumindo, essa diferença causa esse problema._
_O ORM é uma técnica que resolve esse problema, que concilia esses dois modelos através do mapeamento das linhas para os objetos, e vice versa._
![modelo-orm](https://dkrn4sk0rn31v.cloudfront.net/2019/11/03082048/ORM-IMG.png)

Existe diversos ORM's para diversas linguagens, e utilizarei o mais famoso que se chama [Sequelize](https://sequelize.org/), ele é compatível com `javascript` moderno e `typescript` moderno!
<div>
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="drawing" width="30"/>
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="drawing" width="30"/>
<img src="https://www.luiztools.com.br/wp-content/uploads/2021/01/sequelize.png" alt="drawing" width="75"/>
<div/>

# Sobre o Projeto 🏫
A ideia do projeto consiste em criar um sistema para uma escola, as funcionalidades são:
* Criação de pessoa ( Aluno, Professor, etc...);
* Seleções de todas as pessoas cadastradas e de uma só pessoa cadastrada;
* Edição de uma pessoa cadastrada;
* Exclusão de uma pessoa cadastrada;
* Restauração de uma pessoa excluída;
O mesmo se aplica para Níveis, Matriculas e Turmas.

A modelagem de dados do projeto:
![modelagem-de-dados-aluschool](https://uploaddeimagens.com.br/images/004/281/430/full/modelagem_de_dados_aluschool.jpg?1672669210)


## Endpoints 🔚

Modelo   	| Endpoint			| Método			| Sobre	| BODY
  :---------: 	|    :------:			|     :-----:				|  :-----:	| :----:
Pessoas 		| **/pessoas**	| **_GET_**		|	Lista todas as pessoas cadastradas que não foram deletadas do sistema. | FALSE
Pessoas	 	| **/pessoas**	| **_POST_**		| Cadastra uma pessoa no banco de dados. Você precisa passar um json no corpo da requisão | TRUE
Pessoas	 	| **/pessoas/:id** | **_PUT_**	| Edita uma pessoa cadastrada no sistema. | TRUE
Pessoas	 	| **/pessoas/:id** |  **_DELETE_** | Deleta não permanentemente uma pessoa cadastrada do sistema. | FALSE


> A Documentação ainda está sendo feita 📝 <br/>  Projeto em Desenvolvimento... 🏗