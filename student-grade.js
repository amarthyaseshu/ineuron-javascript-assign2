//Get Student Grade

//Input
let studentMarks=813;

//Output
console.log(getStudentGrade(studentMarks));

//Function to get the student grade
function getStudentGrade(studentMarks){
switch(true){
case studentMarks>=0 && studentMarks<40:
    return "Student has failed";
    case studentMarks>=40 && studentMarks<50:
        return "E grade";
        case studentMarks>=50 && studentMarks<60:
        return "D grade";
        case studentMarks>=60 && studentMarks<70:
        return "C grade";
        case studentMarks>=70 && studentMarks<80:
        return "B grade";
        case studentMarks>=80 && studentMarks<90:
        return "A grade";
        case studentMarks>=90 && studentMarks<100:
            return "S grade";
            default:
                return "Invalid marks";

}
}