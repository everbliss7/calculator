//decrease font-size with increase in value.length
function fontResize() {
      var screenValue = document.frm.screen.value;
      debugger;
      var strScreenValue = screenValue.toString();
       debugger;
      var L = strScreenValue.length;
       debugger;
      var screener = document.getElementById('screen');
       debugger;

      if (L >= 10) {
          debugger;
         document.frm.screen.value.style.fontSize += L/2;
          debugger;
      }
  }

//CONSTANTS
function run1() {
      document.frm.screen.value += "1"; 
       debugger;
      fontResize();
       debugger;
}

function run2() {
      document.frm.screen.value += "2"; 
      fontResize();
}

function run3() {
      document.frm.screen.value += "3"; 
      fontResize();
}

function run4() {
      document.frm.screen.value += "4"; 
      fontResize();
}

function run5() {
      document.frm.screen.value += "5"; 
      fontResize();
}

function run6() {
      document.frm.screen.value += "6"; 
      fontResize();
}

function run7() {
      document.frm.screen.value += "7"; 
      fontResize();
}

function run8() {
      document.frm.screen.value += "8"; 
      fontResize();
}

function run9() {
      document.frm.screen.value += "9"; 
      fontResize();
}

function run0() {
      document.frm.screen.value += "0"; 
      fontResize();
}

function runPlus() {
      document.frm.screen.value += "+"; 
      fontResize();
}

function runMinus() {
      document.frm.screen.value += "-"; 
      fontResize();
}

function runProduct() {
      document.frm.screen.value += "*"; 
      fontResize();
}

function runDivide() {
      document.frm.screen.value += "/"; 
      fontResize();
}


function runModulus() {
      document.frm.screen.value += "%"; 
      fontResize();
}

function runPI() {
      document.frm.screen.value += Math.PI; 
      fontResize();
}

function runClear() {
      document.frm.screen.value = ""; 
      fontResize();
}

function runEqual() {
	var expression = eval(document.frm.screen.value); 

    document.frm.screen.value = expression; 
    fontResize();
}
//////////
function runOpeningP() {
      document.frm.screen.value += "(";
      fontResize();
}


function runClosingP() {
      document.frm.screen.value += ")";
      fontResize();
}


function runPowerN() {
      document.frm.screen.value += "**";
      fontResize();
}

function runPower2() {
      document.frm.screen.value += "**2";
      fontResize();
}

function runCosine() {
      document.frm.screen.value += "Math.cos(";
      fontResize();
}


function runSine() {
      document.frm.screen.value += "Math.sin(";
      fontResize();
}


function runTangent() {
      document.frm.screen.value += "Math.tan(";
      fontResize();
}

function runLin() {
      document.frm.screen.value += "Math.E";
      fontResize();
}

function runExponent() {
      document.frm.screen.value += "exp(";
      fontResize();
}

//ADDITIONAL FUNCTIONS V1.00
function runAbs() {

}

function runRoot() {
      document.frm.screen.value = "sqrt(";
      fontResize();
}

function runScience() {
      var Science = document.frm.screen.value.toExponential(3);
      document.frm.screen.value += Science.toString();
      fontResize();
}

function runComma() {
      document.frm.screen.value += ".";
      fontResize();
}

function runDoubleZero() {
      document.frm.screen.value += "00";
      fontResize();
}

function runTripleZero() {
      document.frm.screen.value += "000";
      fontResize();
}


function runSTR() {
      
}


function runMRC() {
      
}



//Delete 1 value at a time

function runCancel() {
   
   var screenValue = document.frm.screen.value;
   var strScreenValue = screenValue.toString();
   var L = strScreenValue.length;
  
   var slicedScreenValue = strScreenValue.slice(0, L-1);

   document.frm.screen.value = slicedScreenValue;
   fontResize();
}

/*This calculator is a product of code learning project by Blessing Tayedzerwa
     Feel free to edit it to what ever extent, on the condition that, this comment
     will not be removed in any version of the calculator.
     copyright © of SoloLearn 2017 */