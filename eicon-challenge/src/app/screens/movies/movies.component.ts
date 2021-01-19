import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css', '../../../bootstrap-global/style/bootstrap.css']
})
export class MoviesComponent implements OnInit {

  // ALTERE AQUI a API Key (v3 auth)
  api_key = '7b9cf534a88ff61e918279f09548b7c4';

  // Dados dos filmes que serão passados para o front-end opcao para 3 resultados
  // Resultado 1
  searchmovies: any;
  sTitle: any;
  sOverview: any;
  sImage: any;
  sRelease_date: any;
  sOriginal_language: any;
  sVote_average: any;
  sBackdrop: any;
  sId: any;
  // Definições de dados para o modal
  movie_by_id: any;
  budget_modal: any;
  genres_modal: any;
  popularity_modal: any;
  production_company_modal: any;
  origin_country_modal: any;
  revenue_modal: any;
  runtime_modal: any;
  status_modal: any;
  tagline_modal: any;

  // Resultado 2
  searchmoviesTwo: any;
  sTitleTwo: any;
  sOverviewTwo: any;
  sImageTwo: any;
  sRelease_dateTwo: any;
  sOriginal_languageTwo: any;
  sVote_averageTwo: any;
  sBackdropTwo: any;
  sIdTwo: any;
  // Definições de dados para o modal movie 2
  movie_by_id_Tw: any;
  budget_modal_Tw: any;
  genres_modal_Tw: any;
  popularity_modal_Tw: any;
  production_company_modal_Tw: any;
  origin_country_modal_Tw: any;
  revenue_modal_Tw: any;
  runtime_modal_Tw: any;
  status_modal_Tw: any;
  tagline_modal_Tw: any;

  // Resultado 3
  searchmoviesThr: any;
  sTitleThr: any;
  sOverviewThr: any;
  sImageThr: any;
  sRelease_dateThr: any;
  sOriginal_languageThr: any;
  sVote_averageThr: any;
  sBackdropThr: any;
  sIdThr: any;
  // Definições de dados para o modal movie 3
  movie_by_id_Th: any;
  budget_modal_Th: any;
  genres_modal_Th: any;
  popularity_modal_Th: any;
  production_company_modal_Th: any;
  origin_country_modal_Th: any;
  revenue_modal_Th: any;
  runtime_modal_Th: any;
  status_modal_Th: any;
  tagline_modal_Th: any;


  queryField = new FormControl(); //query para pegar a(s) palavra(s) que o usuário inseriu

  url1 = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.api_key + '&language=en-US&query=';
  url2 = '&page=1&include_adult=false';

  // Construtor pegando a propriedade HttpClient
  constructor(private http: HttpClient) { }

  // Função para dar request no banco de dados e buscar o filme inserido
  onSearch() {
    // if para verificação, caso o filme procurado seja null ou uma string vazia ele não procura
    if (this.queryField.value !== null && this.queryField.value !== "") {
      // método de requisição http, como se fosse um fetch
      this.http.get(this.url1 + this.queryField.value + this.url2).subscribe
        (item => {
          this.searchmovies = item;
          // Dados filme 1
          var movie = Object.values(item)[1][0] as any;
          var vote_average = Object.values(movie)[12] as any;
          var title = Object.values(movie)[10] as any;
          var release_date = Object.values(movie)[9] as any;
          var image = Object.values(movie)[8] as any;
          var overview = Object.values(movie)[6] as any;
          var original_language = Object.values(movie)[4] as any;
          var backdrop = Object.values(movie)[1] as any
          var id = Object.values(movie)[3] as any
          this.sVote_average = vote_average;
          this.sTitle = title;
          this.sRelease_date = release_date;
          this.sImage = image;
          this.sOverview = overview;
          this.sOriginal_language = original_language;
          this.sBackdrop = backdrop;
          this.sId = id;

          // Dados filme 2
          var movie = Object.values(item)[1][1] as any;
          var vote_average2 = Object.values(movie)[12] as any;
          var title2 = Object.values(movie)[10] as any;
          var release_date2 = Object.values(movie)[9] as any;
          var image2 = Object.values(movie)[8] as any;
          var overview2 = Object.values(movie)[6] as any;
          var original_language2 = Object.values(movie)[4] as any;
          var backdrop2 = Object.values(movie)[1] as any
          var id2 = Object.values(movie)[3] as any
          this.sVote_averageTwo = vote_average2;
          this.sTitleTwo = title2;
          this.sRelease_dateTwo = release_date2;
          this.sImageTwo = image2;
          this.sOverviewTwo = overview2;
          this.sOriginal_languageTwo = original_language2;
          this.sBackdropTwo = backdrop2;
          this.sIdTwo = id2;

          // Dados filme 3
          var movie = Object.values(item)[1][2] as any;
          var vote_average3 = Object.values(movie)[12] as any;
          var title3 = Object.values(movie)[10] as any;
          var release_date3 = Object.values(movie)[9] as any;
          var image3 = Object.values(movie)[8] as any;
          var overview3 = Object.values(movie)[6] as any;
          var original_language3 = Object.values(movie)[4] as any;
          var backdrop3 = Object.values(movie)[1] as any
          var id3 = Object.values(movie)[3] as any
          this.sVote_averageThr = vote_average3; //Dado Dos votos
          this.sTitleThr = title3; //Dado do titulo
          this.sRelease_dateThr = release_date3; //Dado data de lançamento
          this.sImageThr = image3; //capa do filme
          this.sOverviewThr = overview3; //A descrição do filme
          this.sOriginal_languageThr = original_language3;//Idioma oficial do filme
          this.sBackdropThr = backdrop3;
          this.sIdThr = id3;//Id do filme

          //Request movie 1
          var urlId1 = 'https://api.themoviedb.org/3/movie/' + this.sId + '?api_key=' + this.api_key + '&language=en-US';
          // Requisição HTTP para buscar o filme pelo id, assim temos mais informações
          if (this.sId !== '' && this.sId !== null) {
            this.http.get(urlId1).subscribe
              (item => {
                this.movie_by_id = item; //Declarando que item ficará armazenado na array movie_by_id

                // modal movie one
                var budget = Object.values(item)[3] as any;
                //pegar o genero principal
                var genres_array = Object.values(item)[4];
                var type_genres = Object.values(genres_array)[0];
                var genres = Object.values(type_genres)[1];

                var popularity = Object.values(item)[11];

                //Pegar o estudio e o pais de origem
                var production_companies_array = Object.values(item)[13];
                var production_companies = Object.values(production_companies_array)[0];
                var production_companies_name = Object.values(production_companies)[2];
                var production_companies_country = Object.values(production_companies)[3];

                var revenue = Object.values(item)[16];
                var runtime = Object.values(item)[17];
                var status = Object.values(item)[19];
                var tagline = Object.values(item)[20];

                this.budget_modal = budget; //Despezas com o filme
                this.genres_modal = genres; //Gênero principal do fulme
                this.popularity_modal = popularity; //Popularidade do filme
                this.production_company_modal = production_companies_name; //Nome do estudio 
                this.origin_country_modal = production_companies_country; // País de origem
                this.revenue_modal = revenue; //Receita gerada
                this.runtime_modal = runtime; //Tempo de execução
                this.status_modal = status; //Status do filme
                this.tagline_modal = tagline; //Slogan do filme
              });
          }

          var urlId2 = 'https://api.themoviedb.org/3/movie/' + this.sIdTwo + '?api_key=' + this.api_key + '&language=en-US';
          if (this.sIdTwo !== '' && this.sIdTwo !== null) {
            //Request movie 2
            // Requisição HTTP para buscar o filme pelo id, assim temos mais informações
            this.http.get(urlId2).subscribe
              (item => {
                this.movie_by_id_Tw = item
                //modal movie two
                var budgetTwo = Object.values(item)[3] as any;
                //pegar o genero principal
                var genres_arrayTwo = Object.values(item)[4];
                var type_genresTwo = Object.values(genres_arrayTwo)[0];
                var genresTwo = Object.values(type_genresTwo)[1];

                var popularityTwo = Object.values(item)[11];

                //Pegar o estudio e o pais de origem
                var production_companies_arrayTwo = Object.values(item)[13];
                var production_companiesTwo = Object.values(production_companies_arrayTwo)[0];
                var production_companies_nameTwo = Object.values(production_companiesTwo)[2];
                var production_companies_countryTwo = Object.values(production_companiesTwo)[3];

                var revenueTwo = Object.values(item)[16];
                var runtimeTwo = Object.values(item)[17];
                var statusTwo = Object.values(item)[19];
                var taglineTwo = Object.values(item)[20];

                this.budget_modal_Tw = budgetTwo; //Despezas com o filme
                this.genres_modal_Tw = genresTwo; //Gênero principal do fulme
                this.popularity_modal_Tw = popularityTwo; //Popularidade do filme
                this.production_company_modal_Tw = production_companies_nameTwo; //Nome do estudio 
                this.origin_country_modal_Tw = production_companies_countryTwo; // País de origem
                this.revenue_modal_Tw = revenueTwo; //Receita gerada
                this.runtime_modal_Tw = runtimeTwo; //Tempo de execução
                this.status_modal_Tw = statusTwo; //Status do filme
                this.tagline_modal_Tw = taglineTwo; //Slogan do filme
              });
          }


          var urlId3 = 'https://api.themoviedb.org/3/movie/' + this.sIdThr + '?api_key=' + this.api_key + '&language=en-US';
          if (this.sIdThr !== '' && this.sIdThr !== null) {
            // Requisição HTTP para buscar o filme pelo id, assim temos mais informações
            this.http.get(urlId3).subscribe
              (item => {
                this.movie_by_id_Th = item;
                //Pegar o estudio e o pais de origem
                //modal movie three
                var budgetThr = Object.values(item)[3] as any;

                //pegar o genero principal
                var genres_arrayThr = Object.values(item)[4];
                var type_genresThr = Object.values(genres_arrayThr)[0];
                var genresThr = Object.values(type_genresThr)[1];

                var popularityThr = Object.values(item)[11];
                var production_companies_arrayThr = Object.values(item)[13];
                var production_companiesThr = Object.values(production_companies_arrayThr)[0];
                var production_companies_nameThr = Object.values(production_companiesThr)[2];
                var production_companies_countryThr = Object.values(production_companiesThr)[3];

                var revenueThr = Object.values(item)[16];
                var runtimeThr = Object.values(item)[17];
                var statusThr = Object.values(item)[19];
                var taglineThr = Object.values(item)[20];

                this.budget_modal_Th = budgetThr; //Despezas com o filme
                this.genres_modal_Th = genresThr; //Gênero principal do fulme
                this.popularity_modal_Th = popularityThr; //Popularidade do filme
                this.production_company_modal_Th = production_companies_nameThr; //Nome do estudio 
                this.origin_country_modal_Th = production_companies_countryThr; // País de origem
                this.revenue_modal_Th = revenueThr; //Receita gerada
                this.runtime_modal_Th = runtimeThr; //Tempo de execução
                this.status_modal_Th = statusThr; //Status do filme
                this.tagline_modal_Th = taglineThr; //Slogan do filme
              });
          }

          // Consoles para teste de requisição de api
          // console.log(Object.values(movie)[12] as any);
          console.log(item);
        });
    }
  }


  // função para limpar o histórico automaticamente ao pesquisar
  onClear() {
    // movie 3
    this.sTitleThr = '';
    this.sVote_averageThr = '';
    this.sOriginal_languageThr = '';
    this.sOverviewThr = '';
    this.sImageThr = '';
    this.sRelease_dateThr = '';
    this.sIdThr = '';
    // movie 2
    this.sTitleTwo = '';
    this.sVote_averageTwo = '';
    this.sOriginal_languageTwo = '';
    this.sOverviewTwo = '';
    this.sImageTwo = '';
    this.sRelease_dateTwo = '';
    this.sIdTwo = '';

    // movie 1
    this.sTitle = '';
    this.sVote_average = '';
    this.sOriginal_language = '';
    this.sOverview = '';
    this.sImage = '';
    this.sRelease_date = '';
    this.sId = '';
  }

  ngOnInit(): void { }
}
