// 1. Реализуйте класс Worker, который будет иметь следующие 
// свойства: name, surname, rate (ставка за день работы), 
// days (количество отработанных дней). Также класс должен иметь метод getSalary(), 
// который будет выводить зарплату работника. Зарплата - это произведение (умножение) 
// ставки rate на количество отработанных дней days.

// let inp_name = document.querySelector('.inp_name');
// let inp_surname = document.querySelector('.inp_surname');
// let inp_rate = document.querySelector('.inp_rate');
// let inp_date = document.querySelector('.inp_date');
// let btn = document.querySelector('.btn');
// let box = document.querySelector('.box');

// btn.onclick = function(){
//   class Worker{
//     constructor(name,surname,rate,days){
//       this.name = name;
//       this.surname = surname;
//       this.rate = rate;
//       this.days = days;
//     }
//     getSalary(){
//       let sum = this.rate*this.days;
//       box.innerHTML = `Работник ${this.name} ${this.surname}, работая ${this.days} дней зарабатывает ${sum}`
//     }
//   }
  
//   let worker = new Worker(inp_name.value,inp_surname.value,+inp_rate.value,+inp_date.value);
//   worker.getSalary()
// }


// 2. Реализуйте класс Student, который будет наследовать от класса User. 
// Этот класс должен иметь следующие свойства: name ( наследуется от User), 
// surname (наследуется от User), year (год поступления в вуз). 
// Класс должен иметь метод getFull() (наследуется от User), 
// с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), который будет выводить 
// текущий курс студента. Курс вычисляется так: нужно от 
// текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// class User{
// constructor(name, surname, year){
//   this.name = name;
//   this.surname = surname;
//   this.year = year;
// }
// getFull(name,surname){
//   console.log(`Name: ${name}, surname: ${surname}`);
// }
// getCourse(year){
//   let data = new Date();
//   console.log(`Course: ${data.getFullYear()-year}`);
// }
// }

// class Student extends User{

// }
// var student = new Student();
// student.getFull('Bob','Barely');
// student.getCourse(2017);




// У нас есть объекты:
// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };
// С помощью свойства __proto__ задайте прототипы так, 
// чтобы поиск любого свойства выполнялся по следующему пути:
// pockets → bed → table → head. Например, pockets.pen 
// должно возвращать значение 3 (найденное в table), 
// а bed.glasses – значение 1 (найденное в head).


// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;
// console.log(bed.glasses);

