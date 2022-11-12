abstract class Department {
  // private id: string;
  // private name: string; //property
  static fiscalYear: number = 2022;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {} //constructor
    // this.name = n;
    // this.id = id;
  // }

  static createEmployee(name: string) { // static method
    return { name }
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log('IT Department - ID', this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, 'ACCOUNTING');
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('Not report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value);
  }

  describe() {
    console.log('Accounting Department - ID', this.id);
  }

  addEmployes(employee: string): void {
    if (employee === 'galbeiroc') {
      return;
    }
    this.employees.push(employee); // override property
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('galbeiroc');
console.log(employee1, Department.fiscalYear);

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
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
accounting.describe();
accounting.addEmployes('galbeiroc');
accounting.addEmployes('jesus');
accounting.printReports();
accounting.printEmployeesInfo();