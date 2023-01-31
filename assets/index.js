  import MediaPlayer from './mediaplayer.js'
  import AutoPlay from './plugins/autoPlay.js'
  import AutoPause from './plugins/autoPause.js'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video , plugins: [
     new AutoPlay(),
     new AutoPause(),
  ]});

  const playButton = document.getElementById('play_toogle');
  const muteButton = document.getElementById('mute_toogle');

  playButton.onclick = () => player.togglePlay();
  muteButton.onclick = () => player.toggleSound();