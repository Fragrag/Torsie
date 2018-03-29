/*
QuadArrayController

This class will control the QuadArray and some aspects of the QuadElement.
It sets up the User Interface with which the user can put in amount of colors and the exact shades.
Depending on the amount of active colors, it will tell the QuadArray to draw the appropriate pattern.

With the slider the user gets to choose how many active colors. QuadArrayController will then parse this
and tell the QuadArray which pattern is to be drawn depending on the amount of active colors.
At the moment, six colors can be chosen by the user with a color picker
*/

class QuadArrayController {
	
	constructor(_QuadArray, _canvasWidth) {
		// Setting constructor variables to argument inputs
		this.QuadArray = _QuadArray;
		
		let this.gui = new dat.GUI();

		// Setting up sliders that affect array structure
		// this.AmountOfColors = createSlider(0, 5, 6);
		// this.AmountOfColors.position(canvasWidth + 20, 20)

		// this.TorsionType = createSlider(-100, 100, 100);
		// this.TorsionType.position(canvasWidth + 20, 50);
		
		// Setting up color pickers
		this.Color1 = [ 0, 128, 255 ];
		this.Color2 = [ 0, 128, 255 ];
		this.Color3 = [ 0, 128, 255 ];
		this.Color4 = [ 0, 128, 255 ];
		this.Color5 = [ 0, 128, 255 ];
		this.Color6 = [ 0, 128, 255 ];

	}


	SetArrayPattern(ColorAmount) {

		// Getting the return Hex values from the color pickers, converting them into RGB objects and assigning them local variables
		var c1 = this.GetRGB(this.Color1.value());
		var c2 = this.GetRGB(this.Color2.value());
		var c3 = this.GetRGB(this.Color3.value());
		var c4 = this.GetRGB(this.Color4.value());
		var c5 = this.GetRGB(this.Color5.value());
		var c6 = this.GetRGB(this.Color6.value());

		// Get the amount of colors and execute pattern functions depending on amount.
		if (ColorAmount == 0) {
			this.QuadArray.SetQuadArrayColor(c1.r, c1.g, c1.b);
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

	SetQuadTorsionType(n) {
		var InputTorsionType = map(n, -100, 100, -1, 1);
		for (var row = 0; row < this.QuadArray.QuadArray.length; row++) {
			for (var col = 0; col < this.QuadArray.QuadArray[row].length; col++) {
				this.QuadArray.QuadArray[row][col].torsionType = InputTorsionType;
			}
		}
		this.QuadArray.DrawQuadArray();
	}

	// HexToRgbA converter from https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
	// returns {r: , g: , b: }
	GetRGB(hex) {
		var color;
		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			
			color = hex.substring(1).split('');
			
			if(color.length == 3){
				color = [color[0], color[0], color[1], color[1], color[2], color[2]];
			}
			
			color = '0x'+color.join('');
		
			return {r: (color>>16) & 255, 
					g: (color>>8) & 255, 
					b: color & 255
					};
		}
		throw new Error('Bad Hex');
	}
}
