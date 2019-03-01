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
