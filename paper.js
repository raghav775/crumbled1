class paper 
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1.0,
            density:1.2
        }
       
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body);
    }
    display()
    {
//var paperpos=this.body.position;
  //      push()
    //    translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255)
        ellipse(this.body.position.x,this.body.position.y,this.circleRadius);
      //  pop()

    }
}