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
    const {name, age, hoby} = users
    return Object.keys({name, age, hoby}).length
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




// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.


const baza = [
    {name: "Nazar", age: 14},
    {name: "Ostap", age: 16},
    {name: "Ira", age: 15}
]


function getAllPropValues(arr, prop){
const values = [];

for (const obj of arr){
    const {[prop]: value} = obj;
    if(value !== undefined){
        values.push(value)
    }
}
return values
}


console.log(getAllPropValues(baza, "name")); 
console.log(getAllPropValues(baza, "age")); 





/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,
  // лічильник транзакції
  nextId: 1, 
  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    const transaction = {
      amount: amount,
      type: type,
      id: this.nextId
    }
    this.nextId += 1;
    return transaction;
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
    this.transactions.push(transaction)
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if(amount > this.balance){
      alert("Недостатьно коштів")
      return 
    }
    this.balance -= amount
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
    this.transactions.push(transaction)
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for(let i = 0; i < this.transactions.length; i += 1){
      const transaction = this.transactions[i]
      if(transaction.id === id){
        return transaction
      }
    } 
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;
    for(let i = 0; i < this.transactions.length; i += 1){
      if(this.transactions[i].type === type){
         total += this.transactions[i].amount
      }
    }
    return total
  },
};

account.deposit(1000)
console.log("Сума після поповнення", account.getBalance());

account.deposit(500)
console.log("Сума після поповнення", account.getBalance());
account.deposit(100)
console.log("Сума після поповнення", account.getBalance());
account.deposit(700)
console.log("Сума після поповнення", account.getBalance());





account.withdraw(120)
console.log("Сума після зняття", account.getBalance());
account.withdraw(600)
console.log("Сума після зняття", account.getBalance());
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionDetails(5));

// console.log(account.transactions);
// console.log(account.getTransactionTotal("deposit"));
// console.log(account.getTransactionTotal("withdraw"));

const  totalDeposit = account.getTransactionTotal("deposit")
console.log(`загальна сума поповнення ${totalDeposit} гривень`);

const  totalWithdraw = account.getTransactionTotal("withdraw")
console.log(`загальна сума зняття ${totalWithdraw} гривень`);

const TransactionDetails = account.getTransactionDetails(5)
console.log(`детальна по транзакції`, TransactionDetails);