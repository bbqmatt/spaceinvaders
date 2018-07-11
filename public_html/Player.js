// create a player]
const player={
    x:40, y:580, moving:false,
    draw:function(){
      gamearena.context.fillStyle="ivory";
      gamearena.context.fillRect(this.x,this.y,80,20);
      gamearena.context.fillRect(this.x+35,this.y-20,10,20);
    },
    update:function(d){
      this.x+=d;
    },
    move:function(ev){
      gamearena.context.clearRect(this.x,this.y,80,20);
      gamearena.context.clearRect(this.x+35,this.y-20,10,20);

      // 37 is the left key
      // 39 right key
      if(ev.keyCode===37 && this.x>0) this.update(-15);
      else if(ev.keyCode===39 && this.x+80<1100) this.update(+15);
      //redraw player
      this.draw();
    }
};
