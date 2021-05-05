class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the stone
		var options = {
			'density':12,
			'friction':0.9,
			'restitution':0.8			
		}

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

	}
	display()
	{
            var stonepos = this.body.position;
            var angle = this.body.angle;
			push()
			translate(stonepos.x, stonepos.y);
            rotate(angle);
			strokeWeight(4);
			stroke("brown");
			fill("brown");
		
			//draw the ellipse here to display the iron
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}