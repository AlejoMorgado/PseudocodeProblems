const studenNameList = [];
const counter_under_age = [];
const counter_over_age = [];
const studentSize = 2;

for (let index = 0; index < studentSize; index+=1) {

    let studentName = prompt("Enter the student's name: ");
    let studentAge = parseInt(prompt("Enter the age of student: "));
    if (studentAge < 18) {
        studenNameList.push(studentName)
        counter_under_age.push(studentAge)
    }else{
        studenNameList.push(studentName)
        counter_over_age.push(studentAge)
    }
    console.log(`Total students ${studenNameList}`);
    console.log(`Underage students ${counter_under_age}`);
    console.log(`Older students ${counter_over_age}`);

}