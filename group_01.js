var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var stiCalc = function(stiBonus) {
var STIindicator;

  switch (stiBonus) {
    case 1:
    case 2:
    return 0;
    case 3 :
    return 0.04;
    case 4:
    return 0.06;
    case 5:
    return 0.1;
    default:
    return "wut";

  }


};


var bonusAdjuster = function( xhalfDone, yempNumber, zaSalary ){

var longWorkers = function() {
  if (yempNumber.length == 4 ) {
    xhalfDone += 0.05;
    console.log("in longWorkers, xhalfDone is " + xhalfDone);
  }
  else{}
};


var incomeAdjuster = function() {
  if (zaSalary > 65000) {
    xhalfDone -= 0.01;
    console.log("in incomeAdjuster, xhalfDone is " + xhalfDone);

  }
  else{}
};

var bonusCeiling = function() {
  if (xhalfDone > 0.13) {
    xhalfDone = 0.13;
    console.log("in bonusCeiling, xhalfDone is " + xhalfDone);

  }
  else{}
};
longWorkers();
incomeAdjuster();
bonusCeiling();
return xhalfDone;
};


var bonusCalc = function(input) {
  for ( var i = 0; i < input.length ; i++) {
    var tempArray = [];
    //Push the name to new array //
    tempArray.push(input[i][0]);


    // Calculate the STI by accessing stiCalc function//
var aSalary = input[i][2];
var halfDone = stiCalc(input[i][3]);
console.log("halfDone is " + halfDone);
var empNumber = input[i][1];
var finalSalary = bonusAdjuster(halfDone, empNumber, aSalary  );

tempArray.push(finalSalary);

var newSalary= Math.round(aSalary * (tempArray[1] + 1));
tempArray.push(newSalary);

tempArray.push(newSalary-aSalary);

console.log(tempArray);


  }

// stiCalc(input[i][3]);
};




// console.log('hola');
bonusCalc(employees);
