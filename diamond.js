//forward diamond
// for(let i=1;i<5;i++)
// {
//     let str= "*";
//     console.log(str.repeat(i));
// }

//backword diamond
// for(let i=5;i<=1;i--)
// {
//     let str= "*";
//     console.log(str.repeat(i));
// }

// let x = "akshay";
// console.log(x.repeat(4));

const numberOfRows = 5; // Change this value to increase/decrease the number of rows

for (let i = 1; i <= numberOfRows; i++) {
   let starPattern = 'akshay';
   console.log(starPattern);
  for (let j = 1; j <= i; j++) {
     starPattern += '*';
    // console.log(i,j);
  }
  console.log(starPattern);
}
