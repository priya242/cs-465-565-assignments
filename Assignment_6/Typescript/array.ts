// Array<Type>
const cats: Array<string> = ['Simba', 'Aslan'];
//  Type[] does the same thing. 
const cats2: string[] = ['Simba', 'Aslan'];

interface Cat {
  name: string,
  age: number
}

const betterCats: Cat[] = [
  {name: 'Simba', age: 22},
  {name: 'Aslan', age: 9999}
];

console.log(betterCats);