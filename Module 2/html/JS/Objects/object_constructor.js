//creating an object constructor function
function car(cname, model, year)
{
    this.cname = cname;
    this.model = model;
    this.year = year;
}
const car1 = new car("toyota", "corolla", 2022);
const car2 = new car("honda", "civic", 2022)
console.log(car1.cname);
console.log(car1.model);
console.log(car1.year);
console.log(car2.cname);
console.log(car2.model);
console.log(car2.year);