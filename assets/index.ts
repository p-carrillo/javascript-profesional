  import MediaPlayer from './MediaPlayer'
  import AutoPlay from './plugins/AutoPlay'
  import AutoPause from './plugins/AutoPause'
  import AdsPlugin from './plugins/Ads'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video , plugins: [
     new AutoPlay(),
     new AutoPause(),
     new AdsPlugin(),
  ]});

  const playButton: HTMLElement | null = document.querySelector('#play_toogle');
  if (playButton !== null) {
   playButton.onclick = () => player.togglePlay();
  } 
  
  const muteButton: HTMLElement | null = document.querySelector('#mute_toogle');
  if (muteButton !== null) {
   muteButton.onclick = () => player.toggleSound();
  }
  
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(error => {
         console.log(error.message)
      });
  }