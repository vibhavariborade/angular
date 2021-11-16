import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-links',
  templateUrl: './favourite-links.component.html',
  styleUrls: ['./favourite-links.component.scss']
})
export class FavouriteLinksComponent implements OnInit {

  links:[string,string][]=[["Google","www.google.com"],["Facebook","www.google.com"],["What's App","www.google.com"],]

  constructor() { }

  ngOnInit(): void {
  }

}
