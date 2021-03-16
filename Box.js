class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
     // this.image = loadImage("sprites/wood1.png");
    // this.visibility=255;
    }

    display(){
      
      if(this.body.speed>8){
        
        //this.visibility=this.visibility-3;
        push()
        World.remove(world,this.body);
       // tint(255,this.visibility);
        rectMode(CENTER);
        rect(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
      }
      else{
        super.display();
      }
    }
  
  };
  