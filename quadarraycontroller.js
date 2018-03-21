/*
QuadArrayController
This class will control the QuadArray.
It sets up the User Interface with which the user can put in amount of colors
and the exact shades.
Depending on the amount of active colors,
it will tell the QuadArray to draw the appropriate pattern.
*/
class QuadArrayController {
	
	constructor(_QuadArray) {
		this.QuadArray = _QuadArray;
		
		// Constructing Inputs
		// this.HueInput = createInput(0, 100, 100);
		// this.HueInput.position(canvasWidth + 20, 50);
		
		// this.LightnessInput = createInput(0, 100, 100);
		// this.LightnessInput.position(canvasWidth + 20, 80)
		
		this.AmountOfColorsSlider = createSlider(0, 5, 6);
		this.AmountOfColorsSlider.position(canvasWidth + 20, 20)
		
		this.Color1 = createInput('#ffffff', 'color');
		this.Color1.position(canvasWidth + 20, 50);
		
		this.Color2 = createInput('#ffffff', 'color');
		this.Color2.position(canvasWidth + 20, 80);

		this.Color3 = createInput('#ffffff', 'color');
		this.Color3.position(canvasWidth + 20, 110);
		
		this.Color4 = createInput('#ffffff', 'color');
		this.Color4.position(canvasWidth + 20, 140);
		
		this.Color5 = createInput('#ffffff', 'color');
		this.Color5.position(canvasWidth + 20, 170);
		
		this.Color6 = createInput('#ffffff', 'color');
		this.Color6.position(canvasWidth + 20, 200);
	}
	




}