import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../flickr.service';

@Component({
  selector: 'app-demo-carousel',
  templateUrl: './demo-carousel.component.html',
  styleUrls: ['./demo-carousel.component.scss']
})
export class DemoCarouselComponent implements OnInit {

  constructor(private flickrService: FlickrService) { }
  photos: Array<any> = [];
  noPause = true;
  ngOnInit() {
    this.flickrService
      .getFlickrRecentPhotos$()
      .subscribe(this.getRecentFlickrPhotos.bind(this), this.catchError.bind(this));
  }

  private getRecentFlickrPhotos(photoList: any) {
    this.photos = photoList._body.photos.photo;
  }

  private catchError(err) {
      const message = `Unknown error, text: ${err.message}`;

  }
}
