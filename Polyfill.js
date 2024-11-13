
  
  Array.prototype.myFilter = function(cb) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
  };
  
  Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
      acc = cb(acc, this[i], i, this);
    }
    return acc;
  };


const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);

const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers);