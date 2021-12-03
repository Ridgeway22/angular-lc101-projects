import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.disney.com/", "https://www.nasa.gov/", "https://weather.com/weather/tenday/l/St.+Louis+MO?canonicalCityId=4b46df4aee4bb9786a30b0ae668c7333820c11e4d2b0b007c14eb0d59713b3e1"]
  constructor() { }

  ngOnInit() {
  }

}
