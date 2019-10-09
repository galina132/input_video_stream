import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-js',
  templateUrl: './video-js.component.html',
  styleUrls: ['./video-js.component.scss']
})
export class VideoJSComponent implements AfterViewInit, OnDestroy {
  public vjs: videojs.Player;

  @Input() urlVideo: string;
  @Input() urlPoster: string;

  constructor() { }

  ngAfterViewInit() {
    const options = {
      'sources' : [{
        'src' : this.urlVideo,
        'type' : 'application/x-mpegURL'
        }
      ],
      'poster' : this.urlPoster
    };
    this.vjs = videojs('my-player', options);

  }
  ngOnDestroy() {
    let player = videojs('my-player');
    player.dispose();
  }

}
