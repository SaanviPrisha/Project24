class Paper{
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }

        this.body = Bodies.circle(x, y, 20, options);

        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }
    display(){
        ellipse(this.x,this.y,20, 20);
    }
}