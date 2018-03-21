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
		
		// Constructing sliders
		// this.HueSlider = createSlider(0, 100, 100);
		// this.HueSlider.position(canvasWidth + 20, 50);
		
		// this.LightnessSlider = createSlider(0, 100, 100);
		// this.LightnessSlider.position(canvasWidth + 20, 80)
		
		this.Color1Slider = createSlider(0, 255, 100);
		this.Color1Slider.position(canvasWidth + 20, 50);
		
		this.Color2Slider = createSlider(0, 255, 100);
		this.Color2Slider.position(canvasWidth + 20, 80);

		this.Color3Slider = createSlider(0, 255, 100);
		this.Color3Slider.position(canvasWidth + 20, 110);
		
		this.Color4Slider = createSlider(0, 255, 100);
		this.Color4Slider.position(canvasWidth + 20, 140);
		
		this.Color5Slider = createSlider(0, 255, 100);
		this.Color5Slider.position(canvasWidth + 20, 170);
		
		this.Color6Slider = createSlider(0, 255, 100);
		this.Color6Slider.position(canvasWidth + 20, 200);
	}

	SetupQuadArrayController() {
	}
}