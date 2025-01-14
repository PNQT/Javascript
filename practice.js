const bai1 = () => {
    for (var i = 1; i < 7; i++) {
        console.log("#".repeat(i));
    }
};
// bai1();



function bai2(size) {
    let chessboard = "";
    for (let row = 0; row < size; row++) {
        let rowString = "";
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                rowString += "#";
            } else {
                rowString += " ";
            }
        }
        chessboard += rowString + "\n";
    }
    return chessboard;
}
let size = 8;
// console.log(bai2(size));

const bai3 = () => Math.min(2 , 3)

// console.log(bai3());

function isEven(n) {
   
    if (n === 0) {
        return true; 
    } else if (n === 1) {
        return false; 
    } else if (n < 0) {
        return false;
    } else {
       
        return isEven(n - 2);
    }
}

console.log(isEven(50));
console.log(isEven(72)); 
console.log(isEven(-1)); 


const countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

function countBs(string) {
    return countChar(string, 'B');
}

console.log(countBs("BBCBBAB")); 
console.log(countChar("hello world", 'o')); 


let users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "John" },
    { id: 3, name: "Anna" },
  ];
  
  let user = users.find((item) => item.id === 2);

    console.log(user);   //{ id: 2, name: 'John' }

  const bin = users.findIndex( (user) => user.name === "John")
  
  console.log(bin); //1