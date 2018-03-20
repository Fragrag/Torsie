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
		
		this.Color1Checkbox = createCheckbox('Color 1', false);
		this.Color2Checkbox = createCheckbox('Color 2', false);
		this.Color3Checkbox = createCheckbox('Color 3', false);
		
		this.IsColor1Active = false;
		this.IsColor2Active = false;
		this.IsColor3Active = false;
		
		this.ColorCheckboxes = [this.Color1Checkbox, 
								this.Color2Checkbox, 
								this.Color3Checkbox];
								
		this.IsColorActive = [this.IsColor1Active, 
							  this.IsColor2Active, 
							  this.IsColor2Active];
							  
		
	}

	// SetupInterface() {
		// this.Color1Checkbox.changed(this.myCheckedEvent);
	// }
	// Callback functions in a class
	// Read this https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback
	myCheckedEvent() {
		var self = this;
		
		if (self.checked()) {
			this.IsColor1Active = true;
		}
		else {
			this.IsColor1Active = false;
		}
	}
	
}