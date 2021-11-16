import { Component} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent{

  movieList:string[] = ["Life of Pie","The incredibles","Minions","Avengers"]

  watchedList:string[]=["The Hounted","Bahubali"]
  movie:string=""

  onSelect(watchedMovie:string):void{
     this.movie=watchedMovie
     this.watchedList.push(this.movie)
     this.movieList = this.movieList.filter(e=>e!=this.movie);
     console.log(this.movie)
  }

  

  


}
