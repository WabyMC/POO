let divEmployees = document.getElementById("divEmployees")
/**
 * Clase Person que representa a una persona y su información
 */
class Person {
    /**@property {String} name - Identifica el nombre de la persona */
    name="";
    /**@property {String} email - Identifica el correo electrónico de la persona*/
    email="";
    /**@property {String} age - Identifica la edad de la persona*/
    age=0;
    /**@property {String} resume - Identifica el resumen de la persona*/
    resume="";
    /**@property {String} id - Identifica como única a la persona*/
    id=0;
    /**@static {Number} total - Variable de clase (estática) que cuenta a las personas,
     * exite una vez y se accede mediante la clase
     */
    static total = 0;
    constructor(name, email, age, resume){
        this.name=name;
        this.email= email.toLowerCase();
        this.age = (age<18)?18:age;
        this.resume= resume;
        Person.total ++;
        this.id = Person.total;
    }//constructor Person
    static printTotal (){
        console.log(Person.total);
    }//printTotal

    printInfo(div){//método
        div.insertAdjacentHTML("beforeend",
        `
        <div id="card_${this.id}" class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.name}</div>
        <div class="card-body">
          <h5 class="card-title">${this.email}</h5>
          <p class="card-text">${this.resume}</p>
          <p class="card-text"><strong>${this.age}</strong></p>
        </div>
      </div>`);

        //console.log(this.name, this.email, this.age, this.resume);
    }//printInfo
}// class Person

class Employee extends Person{
    department ="";
    salary = 0.0;
    constructor(name, email, age, resume, department, salary){
        super(name, email, age, resume);
        this.department=department;
        this.salary=salary;
    }//constructor
    calculateSalary(){
        return ((this.salary*30) * 1.16).toFixed(2);
    }//Calculate Salary

    printInfo(div){
        super.printInfo(div);
        let cardBody = document.getElementById(`card_${this.id}`)
            .getElementsByClassName("card-body")[0];
        cardBody.insertAdjacentHTML("beforeend", `
            <p class="card-text">${this.department}</p>
            <p class="card-text text-end"><strong>${this.calculateSalary()}</strong></p>          
        `);
        //console.log(this.department, this.salary, this.calculateSalary());
    }//printInfo
}//class Employee

// let maritere = new  Employee("Maritere", "maritere@gmail.com", 21,
//     "Java FullStack Developer", "IT", 1255.20);
// let dora = new  Employee("Dora García", "dora.garcia@GMAIL.com", 21, 
//     "FullStack Developer", "Development", 1115.25);
// let vale = new  Employee("Valeria", "valeria.arquieta@gmail.com", 21, 
//     "FullStack Java Developer", "Development", 1205.12);
// maritere.printInfo(divEmployees);
// dora.printInfo(divEmployees);
// vale.printInfo(divEmployees);
// Person.printTotal();

let employees = [];
employees.push(
    new  Employee("Maritere", "maritere@gmail.com", 21,"Java FullStack Developer", "IT", 1255.20),
    new  Employee("Dora García", "dora.garcia@GMAIL.com", 21,"FullStack Developer", "Development", 1115.25),
    new  Employee("Valeria", "valeria.arquieta@gmail.com", 21,"FullStack Java Developer", "Development", 1205.12),
    new  Employee("Catarina", "catarina@gmail.com", 21,"FullStack Java Developer", "Development", 1225.12)
);
employees.forEach(e => e.printInfo(divEmployees));