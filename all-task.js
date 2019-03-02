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
            percentage = 0.2;
            break;
        case (money >= 50 && money < 200):
            percentage =  0.15;
            break;
        case (money > 200):
            percentage =  0.1;
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
