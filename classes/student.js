const Person = require('./person');

// Your code here

class Student extends Person {
  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName)
    this.major = major
    this.GPA = GPA
  }

  static compareGPA(student1, student2){
    let best = student1;

    if(student2.GPA > student1.GPA) best = student2;

    if(student2.GPA === student1.GPA) return `Both students have the same GPA`

    return `${best.firstName} ${best.lastName} has the higher GPA.`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
