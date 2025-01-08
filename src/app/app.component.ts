import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bodaProject';

  isPlaying = false;
  currentTime = '0:00';
  duration = '0:00';

  ngOnInit(): void { }

  togglePlayPause(audio: HTMLAudioElement): void {
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
      this.updateCurrentTime(audio);
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }

  updateCurrentTime(audio: HTMLAudioElement): void {
    const interval = setInterval(() => {
      if (!audio.paused) {
        this.currentTime = this.formatTime(audio.currentTime);
        this.duration = this.formatTime(audio.duration);
      } else {
        clearInterval(interval);
      }
    }, 500);
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
