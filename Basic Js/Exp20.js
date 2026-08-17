const studentNames = ["Aditya", "Gautam", "Mehul"];
const studentMarks = [85, 45, 92];

function getGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}

for (let i = 0; i < studentNames.length; i++) {
  const grade = getGrade(studentMarks[i]);
  console.log(`${studentNames[i]}: Marks = ${studentMarks[i]}, Grade = ${grade}`);
}

// Calculate class average
let total = 0;
for (let i = 0; i < studentMarks.length; i++) {
  total += studentMarks[i];
}
const average = total / studentMarks.length;
console.log("Class Average:", average.toFixed(2));