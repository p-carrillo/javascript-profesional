  import MediaPlayer from './mediaplayer.js'
  import Autoplay from './plugins/autoplay.js'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video , plugins: [
    new Autoplay(),
  ]});

  const playButton = document.getElementById('play_toogle');
  const muteButton = document.getElementById('mute_toogle');

  playButton.onclick = () => player.togglePlay();
  muteButton.onclick = () => player.toggleSound();