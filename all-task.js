var marksMass, johnsMass, marksHeight, johnsHeight;
marksMass = 72; //kg
marksHeight = 1.72; // meters

johnsMass = 92; //kgs
johnsHeight = 1.95; // meters

var BMImark = marksMass / (marksHeight * marksHeight) ;

var BMIjohn = johnsMass / (johnsHeight * johnsHeight);

console.log(BMImark, BMIjohn);

var heighterBMI = BMImark > BMIjohn;
if(heighterBMI){   
    console.log('Is Mark\'s is heighter than John\'s  ' ); 
}else {
    console.log('Is john\'s is heighter than mark\'s  ' );    
}


var firstName = "Sridhar";
var age = 21;

if(age < 13){
    console.log(firstName + " is a boy");
}else if(age >= 13 && age < 20){
    console.log(firstName + " is a adult");
}else  {
    console.log(firstName + " ready to do marraige");
}


//ternary operators
(age < 18) ? console.log(firstName + " Is a small boy to vote") : console.log(firstName + " Ready to vote");

var profession = "Swimmer";

(profession === "Teacher") ? console.log(firstName + " He theaches") : console.log(name + " somthing else do");

//switch case 

var name = "Sridhar";
var profession = "Driver";

switch(profession){
    case "Teacher":
        console.log(name + " teaches ");
        break;
    case "Driver":
       console.log(name + " drives a car");
       break;
    case "Listen":
        console.log(name + " listens music");
        break;
    default :
        console.log(name + " somethings else to do");
        break;
}
age = 12;
switch(true){
   
    case (age < 13):
        console.log(firstName + " is a boy");
        break;
    case (age >= 13 && age < 20):
        console.log(firstName + " is a adult");
        break;
    default:
        console.log(firstName + " ready to do marraige");  
        break;
}

/***************************
 * 
 * truthy and falsy opertors
 */

// falsy opertaors are 'undefined', 'NAN', 0, "", null 

// truthy operators are non falsy operators 

// for examples

var sridharHeight ;

if(sridharHeight){
    console.log("This variable is defined");

}else{
    console.log("this varible is not defined");
}


// if we assign above varible to 0 Then

sridharHeight = 0;
//sridharHeight = "";
//sridharHeight;
//sridharHeight = null;
if(sridharHeight){
    console.log("This variable is defined");

}else{
    console.log("this varible is not defined");
}

// This is falsy value when we assign zero or empty srting or undefined or null value to varible it is also shown in console that varible is not defined


sridharHeight = 23

if(sridharHeight == "23"){
    console.log("== operator is type cersion!");
}

// if we use == operator it shows the truth and if we use === it is shown false

if(sridharHeight === "23"){
    console.log("== operator is type cersion!");
}else{
    console.log ("=== operator is strict operator");
}

var john, mike, mary;
john = "John Team";
mike = "Mike Team";
mary = "Mary Team";

var johnScoreOne = 89;
var johnScoredTwo = 120;
var johnScoredThree = 103;

var mikeScoreOne = 116;
var mikeScoredTwo = 94;
var mikeScoredThree = 123;

var maryScoreOne = 97;
var maryScoredTwo = 134;
var maryScoredThree = 105;

var johnAvgScored = (johnScoreOne + johnScoredTwo + johnScoredThree) / 3;
var mikeAvgScored = (mikeScoreOne + mikeScoredTwo + mikeScoredThree) / 3;
var maryAvgScored = (maryScoreOne + maryScoredTwo + maryScoredThree) / 3;

console.log(johnAvgScored, mikeAvgScored, maryAvgScored);

//ternary operator without draw match
johnAvgScored > mikeAvgScored ? console.log(john + " Will win this match") : console.log(mike + " Will win this match");


//using switch case with default as match has been draw
switch(true){
    case (johnAvgScored > mikeAvgScored):
        console.log(john + " Will win this match with " +  johnAvgScored + " points")
        break;
    case (mikeAvgScored > johnAvgScored) :
        console.log(mike + " Will win this match with " +  mikeAvgScored + " points")
        break;
    default:
        console.log("Match has been draw with " + johnAvgScored + " = " + mikeAvgScored + " points")  
        break;  
}


//using if else satement same as swith case 

if(johnAvgScored > mikeAvgScored){
    console.log(john + " Will win this match with " +  johnAvgScored + " points");
}else if(mikeAvgScored > johnAvgScored){
    console.log(mike + " Will win this match with " +  mikeAvgScored + " points");
}else {
    console.log("Match has been draw with " + johnAvgScored + " = " + mikeAvgScored + " points") ;
}


// which team will win from the above teams jonh's or mike's or mary's

// switch case

switch(true){
    case (johnAvgScored > mikeAvgScored) && (johnAvgScored > maryAvgScored):
        console.log(john + " Will win this match with " +  johnAvgScored + " points");
        break;
    case(mikeAvgScored > johnAvgScored) && (mikeAvgScored > maryAvgScored):
        console.log(mike + " Will win this match with " +  mikeAvgScored + " points");
        break;
    case (maryAvgScored > johnAvgScored) && (maryAvgScored > mikeAvgScored):  
        console.log(mary + " will win this match with " + maryAvgScored + " points" );
        break;
    default:
        console.log("match will be draw with " + johnAvgScored + " = " + mikeAvgScored + " = " + maryAvgScored )  ;
        break;  
}

//if else satements

if((johnAvgScored > mikeAvgScored) && (johnAvgScored > maryAvgScored)){
    console.log(john + " Will win this match with " +  johnAvgScored + " points");
}else if((mikeAvgScored > johnAvgScored) && (mikeAvgScored > maryAvgScored)){
    console.log(mike + " Will win this match with " +  mikeAvgScored + " points");
}else if((maryAvgScored > johnAvgScored) && (maryAvgScored > mikeAvgScored)){
    console.log(mary + " will win this match with " + maryAvgScored + " points" );
}else{
    console.log("match will be draw with " + johnAvgScored + " = " + mikeAvgScored + " = " + maryAvgScored );
}

function calculatAge(birthYear){
    var calculateVariable = 2019 - birthYear;
    return calculateVariable;
}
var personYear = calculatAge(1992);
console.log(personYear);

function calculateRetairement(year, name){
    var age = calculatAge(year);
    var retaireVariable = 65 - age;
    console.log(name + " retaire in " + retaireVariable + " years");
}

calculateRetairement(1992, "sridhar");

var simple = function(year, firstName){    
    var age = calculatAge(year);
    switch(age){
        case 27 :            
            return firstName + " is " + age + " old";
        case 28:
            return firstName + " is " + age + " old";
        default:
            return firstName + " is " + age + " old";

    }   



}
console.log(simple(1992, "sridhar"));
console.log(simple(1946, "reddy"));
console.log(simple(1886, "brother"));





function tipCalculator(money){
    var percentage;
    switch(true){
        case (money < 50):
            percentage = 0.2; // 20% => 20 / 100 = 0.2
            break;
        case (money >= 50 && money < 200):
            percentage =  0.15; // 15% => 15 / 100 = 0.15
            break;
        case (money > 200):
            percentage =  0.1; // 10% => 10 / 100 = 0.1
            break;
        
    }   
    return percentage * money;

}
bills = [124, 48, 268];
tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
console.log(bills);
console.log(tips);

var finalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(finalBills);


//objects and properties

var sridhar = {
    firstName : "Sridhar",
    lastName : "Reddy",
    birthYear : 1992,
    family : ["Indiramma", "Preethi", "Laxmamma"],
    job : "Teacher",
    isMarried : false,
    calAge : function(){
        this.age = 2019 - this.birthYear;
    }
};

sridhar.calAge();
console.log(sridhar);
console.log(sridhar.firstName);
console.log(sridhar["job"]);
var year = "birthYear";
console.log(sridhar[year]);
console.log(sridhar.family[0]);


sridhar.job = "Designer";
sridhar["isMarried"] = true;
console.log(sridhar);
console.log(sridhar["job"]);

var kondal = new Object();

kondal.firstName = "Kondal";
kondal.lastName = "Reddy";
kondal["birthYear"] = 1996;
kondal.family = [];
kondal.family[0] = "Malla Reddy";
kondal["family"][1] = "Varamma";
kondal.isMarried = false;
kondal["job"] =  "He Works In AirPort ";

console.log(kondal);


var john = {
    
    fullName : "John Smith",
    mass : 98,
    height : 1.92,
    calBMI : function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};


var mark = {
    
    fullName : "Mark Smith",
    mass : 98,
    height : 1.92,
    calBMI : function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};
john.calBMI();
mark.calBMI();
console.log(john, mark);

(john.BMI > mark.BMI) ? console.log(john.fullName + " has Higher BMI Value with " + john.BMI) : console.log(mark.fullName + " has Higher BMI Value with " + mark.BMI);


switch(true){
    case (john.BMI > mark.BMI) :
        console.log(john.fullName + " has Higher BMI Value with " + john.BMI);
        break;
    case (john.BMI < mark.BMI) :
        console.log(mark.fullName + " has Higher BMI Value with " + mark.BMI);
        break;    
    default:
        console.log(john.fullName + " And " + mark.fullName + " has Same BMI Value with " + john.BMI + " = " + mark.BMI);
        break;    
}

if (john.BMI > mark.BMI) {
    console.log(john.fullName + " has Higher BMI Value with " + john.BMI);
}else if (john.BMI < mark.BMI) {
    console.log(mark.fullName + " has Higher BMI Value with " + mark.BMI);
}
else{
    console.log(john.fullName + " And " + mark.fullName + " has Same BMI Value with " + john.BMI + " = " + mark.BMI);
}


//loop and iteration


//forward for loop

for (var  i = 0; i < 10; i++){
    console.log(i);
}

//backward for loop

for (var i = 10 - 1; i >= 0; i--){
    console.log(i);
}


// forward while loop
var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//backword while loop
var i = 10 - 1;
while(i >= 0 ){
    console.log(i);
    i--;
}

//display two table in farward using forloop (2 x 1 = 2)

for (var i = 1; i <= 10; i++){
    console.log("2 x " + i + " = " + (i + i));
}

//display two table in backward using forloop (2 x 1 = 2)

for (var i = 10 ; i >= 1; i--){
    console.log("2 x " + i + " = " + (i + i));
}

//display two table in farward using whileloop (2 x 1 = 2)


var i = 1;
while (i <= 10){
    console.log("2 x " + i + " = " + (i + i));
    i++;
}

//display two table in backward using whileloop (2 x 1 = 2)

var i = 10;
while (i >= 1) {
    console.log("2 x " + i + " = " + (i + i));
    i--;
}

var sridharArray = ["Sridhar", "Reddy", 1992, "Indiramma", "Preethi", "Designer"];

//printing arraylist in forward using forloop

for (var i = 0; i < sridharArray.length; i++){
    console.log(sridharArray[i]);
}

//printing array list in backward using forloop

for (var i = sridharArray.length - 1; i >= 0; i--){
    console.log(sridharArray[i]);
}


//printing arraylist in forward using while loop


var i = 0;
while(i < sridharArray.length){
    console.log(sridharArray[i]);
    i++;
}

//printing arraylist in backward using while loop


var i = sridharArray.length - 1;
while(i >= 0){
    console.log(sridharArray[i]);
    i--;
}

// using continue and break statements  in for loop print arraylist in farward

for (var i = 0; i < sridharArray.length; i++){
    if(typeof(sridharArray[i]) !== "string"){
        continue;
    }
    console.log(sridharArray[i]);
    
}
for ( var i = 0; i < sridharArray.length; i++){
    if(typeof(sridharArray[i]) !== "string"){
        break;
    }    
    console.log(sridharArray[i]);
}

// using continue and break statements  in for loop print arraylist in backward

for (var i = sridharArray.length - 1; i >= 0; i--){
    
    if(typeof(sridharArray[i]) !== "string"){
        continue;
    }
    console.log(sridharArray[i]);
    
}
for ( var i = sridharArray.length - 1; i >= 0; i--){
    if(typeof(sridharArray[i]) !== "string"){
        break;
    }    
    console.log(sridharArray[i]);
}

// using continue and break statements  in while loop print arraylist in farward


var i = 0;

while( i < sridharArray.length){
   
    if(typeof(sridharArray[i]) !== "string"){
        i++;
        continue;
    }
    console.log(sridharArray[i]);
    i++;
    
   
}


var i =0;
while (i < sridharArray.length){
  
    if(typeof(sridharArray[i]) !== "string"){
      
        break;
    }
    console.log(sridharArray[i]);
    i++;
} 

// using continue and break statements  in while loop print arraylist in backward


var i = sridharArray.length - 1;
while(i >= 0){
    if (typeof(sridharArray[i]) !== "string"){
        i--;
        continue;
    }
    console.log(sridharArray[i]);
    i--;
} 


var i = sridharArray.length - 1;
while (i >= 0){
    if(typeof(sridharArray[i]) !== "string"){
        break;
    }
    console.log(sridharArray[i]);
    i--;
}


var johnFamily = {
    firstName: "John Smith",
    bills : [124, 48, 268, 180, 42],
    allTips : [],
    finalBills : [],
    calculatTips : function(){
        for(var i = 0; i < this.bills.length; i++){
           
            switch(true){
                case (this.bills[i] < 50):
                    this.allTips.push(this.bills[i] * 0.2);
                    this.finalBills.push(this.bills[i]  + this.allTips[i]);
                    break;
                case (this.bills[i] >= 50 && this.bills[i] < 200):
                    this.allTips.push(this.bills[i] * 0.15);
                    this.finalBills.push(this.bills[i]  + this.allTips[i]);
                    break;
                case (this.bills[i] >= 200):
                    this.allTips.push(this.bills[i] * 0.1);
                    this.finalBills.push(this.bills[i]  + this.allTips[i]);
                    break;        
            }
            console.log(this.allTips[i], this.finalBills[i]);
        }    
    }
    

};
johnFamily.calculatTips() ;
console.log(johnFamily);

var markFamily = {
    firstName: "Mark Miller",
    bills : [77, 375, 110, 45],
    allTips : [],
    finalBills : [],
    calculatTips : function(){
        for (var i = 0; i < this.bills.length; i++){
            
            if(this.bills[i] < 100){
                this.allTips.push(this.bills[i] * 0.2);
                this.finalBills.push(this.bills[i] + this.allTips[i]);
                
            }else if (this.bills[i] >= 100 && this.bills[i] < 300){
                this.allTips.push(this.bills[i] * 0.1);
                this.finalBills.push(this.bills[i] + this.allTips[i]);
            }else if(this.bills[i] >= 300){
                this.allTips.push(this.bills[i] * 0.25);
                this.finalBills.push(this.bills[i] + this.allTips[i]);
            }
            console.log(this.allTips[i], this.finalBills[i]);
        }
    }
};

function avgTipsCalculator(tips){
   
    sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
markFamily.calculatTips();
console.log(markFamily);

johnFamily.avg = avgTipsCalculator(johnFamily.allTips);
markFamily.avg = avgTipsCalculator(markFamily.allTips);
console.log(johnFamily, markFamily);
console.log(johnFamily.avg, markFamily.avg);

if(johnFamily.avg > markFamily.avg){
    console.log(johnFamily.firstName + ' Has Paid the Higher Tips Than ' + markFamily.firstName + ' Family');
}else if(johnFamily.avg < markFamily.avg){
    console.log(markFamily.firstName + ' Has Paid the Higher Tips Than ' + johnFamily.firstName + ' Family');
}else {
    console.log('they paid equal tips on an Avg');
}

