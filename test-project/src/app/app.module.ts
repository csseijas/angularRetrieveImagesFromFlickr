import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlickrService} from './flickr.service';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { AppComponent } from './app.component';
import { DemoCarouselComponent } from './demo-carousel/demo-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    DemoCarouselComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    JsonpModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
