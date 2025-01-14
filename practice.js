// Bai1

class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  
  let vec1 = new Vec(3, 4);
  let vec2 = new Vec(1, 2);
  
  console.log(vec1.plus(vec2));
  console.log(vec1.minus(vec2)); 
  console.log(vec1.length); 
  console.log(vec2.length);
  

  //Bai2

  class Group {
     constructor() {
        this.group = []
     }
     add(value) {
        if (!this.has(value)) {
           this.group.push(value)
        }
     }
     delete(value){
            this.group = this.group.filter(v => v !== value)
     }
     has(value){
         return this.group.includes(value)
     }
    //tạo 1 cái mới thông qua 1`iterable
     static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
          group.add(value);
        }
        return group;
      }
  } 
  let group1 = new Group();
group1.add(1);
group1.add(2);
console.log(group1.has(1)); 
console.log(group1.has(3)); 

group1.delete(1);
console.log(group1.has(1)); 

let array = [1, 2, 3, 4, 5];
let group2 = Group.from(array);
console.log(group2.has(3)); 
console.log(group2.has(6));