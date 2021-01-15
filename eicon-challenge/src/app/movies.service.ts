import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'http://api.themoviedb.org/3/movie/550?api_key=7b9cf534a88ff61e918279f09548b7c4';


  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}`)
  }
}
