
import GameArena from './GameArena';


//Declare the alien explosion images
const explosiongreen=new Image();
explosiongreen.src="../img/alienexplosiongreen.png";

const explosionyellow=new Image();
explosionyellow.src="../img/alienexplosionyellow.png";

const explosionwhite=new Image();
explosionwhite.src="../img/alienexplosionwhite.png";

//this function starts the game.
function startGame() {
       GameArena.start();
}
