const GradeProvider = (marks) =>{
    if (marks>=90) {
        return `O Grade`;
    }
    else if(marks>=80){
        return `A+ Grade`;
    }
    else if(marks>=70){
        return `A Grade`;
    }
    else if(marks>=60){
        return `B+ Grade`;
    }
    else if(marks>=50){
        return `B Grade`;
    }
}

const StudentInfo = (name , marks)=>{
    const StudentGrade = GradeProvider(marks);
    return `Student name is ${name} and Grade Recived is ${StudentGrade}`;
}

const ans = StudentInfo("Tushar",90);
console.log(ans);