class Paper {
    constructor(x, y, radius) 
    {
        var options = {
            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 0.7
        }
        this.x = x;
        this.y = y;
        this.r = radius;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display()
    {
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y,);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255)
      
        image( this.image,0, 0, this.r, this.r);
        pop();

    }
};