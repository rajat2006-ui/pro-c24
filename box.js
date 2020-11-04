class Box{
    constructor(x,y,width,height){
        
        this.body=Bodies.rectangle(x,y,width,height,{density:350});
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position;

        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }
}