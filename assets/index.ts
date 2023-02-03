  import MediaPlayer from './MediaPlayer.js'
  import AutoPlay from './plugins/AutoPlay.ts'
  import AutoPause from './plugins/AutoPause.ts'

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