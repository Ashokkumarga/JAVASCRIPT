// function checkObj(obj, checkProp) {
//     ({ gift: "pony", 
//      pet: "kitten", 
//      bed: "sleigh"})
//    }
// console.log(checkObj());  


// const myObj = {
//     top: "hat",
//     bottom: "pants"
//   };
  
//   console.log(myObj.hasOwnProperty("top"));
//   myObj.hasOwnProperty("middle");


//   const checkObj={ gift: "pony", 
//   pet: "kitten", 
//   bed: "sleigh"};
//   console.log(checkObj.hasOwnProperty("gift"));



//   function checkObj(obj, checkProp) {
//     // Only change code below this line
//     const checkObj(obj,checkProp)={ gift: "pony", 
//       pet: "kitten", 
//        bed: "sleigh"};
//    if (obj.hasOwnPoperty(checkProp)){
//      return obj.checkProp;
//    }else {
//      return "Not Found"
//    }
//     // Only change code above this line
//   }
// console.log(checkObj())


// function checkObj(obj, checkProp) {
    // Only change code below this line
//   const checkObj={gift: "pony",
//      pet: "kitten", 
//      bed: "sleigh"};
//    if (obj.hasOwnPoperty(obj)){
//      return obj.checkProp;
//    }else {
//      return "Not Found"
//    }
//     // Only change code above this line
// //   }
//   console.log(checkObj())

// function takeArray(array){
//   let newArray = array.split('');
//   let newReverse=newArray.reverse();
//   let Joined= newReverse.join('');
//   return Joined;
  
// }
// console.log(takeArray("ashok"));



// let name='ashok';
// console.log(name);
// let newName=name.split('');
// console.log(newName);
// let name1=newName.reverse();
// console.log(name1);
// let name2=name1.join('');

// console.log(name2);


// Setup
// const myArray = [];

// // Only change code below this line
// let j=5;
// while (j>=0){
//   myArray.push(j);
//   j--;
// }

// console.log(myArray)

// const ourArray = [];
// let i = 0;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }

// console.log(ourArray)


// const myArray = [];

// // Only change code below this line
// for (let i=1;i<6;i++){
//   myArray.push(i);
// }

// console.log(myArray)


// const ourArray = [];

// for (let i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// console.log(ourArray)



const myArray = [];

// Only change code below this line
// for (let i=9;i>=1;i-=2){
//   myArray.push(i);
// }
// console.log(myArray)


// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// // Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// for(i=0;i<myArr.length;i++){
//   console.log(myArr(i));
// }
// ;





// function multiplyAll(arr) {
//   let product = 1;
//   let arri=0;
//   // Only change code below this line
// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr.length;j++){
//      arri*=arr[i];
//      console.log(aari)
//   }
// }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// // console.log(multiplyAll())




function countdown(n){
  if(n<1){
    return [];
  }else{
    const countArray=countdown(n-1);
    countArray.push(n-1);
    countArray.unshift(n);
    return countArray;
  }
  
}
console.log(countdown(10))

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}