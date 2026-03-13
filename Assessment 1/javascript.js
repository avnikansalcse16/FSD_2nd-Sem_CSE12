let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);

let student = {
name:name,
roll:roll,
math:math,
science:science,
english:english
};

students.push(student);

document.getElementById("output").innerHTML="Student Added Successfully!";
}

function displayStudents(){

let output="";

for(let s of students){

output+=`
<div class="student-card">
Name: ${s.name}<br>
Roll: ${s.roll}<br>
Math: ${s.math}<br>
Science: ${s.science}<br>
English: ${s.english}
</div>
`;
}

document.getElementById("output").innerHTML=output;
}

function calculateTotals(){

let output="";

for(let s of students){

let total = s.math + s.science + s.english;

output+=`
<div class="student-card">
${s.name} (Roll ${s.roll})<br>
Total Marks: ${total}
</div>
`;
}

document.getElementById("output").innerHTML=output;
}

function calculateAverage(){

let output="";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total/3;

output+=`
<div class="student-card">
${s.name} - Average Marks: ${avg.toFixed(2)}
</div>
`;
}

document.getElementById("output").innerHTML=output;
}

function topStudents(){

let output="";

for(let s of students){

let avg=(s.math+s.science+s.english)/3;

if(avg>80){

output+=`
<div class="student-card">
⭐ ${s.name} - Average: ${avg.toFixed(2)}
</div>
`;
}

}

document.getElementById("output").innerHTML=output || "No Top Students";
}

function failedStudents(){

let output="";

for(let s of students){

let avg=(s.math+s.science+s.english)/3;

if(avg<40){

output+=`
<div class="student-card">
 ${s.name} - Average: ${avg.toFixed(2)}
</div>
`;
}

}

document.getElementById("output").innerHTML=output || "No Failed Students";
}

function countStudents(){

document.getElementById("output").innerHTML=
"Total Students: "+students.length;

}