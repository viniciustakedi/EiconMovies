import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Array<any>

  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {
    this.listar();
    console.log(this.listar)
  }

  listar() {
    this.movies.listar().subscribe(item => this.movies = item);
    }

}
