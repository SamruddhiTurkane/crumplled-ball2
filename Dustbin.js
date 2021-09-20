class Dustbin {
    constructor(x, y)
    {
    this.x = x 
    this.y = y
    this.width = 220
    this.height = 160
    this.thickness = 20
    this.angle = 0
     this.bottomBody = Bodies.rectangle(this.x , this.y , this.width , this.thickness,{isStatic:true})
     this.leftBody = Bodies.rectangle(this.x-this.width/2 , this.y-this.height/2  , this.thickness, this.height,{isStatic:true})
     Matter.Body.setAngle(this.leftBody,this.angle);
     this.rightBody = Bodies.rectangle(this.x+this.width/2 , this.y-this.height/2  , this.thickness, this.height,{isStatic:true})
     Matter.Body.setAngle(this.rightBody,this.angle);
     this.image = loadImage("dustbin.png");
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display()
    {
      var posBottom = this.bottomBody.position;
      var posLeft = this.leftBody.position;
      var posRight= this.rightBody.position;
    
      push();
      translate(posLeft.x,posLeft.y,);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(255)
      rotate(this.angle);
    
      //rect( 0, 0, this.thickness, this.height);
      pop();
    
      push();
      translate(posRight.x,posRight.y,);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(255)
      rotate(-1*this.angle);
    
      //rect( 0, 0, this.thickness, this.height);
      pop();
      
      push();
      translate(posBottom.x,posBottom.y,);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(255)
       imageMode(CENTER);
      image( this.image, 0, -this.height/2, this.width, this.height);
      //rect( 0, 0, this.width, this.thickness);
      pop();
    }
    };