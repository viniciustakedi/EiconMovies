## Cosumindo API The movie DB com AngularJs | Consuming API The movie DB with AngularJs :mount_fuji:
 *Language/Idioma:*
 - [x] pt-BR
-  [ ] en-US

## O que é essa aplicação? 
Essa aplicação é um website construido com o framework AngularJs, nossa plataforma se chama *Eicon Movie* e com ela é possível pesquisar por qualquer filme e ver os detalhes como:
- Despesas(Budget) :dollar:
- Receita(Revenue) :moneybag:
- Compania de produção(Production company). :office:

### Idioma do site...
Eu prezei por fazer um site em inglês por achar que combinaria melhor com o sistema, mas não se preocupe pois você pode pesquisar o filme em português que ele irá buscar e trazer o mesmo resultado.  

### Dificuldades!
Eu sou super acostumado com o framework React, e aprender um outro framework relativamente novo que nem o Angular é uma tarefa difícil, porém, não ~~impossível~~. Então se meu código não estiver super bonitinho ou a forma que fiz não estiver a mais eficiente pode ser por isso, desse modo, vou tentar ir aprimorando.

## Como baixar e fazer o projeto funcionar?
Vamos dividir por passos então vamos lá!
1. Baixar AngularJs em seu computador.
Vamos utilizar o instalador de pacotes NPM, abra um terminal/console/cmd e execute essa linha de comando:
```
npm install -g @angular/cli
```
Após baixar confira se o Angular foi instalador com o seguinte comando:
```
ng --version
````
e se retornar algo como...
```
Angular CLI: 11.0.7
Node: 12.16.3
OS: win32 x64
```
...então belezinha vamos para o próximo passo.

2. Clonar o repositório no git. 
Em um console/cmd em bash cole o seguinte comando: 
```
git clone https://github.com/viniciustakedi/EiconMovies.git
```
3. Entrar na pasta do projeto.
No mesmo console insira o comando cd até você chegar na pasta **EiconMovies\eicon-challenge**:
```
cd EiconMovies/eicon-challenge/
```
4. Dar o comando para rodar o app no localhost.
Quando você deu o ```git clone``` você deve ter achado que o arquivo está meio pesado ou algo assim não é mesmo? Eu já subi o projeto com todos os aquivos até o */node_modules*, justamente para ficar mais fácil a utilização do projeto. Então basta dar o comando no console para abrir o projeto em um localhost:
```
ng serve --o
```

