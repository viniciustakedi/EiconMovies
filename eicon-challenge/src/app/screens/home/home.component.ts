import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/services/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Pode ser usar para tipagem tanto o Movie[] quando o any
  movies: Movie[];
  moviesTwo: any;
  moviesThr: any;
  moviesFou: any;
  moviesFiv: Movie[];

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    // Filme estatico um
    this.service.list().subscribe
    (item => {
        this.movies = item
    });
    // Filme estatico dois
    this.service.listTwo().subscribe
    (item => {
        this.moviesTwo = item
    });
    // Filme estatico tres
    this.service.listThr().subscribe
    (item => {
        this.moviesThr = item
    });
    // Filme estatico quatro
    this.service.listFou().subscribe
    (item => {
        this.moviesFou = item
    });
    // Filme estatico cinco
    this.service.listFiv().subscribe
    (item => {
        this.moviesFiv = item
    });
  }
}
