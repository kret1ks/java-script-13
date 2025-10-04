const user = {
  name: "Mango",
  age: 20,
  hoby: "reading",
  premium: true,
};

const {name, age, hoby: hobyNew = "skydiving", premium: premiumNew = false, mood = "happy"} = user


const newUser = {name, age, hoby: hobyNew, premium: premiumNew, mood};
console.log(newUser);
