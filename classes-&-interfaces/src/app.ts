class Department {
  name: string; //property

  constructor(n: string) { //constructor
    this.name = n;
  }

  describe(this: Department) { //method
    console.log('Department: ', this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { describe: accounting.describe, name: 'Tested' };
accountingCopy.describe();
