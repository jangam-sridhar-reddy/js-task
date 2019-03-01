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
