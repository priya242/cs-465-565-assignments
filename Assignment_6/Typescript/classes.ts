export class Puppy {
    constructor(public name: string){
      //  Later we'll have code here 
    }
    bark(){
      return 'Gav! my name is ' + this.name;
    }
  }
  
  var hotdog = new Puppy('Édouard');
  console.log(hotdog.bark());
  //  Let's create more puppies 
  var oscar = new Puppy('Oscar-Claude');
  console.log(oscar.bark());