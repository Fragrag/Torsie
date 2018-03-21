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
		
		this.Color1Input = createInput('#ffffff', 'color');
		this.Color1Input.position(canvasWidth + 20, 50);
		this.Color1 = HexToRGB(this.Color1Input.value());
		
		this.Color2Input = createInput('#ffffff', 'color');
		this.Color2Input.position(canvasWidth + 20, 80);
		this.Color2 = HexToRGB(this.Color2Input.value());

		this.Color3Input = createInput('#ffffff', 'color');
		this.Color3Input.position(canvasWidth + 20, 110);
		this.Color3 = HexToRGB(this.Color3Input.value());
		
		this.Color4Input = createInput('#ffffff', 'color');
		this.Color4Input.position(canvasWidth + 20, 140);
		this.Color4 = HexToRGB(this.Color4Input.value());
		
		this.Color5Input = createInput('#ffffff', 'color');
		this.Color5Input.position(canvasWidth + 20, 170);
		this.Color5 = HexToRGB(this.Color5Input.value());
		
		this.Color6Input = createInput('#ffffff', 'color');
		this.Color6Input.position(canvasWidth + 20, 200);
		this.Color6 = HexToRGB(this.Color6Input.value());
	}
	




}