class Department {
  // private id: string;
  // private name: string; //property
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {} //constructor
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]){
    super(id, 'IT'); // call the contructor of parent class
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, 'ACCOUNTING');
    this.reports = reports;
  }

  addEmployes(employee: string): void {
    if (employee === 'galbeiroc') {
      return;
    }
    this.employees.push(employee); // override property
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('D1', ['guti']);
it.addEmployes('galbeiroc');
it.addEmployes('crespo');
// accounting.employees[0] = 'yane'; Error
it.describe();
it.printEmployeesInfo();
console.log(it);


// const accountingCopy = { describe: accounting.describe, name: 'Tested' };
// accountingCopy.describe();

const accounting = new AccountingDepartment('D2', []);
accounting.addReport('Something went wrong...');
accounting.addEmployes('galbeiroc');
accounting.addEmployes('jesus');
accounting.printReports();
accounting.printEmployeesInfo();