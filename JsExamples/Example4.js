//let today = new Date();
//console.log("Date:",today);

/*let students = ["Lasya","Dhruti","Valli"];
console.log(students)
students.push("Sita");
console.log(students)
students.unshift("Amit");
console.log(students)
students.splice(2,1,"Raj")
console.log(students)
students.pop("Amit");
console.log(students)
for(let student of students){
    console.log(student);
}
console.log("While loop-Roll Numbers");
let rn=101;
while(rn <= 103){
    console.log("Roll No:",rn);
    rn++;
}
console.log("Do...while loop-Hostel Floors:");
let floor=1;
do{
    console.log("Hostel Floor:",floor);
    floor++;
}while(floor <= 3);
console.log("Round 4.7:",Math.round(4.7));
console.log("Round 4.3:",Math.round(4.3));
console.log("Ceil 4.1:",Math.ceil(4.1));
console.log("Floor 4.9:",Math.floor(4.9));
console.log("Truncate 4.9:", Math.trunc(4.9)); 
console.log("Absolute of -25:", Math.abs(-25)); 
console.log("2^3:", Math.pow(2, 3));           
console.log("Square root of 49:", Math.sqrt(49));*/
let studentMap = new Map();
studentMap.set("101",{name:"Lasya",dept:"CSE"});
studentMap.set("102",{name:"Valli",dept:"ECE"});
studentMap.set("103",{name:"Dhruti",dept:"MECH"});
console.log("Student 101:",studentMap.get("101"));
