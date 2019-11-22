interface Puppy {
    name: string;
    age: number;
  };
  
  const realPuppy: Puppy = {
    name: 'Pikachu',
    age: 1
  };
  
  const notRealPuppy: Puppy = { 
      says: 'meow' //  Error: this is clearly not a puppy 
  }