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
		
		this.AmountOfColors = createSlider(0, 5, 6);
		this.AmountOfColors.position(canvasWidth + 20, 20)
		
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
	

	SetArrayPattern(ColorAmount) {
		if (ColorAmount == 1 || ColorAmount == 0) {
			this.QuadArray.SetArrayColor(HexToRGB(this.Color1.value()).r, HexToRGB(this.Color1.value()).g, HexToRGB(this.Color1.value()).b);
		}
		else if (ColorAmount == 2) {
			this.QuadArray.SetPatternAB(HexToRGB(this.Color1.value()).r, HexToRGB(this.Color1.value()).g, HexToRGB(this.Color1.value()).b,
										HexToRGB(this.Color2.value()).r, HexToRGB(this.Color2.value()).g, HexToRGB(this.Color2.value()).b);
		}
		else if (ColorAmount == 3) {
			this.QuadArray.SetPatternCAB(HexToRGB(this.Color1.value()).r, HexToRGB(this.Color1.value()).g, HexToRGB(this.Color1.value()).b,
										 HexToRGB(this.Color2.value()).r, HexToRGB(this.Color2.value()).g, HexToRGB(this.Color2.value()).b,
										 HexToRGB(this.Color3.value()).r, HexToRGB(this.Color3.value()).g, HexToRGB(this.Color3.value()).b);
		}
		else if (ColorAmount == 4) {
			this.QuadArray.SetPatternCABDAB(HexToRGB(this.Color1.value()).r, HexToRGB(this.Color1.value()).g, HexToRGB(this.Color1.value()).b,
											HexToRGB(this.Color2.value()).r, HexToRGB(this.Color2.value()).g, HexToRGB(this.Color2.value()).b,
											HexToRGB(this.Color3.value()).r, HexToRGB(this.Color3.value()).g, HexToRGB(this.Color3.value()).b,
											HexToRGB(this.Color4.value()).r, HexToRGB(this.Color4.value()).g, HexToRGB(this.Color4.value()).b);
		}
		else if (ColorAmount == 5) {
			this.QuadArray.SetPatternCABDEB(HexToRGB(this.Color1.value()).r, HexToRGB(this.Color1.value()).g, HexToRGB(this.Color1.value()).b,
											HexToRGB(this.Color2.value()).r, HexToRGB(this.Color2.value()).g, HexToRGB(this.Color2.value()).b,
											HexToRGB(this.Color3.value()).r, HexToRGB(this.Color3.value()).g, HexToRGB(this.Color3.value()).b,
											HexToRGB(this.Color4.value()).r, HexToRGB(this.Color4.value()).g, HexToRGB(this.Color4.value()).b,
											HexToRGB(this.Color5.value()).r, HexToRGB(this.Color5.value()).g, HexToRGB(this.Color5.value()).b);
		}
		else if (ColorAmount == 6) {
			this.QuadArray.SetPatternCABDEF(HexToRGB(this.Color1.value()).r, HexToRGB(this.Color1.value()).g, HexToRGB(this.Color1.value()).b,
											HexToRGB(this.Color2.value()).r, HexToRGB(this.Color2.value()).g, HexToRGB(this.Color2.value()).b,
											HexToRGB(this.Color3.value()).r, HexToRGB(this.Color3.value()).g, HexToRGB(this.Color3.value()).b,
											HexToRGB(this.Color4.value()).r, HexToRGB(this.Color4.value()).g, HexToRGB(this.Color4.value()).b,
											HexToRGB(this.Color5.value()).r, HexToRGB(this.Color5.value()).g, HexToRGB(this.Color5.value()).b,
											HexToRGB(this.Color6.value()).r, HexToRGB(this.Color6.value()).g, HexToRGB(this.Color6.value()).b);
		}
	}


}