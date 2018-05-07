import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Jsonp} from '@angular/http';
@Injectable()
export class FlickrService {

  constructor(private _jsonp: Jsonp) {}

  getFlickrRecentPhotos$(): Observable<any> {
    let flickrApiUrl = 'https://api.flickr.com/services/rest/?method=';
    flickrApiUrl += 'flickr.photos.search&api_key=c4e2f731926eefa6fe1d3e9c2c9f9449&tags=';
    flickrApiUrl += 'chocolate&per_page=5&page=2&format=json&jsoncallback=JSONP_CALLBACK';
    return this._jsonp.request(flickrApiUrl);
  }
}
