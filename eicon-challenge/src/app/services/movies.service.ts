import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // Caso queira testar a aplicação é necessário trocar essa variável da Api token
  apiToken = '7b9cf534a88ff61e918279f09548b7c4';

  url = 'http://api.themoviedb.org/3/movie/550?api_key='+this.apiToken;
  urlTwo = 'http://api.themoviedb.org/3/movie/508442?api_key='+this.apiToken;
  urlThr = 'http://api.themoviedb.org/3/movie/129?api_key='+this.apiToken;
  urlFou = 'http://api.themoviedb.org/3/movie/354912?api_key='+this.apiToken;
  urlFiv = 'http://api.themoviedb.org/3/movie/337401?api_key='+this.apiToken;


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Movie[]>(this.url);
  }

  listTwo(){
    return this.http.get<any[]>(this.urlTwo);
  }

  listThr(){
    return this.http.get<any[]>(this.urlThr);
  }

  listFou(){
    return this.http.get<any[]>(this.urlFou);
  }

  listFiv(){
    return this.http.get<any[]>(this.urlFiv);
  }
}
