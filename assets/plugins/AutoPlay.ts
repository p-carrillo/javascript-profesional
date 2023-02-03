import MediaPlayer from "../MediaPlayer";

class Autoplay {
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.media.play();
    }
}


export default Autoplay;