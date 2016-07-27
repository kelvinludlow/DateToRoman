//
//  Kelvin Ludlow - Example Code
//
//	This example shows a JavaScript function that accepts
//	an input 'year', and then converts and returns the
//	resolved Roman Numeral equivilant.
//
//	In this example, we simply output to the console
//	with sonme formatting.
//
//	Example Usage: 	[From Console/bash Prompt]	'node ResolveToRoman (<Input Year Date [1-3999]>)
//	Example Usage: 	ResolveToRoman (<Input Year Date [1-3999]>)
//

//	Core resolution function - call with input date
function ResolveToRoman (InputDate) 
{

	//	Declare variable to hold the decimal and Roman Numeral values
	var RomanResolveList = [ [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'],	[40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'],	[4, 'IV'], [1, 'I'] ];

	//	Declare and assign variables
	var ResolvedRoman = '';
	var InputDateLengthCounter ='';
	var ResolveCounter='';
	
	//  Validate 'Input Year' is in Range
    if(InputDate >0 && InputDate <=3999)
    {
        //	loop for the entire length of the input date
	    for ( InputDateLengthCounter = 0; InputDateLengthCounter < RomanResolveList.length; ++InputDateLengthCounter)
        {
		
		    //	Assign and Build the Roamn Numeral string from the Input Date
		    for ( ResolveCounter = RomanResolveList[InputDateLengthCounter]; InputDate >= ResolveCounter[0]; InputDate -= ResolveCounter[0]) ResolvedRoman += ResolveCounter[1];
	    }
		
    }

	//	Return fully resolved Roman Numerals
	return ResolvedRoman;
    
}

//	Output resolved to Roman Numerals by calling the ResolveToRoman 
//	and display with formatted message-text on the console
console.log ('');
console.log ('');
console.log ("****************************************************************************** ");
console.log ('Resolve Function Result(s):');
console.log ("****************************************************************************** ");
console.log ("*    For an Input Date of: 64, the Resolved Roman Numerals are:   ", ResolveToRoman (64));
console.log ("*    For an Input Date of: 226, the Resolved Roman Numerals are:  ", ResolveToRoman (226));
console.log ("*    For an Input Date of: 900, the Resolved Roman Numerals are:  ", ResolveToRoman (900));
console.log ("*    For an Input Date of: 998, the Resolved Roman Numerals are:  ", ResolveToRoman (998));
console.log ("*    For an Input Date of: 1712, the Resolved Roman Numerals are: ", ResolveToRoman (1712));

console.log ("****************************************************************************** ");
console.log ('');
console.log ('');

//  End of Example



