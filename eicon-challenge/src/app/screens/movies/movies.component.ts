import { Component, OnInit } from '@angular/core';
import { SearchMoviesService } from 'src/app/services/search-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css', '../../../bootstrap-global/style/bootstrap.css']
})
export class MoviesComponent implements OnInit {

  searchmovies: any[];
  sTitle: any;
  sOverview: any; 
  sImage: any; 
  sRelease_date: any;
  sOriginal_language: any;
  sId: any;

  constructor(private service: SearchMoviesService) { }

  ngOnInit(): void {
    this.service.listmovies().subscribe
    (item => {
      this.searchmovies = item;

      var movie = Object.values(item)[1][0] as any;
      var title = Object.values(movie)[10] as any;
      var release_date = Object.values(movie)[9] as any;
      var image = Object.values(movie)[8] as any;
      var overview = Object.values(movie)[6] as any;
      var id= Object.values(movie)[3] as any;

      this.sTitle = title;
      this.sOverview = overview;
      this.sImage = image;
      this.sRelease_date = release_date;
      this.sId = id;
      
      console.log(image);
      console.log(item);
    });
  }

}
