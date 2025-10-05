// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "reading",
  premium: true,
};

const { hobby, premium, ...rest } = user;

const newUser = {...rest, hobby: "skydiving", premium: false, mood: "happy"};


for (const key of Object.keys(newUser)) {
  console.log(`${key}: ${newUser[key]}`);
}













// Напиши функцію countProps(obj), яка рахує кількість
//  властивостей в об'єкті. Функція повертає число — кількість властивостей.

const users = {
    name: "Max",
    age: 14,
    hoby: "football"
};

function countProps(obj){
    const {name, age, hobby} = users
    return Object.keys({name, age, hobby}).length
}






console.log(countProps(users));











// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".


const employees = {
    Max: 5,
    Anna: 12,
    John: 8,
    Kate: 15
}



function findBestEmployee(employees){
    let best = "";
    let max = 0;

    for(const entry of Object.entries(employees)) {
        const [name, value] = entry;
        if(value > max){
            max = value
            best = name
        }
    }
    return best;
}

console.log(findBestEmployee(employees));










// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const employes = {
    Max: 2500,
    Anna: 3000,
    Jonh: 1500,
}


function countTotalSalary(employes) {
    let total = 0;
    for(const name of Object.keys(employes)){
        const {[name]: salary} = employes;
        total += salary
    }
    return total
}


console.log(countTotalSalary(employes));