class QuadElement {

	constructor(_width, _height, _x, _y) {	
		this.width = _width;
		this.height = _height;
		this.x = _x;
		this.y = _y;
		this.QuadColor = {
			r: 128,
			g: 128,
			b: 128
		};	
	}
	
	DrawQuad() {	
		var originX = this.x * this.width;
		var originY = this.y * this.height;
		
		strokeWeight(.5);
		fill(this.QuadColor.r, this.QuadColor.g, this.QuadColor.b);
		
		quad(
			originX, originY,
			(originX+this.width), originY,
			(originX + (this.width + this.height)), (originY + this.height),
			(originX + this.height), (originY + this.height)
		);	
	}
	
	SetQuadColor(_r, _g, _b){
		
		this.QuadColor.r = _r;
		this.QuadColor.g = _g;
		this.QuadColor.b = _b;
		
	}
	
}