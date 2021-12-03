import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.nasa.gov/sites/default/files/thumbnails/image/halloween_sun_2014_2k.jpg';
  image2 = 'https://www.nasa.gov/sites/default/files/thumbnails/image/halloween_sun_2014_2k.jpg';
  image3 = 'https://www.nasa.gov/sites/default/files/thumbnails/image/halloween_sun_2014_2k.jpg';

  constructor() { }

  ngOnInit() {
  }

}