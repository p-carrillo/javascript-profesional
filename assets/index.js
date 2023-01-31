  import MediaPlayer from './MediaPlayer.js'
  import AutoPlay from './plugins/AutoPlay.js'
  import AutoPause from './plugins/AutoPause.js'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video , plugins: [
     new AutoPlay(),
     new AutoPause(),
  ]});

  const playButton = document.getElementById('play_toogle');
  const muteButton = document.getElementById('mute_toogle');

  playButton.onclick = () => player.togglePlay();
  muteButton.onclick = () => player.toggleSound();

  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(error => {
         console.log(error.message)
      });
  }