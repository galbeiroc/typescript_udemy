class Department {
  // private id: string;
  // private name: string; //property
  private employees: string[] = [];

  constructor(private id: string, public name: string) {} //constructor
    // this.name = n;
    // this.id = id;
  // }

  describe(this: Department) { //method
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployes(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('D1', 'Accounting');
accounting.addEmployes('galbeiroc');
accounting.addEmployes('crespo');
// accounting.employees[0] = 'yane'; Error
accounting.describe();
accounting.printEmployeesInfo();

// const accountingCopy = { describe: accounting.describe, name: 'Tested' };
// accountingCopy.describe();
