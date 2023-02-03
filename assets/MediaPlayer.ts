class MediaPlayer {
  
  media: HTMLMediaElement;
  plugins: Array<any>

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

   private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  mute() {
    this.media.muted = true;
  }

  unMute() {
    this.media.muted = false;
  }
  
  toggleSound() {
    if (this.media.muted) {
      this.unMute();
    } else {
      this.mute();
    }
  }
};









  export default MediaPlayer;