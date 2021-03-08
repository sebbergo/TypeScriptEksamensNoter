abstract class Shape {
    private _color:string;

    constructor(color:string){
        this._color = color;
    }

    abstract get area():number;
    abstract get perimeter(): number;
    
    abstract get color(): string
    abstract set color(value: string)

    toString(){
        return "This shape is " + this._color + " and has an area of " 
        + this.area + " and a perimeter of " + this.perimeter
    }
  }

class Circle extends Shape{
    #radius: number
    
    constructor(radius: number, color: string){
        super(color)
        this.#radius = radius
    }

    get radius(): number{
        return this.#radius
    }

    set radius(value: number){
        this.#radius = value
    }

    get area(): number {
        throw new Error("Method not implemented.");
    }

    get perimeter(): number {
        throw new Error("Method not implemented.");
    }

    get color(): string {
        throw new Error("Method not implemented.");
    }

    set color(value: string){
        throw new Error("Method not implemented.");
    }
}

class Cylinder extends Circle{
    #height: number
    
    constructor(height: number, color: string, radius: number) {
        super(radius, color);
        this.#height = height;
    }

    get area(): number {
        return super.area
    }

    get perimeter(): number {
        return super.perimeter
    }

    getVolume(): number{
        return (this.#height * Math.PI) * super.radius^2
    }
    
}