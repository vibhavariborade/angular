import { Component} from '@angular/core';
import { IMovie } from 'src/app/utility/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  movieName:string="";

  movies:IMovie[]=[
    {
      name:"Life of Pie",
      image:"https://th.bing.com/th/id/R.d07694032c16e811f00d5a6ee14f09b3?rik=nM9vn6dbK9sX2A&riu=http%3a%2f%2f19twentythree.com%2fwp-content%2fuploads%2f2013%2f03%2fWatch-Life-of-Pi-Online-Download-Movie.jpg&ehk=v2jYyhgnByyLJtQBAvGKteWnWVKCe7ZbeZiGq12DV%2bg%3d&risl=&pid=ImgRaw&r=0",
      director:"Ang Lee",
      releaseDate:new Date("2012-08-10")
    },
    {
      name:"Minions",
      image:"https://th.bing.com/th/id/R.7faa689a500112d252ed243ed5e926d1?rik=GI5Xu%2fI6ElvsUA&riu=http%3a%2f%2fwww.100hdwallpapers.com%2fwallpapers%2f2880x1800%2fminions_comedy_movie-widescreen_wallpapers.jpg&ehk=ExzWE2UsKjsG4HoOahNG894kdpx9xh7vaS7CbYEu6yg%3d&risl=&pid=ImgRaw&r=0",
      director:"Kyle Balda",
      releaseDate:new Date("2015-10-17")
    },
    {
      name:"Avengers",
      image:"https://th.bing.com/th/id/OIP.0pC1nFRE0CPysBvsFmmGXwHaE8?pid=ImgDet&rs=1",
      director:"Stan Lee",
      releaseDate:new Date("2012-04-27")
    },
    {
      name:"Incredibles",
      image:"https://th.bing.com/th/id/OIP.XQSAAkdtqy4Y4d4dujRLfwHaNL?pid=ImgDet&rs=1",
      director:"Brad Bird",
      releaseDate:new Date("2004-12-17")
    }
  ]
  
}
