/*
QuadArrayController
This class will control the QuadArray.
It sets up the User Interface with which the user can put in amount of colors
and the exact shades.
Depending on the amount of active colors,
it will tell the QuadArray to draw the appropriate pattern.

With the slider the user gets to choose how many active colors
At the moment, six colors can be chosen by the user using a slider

Depending on the amount of active colors, we choose a pattern to display
The colors are chosen by the sliders
*/
class QuadArrayController {
	
	constructor(_QuadArray) {
		this.QuadArray = _QuadArray;
		
		// Setting up sliders and color pickers
		this.AmountOfColors = createSlider(0, 5, 6);
		this.AmountOfColors.position(canvasWidth + 20, 20)
		
		this.Color1 = createInput('#32f0ff', 'color');
		this.Color1.position(canvasWidth + 20, 50);
		
		this.Color2 = createInput('#f4f53f', 'color');
		this.Color2.position(canvasWidth + 20, 80);

		this.Color3 = createInput('#f68f7f', 'color');
		this.Color3.position(canvasWidth + 20, 110);
		
		this.Color4 = createInput('#f4f5f6', 'color');
		this.Color4.position(canvasWidth + 20, 140);
		
		this.Color5 = createInput('#f54ff4', 'color');
		this.Color5.position(canvasWidth + 20, 170);
		
		this.Color6 = createInput('#f64f5f', 'color');
		this.Color6.position(canvasWidth + 20, 200);
	}
	

	SetArrayPattern(ColorAmount) {
		var c1 = HexToRGB(this.Color1.value());
		var c2 = HexToRGB(this.Color2.value());
		var c3 = HexToRGB(this.Color3.value());
		var c4 = HexToRGB(this.Color4.value());
		var c5 = HexToRGB(this.Color5.value());
		var c6 = HexToRGB(this.Color6.value());
		
		if (ColorAmount == 0) {
			this.QuadArray.SetArrayColor(c1.r, c1.g, c1.b);
		}
		else if (ColorAmount == 1) {
			this.QuadArray.SetPatternAB(c1.r, c1.g, c1.b,
										c2.r, c2.g, c2.b);
		}
		else if (ColorAmount == 2) {
			this.QuadArray.SetPatternCAB(c1.r, c1.g, c1.b,
										 c2.r, c2.g, c2.b,
										 c3.r, c3.g, c3.b);
		}
		else if (ColorAmount == 3) {
			this.QuadArray.SetPatternCABDAB(c1.r, c1.g, c1.b,
											c2.r, c2.g, c2.b,
											c3.r, c3.g, c3.b,
											c4.r, c4.g, c4.b);
		}
		else if (ColorAmount == 4) {
			this.QuadArray.SetPatternCABDEB(c1.r, c1.g, c1.b,
											c2.r, c2.g, c2.b,
											c3.r, c3.g, c3.b,
											c4.r, c4.g, c4.b,
											c5.r, c5.g, c5.b);
		}
		else if (ColorAmount == 5) {
			this.QuadArray.SetPatternCABDEF(c1.r, c1.g, c1.b,
											c2.r, c2.g, c2.b,
											c3.r, c3.g, c3.b,
											c4.r, c4.g, c4.b,
											c5.r, c5.g, c5.b,
											c6.r, c6.g, c6.b);
		}
	}
}
