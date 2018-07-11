// create a graphic container to use as the main gamearena
const GameArena={

canvas:document.createElement("canvas"),

  start() {
    //set the size of the canvas, background colour, border etc
    this.canvas.width=1100;
    this.canvas.height=600;
    this.canvas.style.backgroundColor="black";
    this.canvas.style.border="3px solid gray";
    this.canvas.style.display="block";
    this.canvas.style.margin="auto";

    //this inserts the canvas into the body section of the html
    document.body.insertBefore(this.canvas,document.body.childNodes[0]);

    //context menthod to draw stuff
    this.context=this.canvas.getContext("2d");
    player.draw();

    nums=['3','3','2','2','1'];
    shiftShape=0;
    aliens=new Array(55);

    //display aliens
    //displayAlien();

    window.addEventListener("keydown",movePlayer,event);
    window.addEventListener("keyup",stopPlayer,event);
    }
};

export default GameArena;
