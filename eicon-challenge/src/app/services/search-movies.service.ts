import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchMovie } from './search-movies';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  apiToken = '7b9cf534a88ff61e918279f09548b7c4';
  url = 'https://api.themoviedb.org/3/search/movie?api_key='+this.apiToken+'&language=en-US&query=Avengers&page=1&include_adult=false';

  constructor(private http: HttpClient) { }

  listmovies(){
    return this.http.get<SearchMovie[]>(this.url)
  }
}
