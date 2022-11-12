class Department {
  private name: string; //property
  private employees: string[] = [];

  constructor(n: string) { //constructor
    this.name = n;
  }

  describe(this: Department) { //method
    console.log('Department: ', this.name);
  }

  addEmployes(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');
accounting.addEmployes('galbeiroc');
accounting.addEmployes('crespo');
// accounting.employees[0] = 'yane'; Error
accounting.describe();
accounting.printEmployeesInfo();

// const accountingCopy = { describe: accounting.describe, name: 'Tested' };
// accountingCopy.describe();
