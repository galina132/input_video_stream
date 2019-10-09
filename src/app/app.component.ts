import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {VideoJSComponent} from './video-js/video-js.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  _compRef: any[] = [];
  componentRef: any;
  @ViewChild('videoWidget', {read: ViewContainerRef}) container;
  urlVideo = 'https://vod.vodgc.net/gid7/vod/vodgc/vodgc/28/18-284-8-GCZKTJ1538104527_480P.mp4/tracks-v1a1/index.m3u8';
  // urlVideo = 'http://192.168.163.13:1935/OD/OD/playlist.m3u8';
  // tslint:disable-next-line:max-line-length
  urlPoster = 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/w/at/watch/modelheader/watch-modelheader-series4-hero-201809?wid=629&hei=383&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1536009686693';
  factory = this.resolver.resolveComponentFactory(VideoJSComponent);
 // this.componentRef = this.container.createComponent(this.factory);
  constructor(private resolver: ComponentFactoryResolver) {
  }
  ngOnInit() {
    const link = 'https://vod.vodgc.net/gid7/vod/vodgc/vodgc/28/18-284-8-GCZKTJ1538104527_480P.mp4/tracks-v1a1/index.m3u8';
    this.componentRef = this.container.createComponent(this.factory);
    this.componentRef.instance.urlVideo = this.urlVideo;
    this.componentRef.instance.urlPoster = this.urlPoster;
  }
  restartVideo() {
    this.componentRef.destroy();
    this.componentRef = this.container.createComponent(this.factory);
    this.componentRef.instance.urlVideo = this.urlVideo;
    this.componentRef.instance.urlPoster = this.urlPoster;
  }

}
