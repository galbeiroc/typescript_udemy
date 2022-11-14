type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetadEmployee = Admin & Employee;

const employee: ElevetadEmployee = {
  name: 'galbeiroc',
  privileges: ['create', 'update'],
  startDate: new Date()
}
console.log(employee);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
