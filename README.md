## Cosumindo API The movie DB com AngularJs | Consuming API The movie DB with AngularJs
 *Language/Idioma:*
cen-US _read.me in english soon_

## O que é essa aplicação? 
Essa aplicação é um website construido com o framework AngularJs, nossa plataforma se chama *Eicon Movie* e com ela é possível pesquisar por qualquer filme e ver os detalhes como:
- Despesas(Budget) :dollar:
- Receita(Revenue) :moneybag:
- Compania de produção(Production company). :office:

O website está com duas telas, uma home e uma para a busca de filmes,  ambas completamente **responsivas**.

Você pode pesquisar por qualquer filme e pode ver mais informações clicando na imagem ou no título do mesmo.

### Idioma do site...
Eu prezei por fazer um site em inglês por achar que combinaria melhor com o sistema, mas não se preocupe pois você pode pesquisar o filme em português que ele irá buscar e trazer o mesmo resultado.  

### Dificuldades!
Eu sou super acostumado com o framework React, e aprender um outro framework relativamente novo que nem o Angular é uma tarefa difícil, porém, não ~~impossível~~, tive cinco dias para aprender e executar essa tarefa, então, se meu código não estiver super bonitinho ou a forma que fiz não estiver a mais eficiente pode ser por isso, desse modo, vou tentar ir aprimorando.

## Como baixar e fazer o projeto funcionar?
Vamos dividir o processo em 2 partes e cada parte terá seus passos então vamos lá!

### Primeira parte
**Baixar o framework Angular, o NodeJs e este repositório do github.**
1. Baixar NodeJs no seu computador.
Para utilizar frameworks em JavaScript precisamos baixar o NodeJs, caso você não tenha na sua máquina é só clicar no link... https://nodejs.org/dist/v15.6.0/node-v15.6.0-x64.msi ... após clicar ele já iniciará o download automático, para instalar não tem segredo é só apertar *Next* quantas vezes for preciso e depois apertar *finish* e prontinho.
Para conferir se foi instalado corretamente abra o console/terminal/cmd e escreva/cole essa linha de comando...
```
node --version
``` 
...e se aparecer algo como...
```
v12.16.3
````
... então deu tudo certo!

2. Baixar AngularJs em seu computador.
Vamos utilizar o instalador de pacotes NPM, abra um terminal/console/cmd e execute essa linha de comando:
```
npm install -g @angular/cli
```
Após baixar confira se o Angular foi instalado com o seguinte comando...
```
ng --version
````
...e se retornar algo como...
```
Angular CLI: 11.0.7
Node: 12.16.3
OS: win32 x64
```
...então belezinha vamos para o próximo passo.

3. Clonar este repositório do git. 
Em um console/cmd em modo bash cole o seguinte comando:
```
git clone https://github.com/viniciustakedi/EiconMovies.git
```
...espere baixar tudo e quando der 100% vá para o próximo passo.

4. Entrar na pasta do projeto.
No mesmo console insira o comando cd até você chegar na pasta **eicon-challenge**:
```
cd EiconMovies/eicon-challenge/
```

5. Dar o comando para rodar o app no localhost.
Quando você deu o ```git clone``` você deve ter achado que o repositório está meio pesado ou algo assim não é mesmo? Eu já subi o projeto com todos os aquivos até o */node_modules*, justamente para ficar mais fácil a utilização do projeto. Então basta dar o comando no console para abrir o projeto em um localhost:
```
ng serve --o
```
...com isso o projeto deverá abrir em seu navegador padrão, caso não abra copie o link do terminal, que deve ser parecido com esse aqui: ```http://localhost:4200/```

### Segunda parte
**Criar conta no The Movie DB para ter acesso ao banco de dados, e trocar as chaves de api (api_key (v3 auth)) na aplicação usando vscode ou qualquer editor de texto, caso já tenha conta no TMDb e tenha uma api key (v3 auth) pule para o passo 7**.
1. Criar conta no The movie db. Entre no site https://www.themoviedb.org/ e clique em **Join TMDb** para se cadastrar no site.
2. Crie sua conta e confirme no **Email**.
3. Faça o login no site clicando em **Login**.
4. Após logado, no canto superior direito(no menu) clique na sua **foto/letra de perfil** e vá na opção de **configurações ou settings** 
5. No menu lateral escrito **definições ou setting** vá em **API**.
6. Crie uma chave de API, indo em **Directory** e depois em **Create application** você deverá criar um aplicativo qualquer, isso só é necessário para pegar uma chave de api (v3 auth).
7. Copie a sua chave de API (v3 auth) localizada na parte de **Overview** (Página do passo 5).
8. Abra o código em algum editor de texto e vá no arquivo **movies.service.ts** localizado em...
```
src/app/services/movies.service.ts
```
... na linha 11 altere a **string api_key = '';** para a sua chave de api, tem um comentário indicando.
```
10 -  //ALTERE AQUI A API KEY (v3 AUTH)
11 -  api_key = '7b9cf534a88ff61e...'; //três pontos só para não mostrar minha chave
```

9. Última alteração. Agora vá no arquivo **movies.component.ts** localizado em...
```
src/app/screens/movies/movies.component.ts
```
... na linha 13 altere a **string api_key = '';** para a sua chave de api, tem um comentário indicando.
```
13 -  //ALTERE AQUI A API KEY (v3 AUTH)
14 -  api_key = '7b9cf534a88ff61e...'; //três pontos só para não mostrar minha chave
```

10. Caso tenha fechado ou é necessário reiniciar a aplicação execute o comando...
```
ng serve --o
```
... no console/terminal/cmd para executar a aplicação e abrir no localhost, aproveite o website e pesquise seus filmes!! *Olhe a sessão de bugs abaixo*

## BUGS da aplicação: 
Aqui estão alguns bugs que eu percebi durante o desenvolvimento que serão consertados em breve.
**Se a caixinha do bug está marcada quer dizer que o bug foi corrigido**
-  [x] Buscas que retornam menos de 2 filmes bugam a aplicação e é necessário reiniciar (FIX)
-  [ ] Alguns filmes estão bugando quando é solicitado para ver mais informações sobre eles, podendo:
- Não abrir o modal
- Ficar em Tela preta com opacidade
- Não poder ver mais informações de outros filmes (neste caso é necessário recarregar a página)
- Um exeplo deles é o: **Batman: Soul of the Dragon**.


## Recomendações de pesquisa:
- Avengers
- Jumanji
- Cars (carros animação pixar)
- Maze Runner
- Divergent

### Teste a versão responsiva está bem legal.
  
