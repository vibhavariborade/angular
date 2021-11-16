import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-photo',
  templateUrl: './fav-photo.component.html',
  styleUrls: ['./fav-photo.component.scss']
})
export class FavPhotoComponent implements OnInit {

  URL:string[]=["https://th.bing.com/th/id/R.0f20d49ab2bf237348c02f91f4ceb5ac?rik=fK15xyWOFpQY6g&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2016%2f04%2fNature-Green-cascading-waterfall-HD-Wallpaper-for-Desktop-high-contrast-1600x1200.jpg&ehk=FJXGSC44s99ONiRIS4l1jrJaelF4vONJm%2bBFoqlmMR8%3d&risl=&pid=ImgRaw&r=0",
"https://th.bing.com/th/id/R.526c5efdea4a9e7364d74ee4b909bbe8?rik=63dJ8RpIF%2fpRng&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fAutumn-River-Wallpaper-1920x1440.jpg&ehk=b3mXy7TZjSponEwOuzEZA3LhJrYCjrfyuMPPon0%2fk7U%3d&risl=&pid=ImgRaw&r=0",
"https://10wallpaper.com/wallpaper/1152x864/1412/australia_evening_coast-Scenery_HD_Wallpaper_1152x864.jpg"
]

  constructor() { }

  ngOnInit(): void {
  }

}
