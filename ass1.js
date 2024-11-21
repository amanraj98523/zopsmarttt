function sum(x) {
  const innerSum = (y = null) => {
      if (y === null) return x; 
      x += y; 
      return innerSum; 
  };
  return innerSum; 
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(3)(7)());          
