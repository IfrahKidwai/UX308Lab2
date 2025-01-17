// Take a variable with a **numericgrade** and output the corresponding **lettergrade**

let numericgrade = 60

let lettergrade = "f" 

if (numericgrade >=90){
    lettergrade="A+"
} else if (numericgrade >=80){
    lettergrade= "A"
}else if (numericgrade >=70){
    lettergrade= "B"
}else if (numericgrade >=60){
    lettergrade= "c"
}else if (numericgrade >=50){
    lettergrade= "D"
}
console.log(`${numericgrade} numericgrade is ${lettergrade} lettergrade`);