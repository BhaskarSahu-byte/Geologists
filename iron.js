class Iron{
	constructor(x,y)
	{
	// assign options to the iron
		var options = {
			'density':30,
			'friction':3,
			'restitution':0.8			
		}

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);

	}
	display()
	{
            var ironpos = this.body.position;
            var angle = this.body.angle;
			push()
			translate(ironpos.x, ironpos.y);
            rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("black");
		
			//draw the ellipse here to display the iron
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}