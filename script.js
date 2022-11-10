import Player from './player.js';
import InputHandler from './input.js'

window.addEventListener('load', function(){
    const loading = document.getElementById("loading");
    loading.style.display = "none";
    const canvas = this.document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    player.draw(ctx);
    const input = new InputHandler();

    function animate(){
        console.log(input.lastKey);
        requestAnimationFrame(animate);
    };
    animate();
})