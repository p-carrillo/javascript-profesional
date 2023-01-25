function Autoplay () {}

Autoplay.prototype.run = function(player) {
    if (!player.muted) {
        player.mute = true;
    }
    player.play();
}

export default Autoplay;