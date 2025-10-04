// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


const user = {
  name: "Mango",
  age: 20,
  hoby: "reading",
  premium: true,
};

const {name, age, hoby: newHoby = "skydiving", premium: newPremium = false, mood = "happy"} = user
const newUser = {name, age, hoby: newHoby, premium: newPremium, mood};

for(const key of Object.keys(newUser)){
  console.log(`${key}: ${newUser[key]}`);
  
}