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
		
		var Color1Checkbox;
		var Color2Checkbox;
		var Color3Checkbox;
		
		boolean this.IsColor1Active = false;
		boolean this.IsColor2Active = false;
		boolean this.IsColor3Active = false;
		

	}
	
	Interface() {
		Color1Checkbox = createCheckbox('Color 1', false);
		Color2Checkbox = createCheckbox('Color 2', false);
		Color3Checkbox = createCheckbox('Color 3', false);
		
		if (Color1Checkbox.checked)
	}
	
	
	
	
}